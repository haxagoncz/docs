# Struktura platformy HAXAGON

Platforma HAXAGON organizuje uživatele a obsah do hierarchické struktury. Pochopení této struktury pomáhá efektivně spravovat výuku.

## Hierarchie

```
Organizace (např. škola)
│
├── Správci organizace
│   └── Plná kontrola nad celou organizací
│
├── Skupina 1 (např. 3.A)
│   ├── Učitelé skupiny
│   └── Studenti skupiny
│
├── Skupina 2 (např. 4.B)
│   ├── Učitelé skupiny
│   └── Studenti skupiny
│
└── Licence
    └── Určuje dostupné úlohy
```

## Organizace

**Organizace** je nejvyšší úroveň struktury, typicky reprezentuje školu nebo instituci.

Každá organizace má:
- **Jméno** – název školy/instituce
- **Licenci** – určuje, které úlohy jsou dostupné
- **Správce** – uživatele s plnou kontrolou
- **Skupiny** – třídy nebo kurzy

## Skupiny

**Skupina** je základní jednotka pro organizaci výuky. Typicky odpovídá třídě nebo kurzu.

### Vlastnosti skupiny
- **Jméno** – např. "3.A" nebo "Kroužek programování"
- **Členové** – studenti a učitelé
- **Žebříček** – může být zapnutý nebo vypnutý
- **Zadané úlohy** – úlohy přiřazené této skupině

### Typy členství ve skupině

| Role | Oprávnění |
|------|-----------|
| **Student** | Řešit zadané úlohy, vidět žebříček (pokud povolen) |
| **Učitel** | Vše co student + zadávat úlohy, spravovat členy, exportovat statistiky |

::: tip
Učitel může být zároveň studentem v jiné skupině – např. pro testování úloh nebo když se chce podívat na to jak platforma vypadá z prespektivy studenta.
:::

## Role v systému

### Student
- Může **řešit úlohy** zadané ve svých skupinách nebo v soutěžních zónách
- Vidí **žebříčky** skupin, kde je členem (pokud jsou povoleny)
- Může měnit své **nastavení** a **avatar**
- Nemůže zadávat úlohy ani spravovat jiné uživatele

### Učitel
- Vše co student
- Může **zadávat úlohy** skupinám, kde je učitelem
- Může **spravovat studenty** ve svých skupinách (přidávat, odebírat, povyšovat)
- Může **vytvářet nové skupiny** v organizaci
- Může **exportovat statistiky** svých skupin
- Může **zvát nové uživatele** do svých skupin

### Správce
- Vše co učitel
- Vidí a spravuje **všechny skupiny** v organizaci
- Může **povyšovat učitele na správce** (a naopak)
- Má přístup ke **všem pozvánkám** v organizaci
- Může **mazat učitele** z organizace

Více o správcích v [dokumentaci pro správce](/admins/).

## Licence

**Licence** určuje, které úlohy jsou v organizaci dostupné. Licence je přiřazena k organizaci a ovlivňuje všechny její členy.

Učitelé a správci vidí v Katalogu pouze úlohy, které jsou součástí licence jejich organizace.

::: info
Pro změnu nebo rozšíření licence kontaktujte podporu na [podpora@haxagon.cz](mailto:podpora@haxagon.cz).
:::

## Příklad struktury

```
Gymnázium Příklad
│
├── 👑 Správci: Jan Novák
│
├── 📚 Skupina: 1.A - Informatika
│   ├── 👩‍🏫 Učitelé: Marie Svobodová
│   └── 👨‍🎓 Studenti: 25 studentů
│
├── 📚 Skupina: 2.B - Programování  
│   ├── 👩‍🏫 Učitelé: Marie Svobodová, Petr Horák
│   └── 👨‍🎓 Studenti: 18 studentů
│
├── 📚 Skupina: Kroužek kybernetické bezpečnosti
│   ├── 👩‍🏫 Učitelé: Jan Novák
│   └── 👨‍🎓 Studenti: 12 studentů
│
└── 📜 Licence: Velká licence
    └── 150+ úloh dostupných
```