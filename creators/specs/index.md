 # Technická specifikace požadavků na úlohu spustitelnou v platformě Haxagon

 ## Základní principy fungování platformy

 Systém Haxagon zprostředkovává soutěžícím přístup k soutěžním úlohám. Automatizovaně tyto úlohy spouští a vytváří vzdálené připojení pro soutěžící. Aby byla úloha nasaditelná v systému, je nutné, aby splňovala určité technické specifikace.

 ## Technická specifikace úloh

 ### Virtualizace infrastruktury
 <!-- 
 V systému Haxagon mohou být úlohy spouštěny pomocí dvou druhů virtualizace:
 - ***Vagrant***  
    [Vagrant](https://www.vagrantup.com/) je nástroj pro správu virtuálních strojů, které umožňuje vytvořit, spravovat a automatizovat viruální prostředí. Je nutné použít livcrt provider pro spouštění úloh v systému Haxagon. 
 - ***Docker***  
 -->
V systému Haxagon jsou úlohy spouštěny virtualizací v **Dockeru**.  
[Docker-compose](https://docs.docker.com/compose/) je nástroj pro spouštění a správu aplikací pomocí [Docker](https://docs.docker.com/)u. Umožňuje spouštět více kontejnerů jako jeden celek a řídit je pomocí jednoho konfiguračního souboru.

### Struktura repozitáře s úlohou
Formát úlohy je velice jednoduchý – stačí systému poskytnout následující soubory v gitovém repozitáři:
- `challenge.yaml` - Soubor ve formátu YAML, který definuje základní parametry úlohy.
<!-- - potřebné zadání pro virtualizačního providera, který vytvoří infrastrukturu pro každou instanci úlohy (podle druhu virtualizace):
    - `Vagrantfile`
    - `docker-compose.yaml` -->
- `docker-compose.yaml` / `docker-compose.yml` - Instrukce pro sestavení kontejneru(ů) úlohy, viz [Docker dokumentace](https://docs.docker.com/compose/).
- `THEORY.md` - Markdown soubor s teoretickou částí úlohy, kde jsou řešiteli předávány teoretické znalosti bez vazby na obsah úlohy.
- `HANDBOOK.md` - Markdown soubor obsahující obsah, který slouží jako příručka pro učitele.
- `DESCRIPTION.md` - Krátký popis k zadání úlohy.

Tyto soubory jsou detailněji rozebrány v následujících sekcích.

# `challenge.yaml`

| název parametru       | popis parametru                                                                       | typ                                           | povinný parametr
|---------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------
| title                 | Pojmenování úlohy                                                                     | string                                        | ANO
| shortDescription      | Krátký popisek shrnující obsah úlohy                                                  | string                                        | NE
| difficulty            | Určení obtížnosti úlohy. Více o obtížnosti dále.                                      | [difficulty](#difficulty)                     | NE
| image                 | Url adresa obrázku, který slouží jako thumbnail                                       | string                                        | NE
| theory                | Relativní cesta k Markdown souboru s teorií k úloze                                   | string                                        | NE
| description           | Relativní cesta k Markdown souboru s popisem k vlajkám                                | string                                        | NE
| handbook              | Relativní cesta k Markdown souboru s příručkou pro učitele                            | string                                        | NE
| type                  | Typ úlohy. Více o typu úlohy dále.                                                    | [type](#type)                                 | NE
| tags                  | Pole definující kategorizaci úlohy                                                    | string[]                                      | NE
| googleSpreadSheetId   | Google sheets document ID zdrojového dokumentu.                                       | [googleSpreadSheetId](#googlespreadsheetid)   | NE
| access                | Pole objektů definující možnosti připojení k úloze. Více o přístupu dále.             | [access](#access)                             | NE
| flags                 | Pole objektů definující vlajky, které budou součástí úlohy. Více o vlajkách dále.     | [flags](#flags)                               | ANO

## `difficulty`

Vabírat můžete z těchto možností:
- beginner
- average
- skilled
- expert
- master
- unselected


## `type`

Typ úlohy. Tento údaj říká HAXAGONu jakým způsobem má k úloze přístupovat. Výchozí hodnotou je `docker`. Pokud tvoříte úlohu virtualizovanou pomocí dockeru, tak tento parametr nemusítě vůbec uvádět.

Vabírat můžete z těchto možností:
- **docker**: Úloha virtualizovaná pomocí dockeru
- **quiz**: Nevirtualizovaná úloha
- **sheets**: Úloha v prostředí Google Sheets


## `googleSpreadSheetId`
Google sheets document ID zdrojového dokumentu. Zdrojový dokument musí mít nastavené oprávnění čtení pro kohokoli s odkazem.
Samotné ID pak lze získat z URL dokumentu.

Pokud by url vypadala následnovně:
```
https://docs.google.com/spreadsheets/d/16yi2Nc9gwddlPhFxJBhHSm2_wo4U9lI-D6Okt0Xw_iI/edit?gid=0#gid=0
```

Pak je ID: `16yi2Nc9gwddlPhFxJBhHSm2_wo4U9lI-D6Okt0Xw_iI`.

> Tento paramert zadávejte jen v případě, že úloha je typu `sheets`


## `access`

Základní formát objektů přístupu je tento:
| název parametru | popis parametru                                 | typ       | příklad                   | povinný parametr
| --------------- | ----------------------------------------------- | --------- | ------------------------- | ----------------
| type            | Typ připojení, viz dále.                        | string    | "ssh"                     | ANO
| port            | Port, na který se mají řešitelé připojit.       | number    | 22                        | NE
| username        | Uživatelské jméno použité pro připojení.        | string    | student                   | NE
| password        | Heslo použité v páru s uživatelským jménem.     | string    | heslo1234                 | NE
| text            | Nepovinný text s dodatečnými informacemi.       | string    | "Formátovaný \*text\*"    | NE

V parametru `type` je možné použít jednu z těchto hodnot:
- ssh
- http
- vnc
- rdp
- tcp
- udp
- other  

U typu připojení `other` není povinné uvádět parametry `port`, `username` a `password`, většinou je ale naopak velmi využíván parametr `text` k vysvětlení nestandardního připojení.

Parametr `text` umožňuje využití Markdownu k formátování. Fungování víceřádkových textů v YAML je hezky vysvětleno na stránce [YAML-multiline.info](https://yaml-multiline.info/).

## `flags`
Vlajky se dělí do celkem 6 typů.

Všechny typy vlajek mají společné tyto parametry:

| název parametru | popis parametru                                                                     | typ       | příklad                                   | povinný parametr
| --------------- | ----------------------------------------------------------------------------------- | --------- | ----------------------------------------- | ----------------
| name            | Pojmenování vlajky                                                                  | string    | Oprávnění souboru `file-1`                | ANO
| description     | Bližší informace o úkolu. Podporuje Markdown formátování.                           | string    | Změň oprávnění souboru `file-1` na 742.   | NE
| points          | Bodové ohodnocení vlajky                                                            | number    | 20                                        | ANO
| identifier      | Unikátní (v rámci této úlohy) identifikátor vlajky                                  | string    | `file-perms-check1`                       | ANO
| type            | Číslo označující druh vlajky<br>Je nutné uvést `type` jako `string` v uvozovkách!   | string    | "4"                                       | ANO

V souboru pro [teorii](theory.md) lze vložit placeholder pro zobrazení konkrétní vlajky pomocí elementu `<haxagonflag>`. Tento element umožňuje dynamicky vkládat vlajku přímo do textu. Pro správné zobrazení je potřeba nastavit atribut `identifier` na odpovídající identifikátor vlajky.

```
<haxagonflag identifier="flag-1"></haxagonflag>
```
> Vloží vlajku, která má parametr identifier `flag-1`, na místo této definice.


### Dynamická vlajka

Každá instance úlohy má unikátně vygenerované vlajky tak, aby se zamezilo podvádění. Jejich unikátnost je zaručena vygenerováním náhodného řetězce, kterým jsou nahrazeny všechny výskyty **placeholder**u ve všech souborech v repozitáři scénáře. Aby nedošlo k nechtěné záměně, jsou všechna místa určená k nahrazení ohraničena znaky `#@{{'{{'}}` a `}}@#`. Právě **placeholder** slouží autorovi úlohy k označení a odlišení jednotlivých míst.

Při zpuštění se tedy z `#@{{'{{'}}vlajka1}}@#` stane např. `haxagon{897316929176464ebc9ad085f31e7284}` a v jiné instanci úlohy s úplně stejným scénářem zase `haxagon{99bd2e29f6b569bb880f601815cd77ef}`.

::: warning POZOR
K nahrazení řetězců dochází až v runtime instance. To znamená, že nahrazení probíhá těsně před tím, než systém zavolá `docker compose up`.

Je potřeba rozdělit `build` fázi kontejnerů a jejich `runtime` fázi. Například tento kód v souboru Dockerfile některého z kontejnerů úlohy (`RUN echo #@{{'{{'}}vlajka1}}@# > /tmp/test`) nesplní očekávání, protože příkaz `RUN` v Dockerfile je spouštěn při sestavování (`build`) obrazů kontejnerů.

Pro zpřístupnění dynamické vlajky v `runtime` fázi kontejneru je potřeba vytvořit složku, v ní vytvořit soubor s **placeholder**em a tu složkou připojit (`mount`) pomocí `volumes` definice v docker compose.
:::

Specifika pro vlajky tohoto typu:

| název parametru | popis parametru                                                                         | typ       | příklad   | povinný parametr
| --------------- | --------------------------------------------------------------------------------------- | --------- | --------- | ----------------
| type            | "1", označuje tento typ vlajky                                                          | string    | "1"       | ANO
| placeholder     | Zástupný řetězec znaků sloužící pro označení místa, do kterého se vloží unikátní vlajka | string    | flag2     | ANO
| maximumTries    | Maximální možný počet pokusů pro odpověď                                                | number    | 3         | ANO


### Statická vlajka

Tento druh vlajky mám pro všechny uživatele a ve všech instancích stejnou hodnotu.

Specifika pro vlajky tohoto typu:

| název parametru | popis parametru                             | typ       | příklad           | povinný parametr
| --------------- | ------------------------------------------- | --------- | ----------------- | ----------------
| type            | "2", označuje tento typ vlajky              | string    | "2"               | ANO
| answer          | Odpověď na úkol                             | string    | flag{{'{'}}1234}  | ANO
| maximumTries    | Maximální možný počet pokusů pro odpověď    | number    | 3                 | ANO


### Vlajka s možností výběru odpovědi

Specifika pro vlajky tohoto typu:

| název parametru | popis parametru                             | typ       | příklad   | povinný parametr
| --------------- | ------------------------------------------- |-----------| --------- | ----------------
| type            | "3", označuje tento typ vlajky              | string    | "3"       | ANO
| maximumTries    | Maximální možný počet pokusů pro odpověď    | number    | 3         | ANO
| options         | Pole objektů možných odpovědí               | viz níže  | viz níže  | ANO

Objekty odpovědí mají tuto strukturu:
```yaml
- value: "chybná odpověď"
  correct: false # nebo true pro správnou odpověď
```


### Automaticky vyhodnocující se vlajka

Pomocí `docker compose exec` se v definovaném **interval**u spouští definovaný příkaz **command** a podle návratové hodnoty **exitCode** procesu se určí, zda byla vlajka splněna. Možnost **container** určuje, ve kterém z možných kontejnerů se proces spustí.

| název parametru | popis parametru                                                                                     | typ                   | příklad                                           | povinný parametr
| ----------------| --------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------- | ----------------
| type            | "4", označuje tento typ vlajky                                                                      | string                | "4"                                               | ANO
| command         | Příkaz, který se spustí pro ověření splnění úkolu                                                   | string                | `bash -c '[ "$(cat /tmp/test.txt)" == "ahoj" ]'`  | ANO
| container       | Cílový kontejner, ve kterém se příkaz bude spouštět                                                 | string                | server                                            | ANO
| shell           | Shell, ve kterém je příkaz spouštěn                                                                 | string                | sh                                                | NE
| user            | Uživatel, pod kterým se příkaz spouští                                                              | string                | root                                              | NE
| interval        | Interval, ve kterém dochází ke spuštění příkazu                                                     | number                | 2000                                              | ANO
| exitCode        | Návratový kód **command**u, který bude považován za úspěch pro splnění vlajky                       | number                | 0                                                 | ANO
| requiredFlags   | Volitelné pole `identifier`ů vlajek, které musí být splněny, než se vyhodnotí příkaz této vlajky.   | string \| string[]    | `file-perms-check1`                               | NE

Parametr `interval` je měřen v milisekundách.

Pokud bude jako hodnota `interval` uvedena 0, `command` nebude prováděn automaticky, ale v zadání úlohy se objeví tlačítko, kterým si ho řešitelé mohou spustit manuálně. Toto je vhodné pro náročné příkazy, jejichž vyhodnocení trvá dlouho nebo vyžaduje hodně prostředků.

Pokud pole `requiredFlags` obsahuje pouze jeden prvek, zapisuje se jako `requiredFlags: "file-perms-check1"`. Pokud obsahuje více prvků, je třeba hodnoty zapsat jako YAML sekvenci. Pokud není třeba splnění vlajky podmiňovat jinou vlajkou, `requiredFlags` se neuvádí vůbec.

### Vlajka automatické kontroly tabulek

Skrze Google API se získají data z dokumentu tabulek. Ty jsou následně předány do izolovaného sandboxu, kde se provede kontrola úkolu.

| název parametru | popis parametru                                                                                                                 | typ                   | příklad                                                               | povinný parametr
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------------------------- | ---------------
| type            | "5", označuje tento typ vlajky                                                                                                  | string                | "5"                                                                   | ANO
| let             | Objekt proměnných, do kterých jsou uloženy hodnoty z odpovědi z Google API                                                      | object                | `a: sheets.0.data.0.rowData.5.values.5.userEnteredValue.formulaValue` | ANO
| condition       | JS kod, který v sandboxu vyhodnotí splnění úkolu. Úkol je vyhodnocen jako splněný v případě, že návratová hodnota bude true.    | string                | "a == 1"                                                              | ANO
| requiredFlags   | Volitelné pole `identifier`ů vlajek, které musí být splněny, než se vyhodnotí příkaz této vlajky.                               | string \| string[]    | `file-perms-check1`                                                   | NE

### Vlajka kontroly kódu

Specifikace pro vlajky tohoto typu:

| název parametru   | popis parametru                                               | typ       | příklad               | povinný parametr
| ----------------- | ------------------------------------------------------------- |---------- | --------------------- | ----------------
| type              | "6", označuje tento typ vlajky                                | string    | "6"                   | ANO
| defaultCode       | Relativní cesta k výchozímu kódu                              | string    | ./Defaults/code.py    | ANO
| checker           | Relativní cesta ke kódu, který zkontroluje napsaný program    | string    | ./Checkers/code.py    | ANO
| testCases         | Pole objektů definující jména jednotlivých testů              | object[]  | viz níže              | ANO

```
testCases:
  - name: "test 1"
  - name: "test 2"
  - name: "test 3"
```

## Ukázkový soubor `challenge.yaml`

```yaml
# název úlohy
title: Ukázková úloha

# krátký popisek shrnující obsah úlohy
shortDescription: Ukázková úloha

# obtížnost úlohy
difficulty: beginner

# relativní cesta k souboru obsahující teorii k látce v úloze
theory: './THEORY.md'

# relativní cesta k souboru obsahující popis k řešení vlajek
description: ./DESCRIPTION.md

# relativní cesta k souboru obsahující učitelskou příručku k úloze
handbook: ./HANDBOOK.md

# informace o možnostech připojení na úlohu
access:
  - type: "ssh"
    port: 22
    username: student
    password: heslo1234

  - type: "http"
    port: 80
    username: student
    password: heslo1234

# vlajky, ktere jsou s ulohou spojeny
flags:
  - name: Obsah souboru /tmp/file1
    description: 
    points: 10
    type: "1"
    identifier: "file-content-1"
    placeholder: flag1
    maximumTries: 3
  - name: Heslo uživatele adam
    description: Najdi způsob, jak získat heslo uživatele `adam` v plaintextu.
    points: 20
    type: "2"
    identifier: "password-dump1"
    answer: flag{adamisbest}
    maximumTries: 2
  - name: Vyber správnou odpověď
    description: 
    points: 30
    type: "3"
    identifier: "choice-flag1"
    maximumTries: 2
    options:
      - value: správná odpověď
        correct: true
      - value: chybná odpověď
        correct: false
  - name: /tmp/test.txt
    description: Do souboru /tmp/test.txt zapiš text "ahoj".
    points: 30
    type: "4"
    identifier: "file-content-check1"
    command: "sh -c '[ \"$(cat /tmp/test.txt)\" == \"ahoj\" ]'"
    interval: 1000
    container: "server"
    exitCode: 0
```

--- 
<br>

# `docker-compose.yaml`

Tímto souborem jsme schopni definovat, jaká infrastruktura se pro úlohu spustí. Dokumentace formátu je dostupná na [https://docs.docker.com/compose/](https://docs.docker.com/compose/).

## Limity
V souboru docker-compose není možné
- Eskalovat práva kontejneru
    - Vytvářet privilegované kontejnery
    - Přidávat kontejnerům systémové schopnosti (system capabilities)
- Mountovat adresáře a soubory (vše potřebné by mělo být do kontejneru přidáno v build fázi)

## Signalizace úspěšného nastartování scénáře

Je nutné systém informovat o tom, že je scénář spuštěný a vše je připraveno. Tuto informaci je možné systému sdělit tím, že do `stdout` entrypointu/commandu libovolného commandu definovaného v docker-compose souboru vypíšete řetězec `SCENARIO_IS_READY`.

## Ukázkový docker-compose.yml
```yaml
services:
    webserver:
        image: nonbusybox
        container_name: webserver
        command: sh -c '/setup.sh && echo SCENARIO_IS_READY && sleep infinity'
        ports:
            - "80:80"
```

--- 
<br>

<!-- # `Vagrantfile`

Vagrantfile je konfigurační soubor pro [Vagrant](https://www.vagrantup.com/), který se používá k nastavení virtuálního prostředí pro vaši úlohu. Tento soubor by měl být umístěn ve stejné složce jako `challenge.yaml`.

## Obsah Vagrantfile

Ve `Vagrantfile` může být nastaveno např.:
- Image operačního systému, který se má použít pro virtuální stroj (např. **Ubuntu**, nebo **CentOS**)
- Konfigurace sítě pro virtuální stroj
- Provisioning
- Omezení prostředků (RAM, CPU, růzené IO atp.)

## Příklad `Vagrantfile`
```ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  # Nastavení libvirt provider
  config.vm.provider :libvirt do |libvirt|
    libvirt.driver = "kvm"
  end

  # Nastavení obrazu operačního systému pro virtuální stroj
  config.vm.box = "ubuntu/focal64"

  # Konfigurace privátní sítě pro virtuální stroj
  config.vm.network "private_network", ip: "192.168.33.10"

  # Nastavení RAM a CPU pro virtuální stroj
  config.vm.provider "libvirt" do |vb|
    vb.memory = "512"
    vb.cpus = 1
  end

  # Konfigurace shell provisioningu
  config.vm.provision "shell" do |s|
    s.inline = <<-SHELL
      apt-get update
      apt-get install -y apache2
      echo SCENARIO_IS_READY
    SHELL
    s.env = {
      "VARIABLE_NAME" => "value"
    }
  end
end
``` -->



# `THEORY.md`
Zde jsou předávány teoretické znalosti bez vazby na obsah úlohy.

Je *důrazně* doporučeno používat správné Markdown formátování pro zvýšení přehlednosti.

# `DESCRIPTION.md`
Úvod k řešení vlajek. Často zde bývá zopakování příběhu úlohy (pokud nějaký je), nebo poznámka o speciálních nestandardních nástrojích, které je možné při řešení využít.


# `HANDBOOK.md`
Do Příručky patří návod k vyřešení celé úlohy, je viditelná pouze pro učitele.

Také je možné uvést poznámky pro učitele, jak dobře vysvětlit danou látku či na co poukázat.

<br>

# Další konvence pro tvorbu zadání
## Technické informace a formátování
Části textu obsahující nějakou technickou informaci, např.:
- definici subnetu - `192.168.40.0/24`
- příkazy - `find --name file`
- parametr - `--sevice-scan`
a podobné zaobalíme do code highlight bloku pomocí znaku \`

Další tipy k formátování naleznete na [dedikované stránce](../formatting/index.md).
