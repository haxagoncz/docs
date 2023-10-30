# Specifikace úlohy

Specifikace úlohy definuje informace o úloze: nadpis, popisek a vlajky. Je používán formát `YAML` pro svou jednoduchou čitelnost kýmkoli, i pro neznalé přesného formátu.

## Příklad

```yaml
title: 'Testovací úloha'

# Krátký popisek se jednoduché shrnutí, čeho se úloha týká.
# Zobrazuje se v přehledech a dalších místech, 
# kde stačí vědět pouze zhruba o čem úloha je.
shortDescription: 'This is a description, that should be kept short'

# Teorie je vysvětlení tématu úlohy.
# Může obsahovat příběh, nápovědy a další metody jak udělat úlohu jednodušší,
# když studenti neznají teorii předem z hodin. 
# Protože Teorie bývá často dlouhá, je v samostatném souboru,
# na který tento řádek odkazuje.
theory: './THEORY.md'

# Krátký popis k úloze, který se ukazuje nad zadáním vlajek.
# Zde je možné uvést příběh pro řešení úlohy, nebo jen poskytnout základní informace,
# co bude po řešitelích požadováno.
description: './DESCRIPTION.md'

# Příručka se částečně podobá Teorii, ale není viditelná pro studenty.
# Díky tomu většinou obsahuje krok za krokem návod k řešení úlohy,
# nebo poznámky pro učitele k vysvětlování látky.
handbook: './HANDBOOK.md'

# Toto je seznam všech služeb, které jsou dostupné z venku úlohy.
# Služby jsou dostupné na IP adrese úlohy,
# což může být buďto veřejná IP adresa, nebo adresa ve VPN subnetu.
access:
  - type: "ssh"
    port: 22
    username: student
    password: heslo1234
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu

  - type: "http"
    port: 80
    username: student
    password: heslo1234
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu

  - type: "vnc"
    port: 5900
    username: admin
    password: password
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu

  - type: "rdp"
    port: 3389
    username: admin
    password: password
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu

  - type: "tcp"
    protocol: "minecraft"
    port: 12345
    username: admin
    password: password
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu

  - type: "udp"
    protocol: "minecraft"
    port: 12345
    username: admin
    password: password
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu

  - type: "other"
    text: |
      Dodatečné informace ke způsobu připojení s možností použití markdownu

# Toto je seznam všech vlajek – statických, dynamických, automatických i jiných
flags:
  # Typ 2 je statická textová vlajka
  - type: 2
    identifier: 'bobs-id'
    answer: '1003'
    maximumTries: 3

    name: 'Jaké id má uživatel `bob`?'

    # Popis vlajky je inline markdown, který může obsahovat zástupné znaky.
    # (O těch více na další stránce.)
    # Je používán jako plný popis vlajky, často zmiňuje další teorii nebo informace.
    description: |
      V systému souborů na linuxu se v adresáři `etc` nachází soubor `passwd`.
      Jsou v něm uloženy informace o uživatelích – jejich id, id primárních skupin,
      domovský adresář, uživatelské jméno a shell.

      Může vypadat nějak takto:
      ```
      root:x:0:0::/root:/bin/zsh
      bin:x:1:1::/:/usr/bin/nologin
      daemon:x:2:2::/:/usr/bin/nologin
      mail:x:8:12::/var/spool/mail:/usr/bin/nologin
      ftp:x:14:11::/srv/ftp:/usr/bin/nologin
      http:x:33:33::/srv/http:/usr/bin/nologin
      nobody:x:65534:65534:Nobody:/:/usr/bin/nologin
      ```

      Přečtěte soubor `/etc/passwd` a zjistěte id uživatele `bob`.

    # Krátký popis vlajky je shrnutí Popisu, kterým studenti mohou rychle projet
    shortDescription: 'Zjistěte přečtením souboru `/etc/passwd` jaké id má uživatel `bob`.'
  - type: 1
    maximumTries: 2
    identifier: 'flag.txt'
    # Místo statické odpovědi se hodnota odpovědi dynamicky generuje
    # uvnitř instance úlohy
    placeholder: 'root-flag'

    name: 'Získejte vlajku z `/flag.txt`'

    # Dlouhý popis může být vynechán
    shortDescription: 'V souboru `/flag.txt` se nachází vlajka. Přečtěte ho pro její získání.'
```