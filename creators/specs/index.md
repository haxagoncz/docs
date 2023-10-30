 # Technická specifikace požadavků na úlohu spustitelnou v platformě Haxagon

 ## Základní principy fungování platformy

 Systém Haxagon zprostředkovává soutěžícím přístup k soutěžním úlohám. Automatizovaně tyto úlohy spouští a vytváří vzdálené připojení pro soutěžící. Aby byla úloha nasaditelná v systému, je nutné, aby splňovala určité technické specifikace.

 ## Technická specifikace úloh

 ### Virtualizace infrastruktury
 V systému Haxagon mohou být úlohy spouštěny pomocí dvou druhů virtualizace:
 - ***Vagrant***  
    [Vagrant](https://www.vagrantup.com/) je nástroj pro správu virtuálních strojů, které umožňuje vytvořit, spravovat a automatizovat viruální prostředí. Je nutné použít livcrt provider pro spouštění úloh v systému Haxagon.
 - ***Docker***  
    [Docker-compose](https://docs.docker.com/compose/) je nástroj pro spouštění a sprácu aplikací pomocí [Docker](https://docs.docker.com/)u. Umožňuje spouštět více kontejnerů jako jeden celek a čídit je pomocí jednoho konfiguračního souboru.

### Struktura repozitáře s úlohou
Formát plohy je velice jednoduchý - stačí systému poskytnout následující soubory v gitovém repozitáři:
- `challenge.yaml` - Soubor ve formátu YAML, který definuje základní parametry úlohy.
- potřebné zadání pro virtualizačního providera, který vytvoří infrastrukturu pro každou instanci úlohy (podle druhu virtualizace):
    - `Vagrantfile`
    - `docker-compose.yaml`
- `THEORY.md` - Markdown soubor s teoretickou částí úlohy, kde jsou řešiteli předávány teoretické znalosti bez vazby na obsah úlohy.
- `HANDBOOK.md` - Markdown soubor obsahující obsah, který slouží jako příručka pro učitele.
- `DESCRIPTION.md` - Krátký popis k zadání úlohy.

Tyto soubory jsou detailněji rozebrány v následujících sekcích.

# `challenge.yaml`

| název parametru  | popis parametru | povinný? |
|------------------|-----------------|----------|
| title            | Pojmenování úlohy | ANO |
| shortDescription | Krátký popisek shrnující obsah úlohy | ANO |
| theory           | Relativní cesta k Markdown souboru s teorií k úloze | NE |
| description      | Relativní cesta k Markdown souboru s popisem úlohy k vlajkám | NE |
| handbook         | Relativní cesta k Markdown souboru s příručkou pro učitele | NE |
| access           | Pole objektů definující možnosti připojení k úloze. Více o přístupu dále. | NE |
| flags            | Pole objektů definující vlajky, které budou součástí úlohy. Více o vlajkách dále. | ANO |

## `access`

::: info
TBD
:::

## `flags`
Vlajky se dělí do celkem 5 typů.

Všechny typy vlajek mají společné tyto parametry:

| název parametru | popis parametru | příklad |
|-----------------|-----------------|---------|
| name            | Pojmenování vlajky                                   | Oprávnění souboru `file-1`
| description     | Bližší info o úkolu. Podporuje Markdown formátování. | Změň oprávnění souboru `file-1` na 742.
| points          | Bodové ohodnocení vlajky                             | 20
| identifier      | Unikátní (v rámci této úlohy) identifikátor vlajky   | `file-perms-check1`
| type            | Číslo označující druh vlajky                         | "4"

## Dynamická vlajka

Každá instance úlohy má unikátně vygenerované vlajky tak, aby se zamezilo podvádění. Jejich unikátnost je zaručena vygenerováním náhodného řetězce, kterým jsou nahrazeny všechny výskyty **placeholder**u ve všech souborech v repozitáři scénáře. Aby nedošlo k nechtěné záměně, jsou všechna místa určená k nahrazení ohraničena znaky `#@{{'{{'}}` a `}}@#`. Právě **placeholder** slouží autorovi úlohy k označení a odlišení jednotlivých míst.

Při zpuštění se tedy z `#@{{'{{'}}vlajka1}}@#` stane např. `haxagon{897316929176464ebc9ad085f31e7284}` a v jiné instanci úlohy s úplně stejným scénářem zase `haxagon{99bd2e29f6b569bb880f601815cd77ef}`.

::: warning POZOR
K nahrazení řetězců dochází až v runtime instance. To znamená, že nahrazení probíhá těsně před tím, než systém zavolá `docker compose up`.

Je potřeba rozdělit `build` fázi kontejnerů a jejich `runtime` fázi. Například tento kód v souboru Dockerfile některého z kontejnerů úlohy (`RUN echo #@{{'{{'}}vlajka1}}@# > /tmp/test`) nesplní očekávání, protože příkaz `RUN` v Dockerfile je spouštěn při sestavování (`build`) obrazů kontejnerů.

Pro zpřístupnění dynamické vlajky v `runtime` fázi kontejneru je potřeba vytvořit složku, v ní vytvořit soubor s **placeholder**em a tu složkou připojit (`mount`) pomocí `volumes` definice v docker compose.
:::

Specifika pro vlajky tohoto typu:

| název parametru | popis parametru | příklad |
|-----------------|-----------------|---------|
| type            | 1, označuje tento typ vlajky | 1 |
| placeholder     | Zástupný řetězec znaků sloužící pro označení místa, do kterého se vloží unikátní vlajka | flag2 |
| maximumTries    | Maximální možný počet pokusů pro odpověď | 3 |


## Statická vlajka

Tento druh vlajky mám pro všechny uživatele a ve všech instancích stejnou hodnotu.

Specifika pro vlajky tohoto typu:

| název parametru | popis parametru | příklad |
|-----------------|-----------------|---------|
| type            | 2, označuje tento typ vlajky | 2 |
| answer          | Odpověď na úkol | flag{{'{'}}1234} |
| maximumTries    | Maximální možný počet pokusů pro odpověď | 3 |


## Vlajka s možností výběru odpovědi

Specifika pro vlajky tohoto typu:

| název parametru | popis parametru | příklad |
|-----------------|-----------------|---------|
| type            | 3, označuje tento typ vlajky | 3 |
| maximumTries    | Maximální možný počet pokusů pro odpověď | 3 |
| options         | Pole objektů možných odpovědí | viz níže |

Objekty odpovědí mají tuto strukturu:
```yaml
- value: "chybná odpověď"
  correct: false # nebo true pro správnou odpověď
```


## Automaticky vyhodnocující se vlajka

Pomocí `docker compose exec` se v definovaném **interval**u spouští definovaný příkaz **command** a podle návratové hodnoty **exitCode** procesu se určí, zda byla vlajka splněna. Možnost **container** určuje, ve kterém z možných kontejnerů se proces spustí.

| název parametru | popis parametru | příklad |
|-----------------|-----------------|---------|
| type            | 4, označuje tento typ vlajky | 4 |
| command         | Příkaz, který se spustí pro ověření splění úkolu | `bash -c '[ "$(cat /tmp/test.txt)" == "ahoj" ]'` |
| container       | Cílový kontejner, ve kterém se příkaz bude spouštět | server |
| shell           | Shell, ve kterém je příkaz spouštěn | sh |
| user            | Uživatel, pod kterým se příkaz spouští | root |
| interval        | Interval, ve kterém dochází ke spuštění příkazu | 2000 |
| exitCode        | Návratový kód **command**u, který bude považován za úspěch pro splnění vlajky | 0 |

## Ukázkový soubor `challenge.yaml`

```yaml
title: Ukázková úloha

# relativní cesta k souboru obsahující teorii k látce v úloze
theory: './THEORY.md'

# relativní cesta k souboru obsahující popis k řešení vlajek
description: ./DESCRIPTION.md

# relativní cesta k souboru obsahující učitelskou příručku k úloze
handbook: ./HANDBOOK.md

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
      - value: správná odpověd
        correct: true
      - value: chybná odpověd
        correct: false
  - name: /tmp/test.txt
    description: Do souboru /tmp/test.txt zapiš text "ahoj".
    points: 30
    type: "4"
    identifier: "file-content-check1"
    command: "`bash -c '[ "$(cat /tmp/test.txt)" == "ahoj" ]'`"
    interval: 1000
    container: "server"
    exitCode: 0
```

