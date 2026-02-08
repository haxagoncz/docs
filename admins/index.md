# Správci organizací

Správce organizace může dělat vše, co student a učitel, a navíc má k dispozici speciální oprávnění popsaná v této sekci.

## Co je správce?

Správce je uživatel s **plnou kontrolou nad celou organizací** (typicky školou). Na rozdíl od učitele, který vidí pouze skupiny, kde je členem, správce:

- Vidí a spravuje **všechny skupiny** v organizaci
- Může **povyšovat učitele na správce** (a naopak)
- Má přístup ke **všem pozvánkám** v rámci organizace
- Může **mazat učitele** z organizace

## Rozdíly oproti učiteli

| Operace | Učitel | Správce |
|---------|--------|---------|
| Zobrazit skupiny | Pouze své | Všechny v organizaci |
| Vytvořit skupinu | ✅ | ✅ |
| Upravit/smazat skupinu | Pouze své | Všechny v organizaci |
| Přidat uživatele do skupiny | Pouze své skupiny | Všechny skupiny |
| Povýšit studenta na učitele | ✅ Ve svých skupinách | ✅ Ve všech skupinách |
| Povýšit učitele na správce | ❌ | ✅ |
| Ponížit správce na učitele | ❌ | ✅ (kromě sebe) |
| Smazat studenta | ✅ Ve svých skupinách | ✅ Ve všech skupinách |
| Smazat učitele | ❌ | ✅ |
| Zobrazit pozvánky | Své skupiny + organizační | Všechny v organizaci |
| Obnovit smazané pozvánky | ❌ | ✅ |

## Jak se stát správcem

Správce může být:
1. **Jmenován jiným správcem** – stávající správce může povýšit učitele na správce
2. **Nastaven při vytvoření organizace** – první uživatel organizace bývá automaticky správcem

::: tip
Pokud například váš správce odešel ze školy a potřebujete nastavit nového správce, nebo pokud potřebujete jakoukoli změnu rolí v organizaci, obraťte se na nás na [podpora@haxagon.cz](mailto:podpora@haxagon.cz) – rádi vám pomůžeme.
:::

## Správa uživatelů v organizaci

### Změna role uživatele

1. Přejděte na **Spravovat** → **Uživatelé**
2. Vyberte uživatele kliknutím na jeho řádek
3. V detailu uživatele můžete změnit jeho roli:
   - **Student** – může pouze řešit úlohy
   - **Učitel** – může zadávat úlohy a spravovat své skupiny
   - **Správce** – plná kontrola nad organizací

::: warning Upozornění
Správce nemůže ponížit sám sebe. Pro změnu vlastní role je nutný jiný správce.
:::

### Přehled všech skupin

Na stránce **Spravovat** → **Skupiny** vidí správce všechny skupiny v organizaci, včetně těch, kde není členem. U každé skupiny je vidět:
- Počet členů (studentů a učitelů)
- Datum vytvoření
- Stav žebříčku (zapnutý/vypnutý)

## Správa pozvánek

Správce má rozšířené možnosti práce s pozvánkami:

### Zobrazení všech pozvánek
Na stránce **Spravovat** → **Pozvánky** (nebo v detailu skupiny) vidí správce:
- Pozvánky do všech skupin v organizaci
- Pozvánky na úrovni organizace (bez přiřazení ke konkrétní skupině)

### Obnovení smazaných pozvánek
Správce může obnovit dříve smazané pozvánky, pokud ještě nevypršela jejich platnost.

## Export statistik

Správce má přístup k exportu statistik za **celou organizaci**:

1. Přejděte na **Spravovat** → **Statistiky**
2. V levé části vyberte skupiny (můžete vybrat všechny)
3. Nastavte časový rozsah
4. Exportujte ve formátu JSON, ODS nebo XLSX

::: info
Export obsahuje data o postupu všech studentů ve vybraných skupinách, včetně počtu vyřešených vlajek a času stráveného na úlohách.
:::

## Kompletní přehled oprávnění

Následující tabulky obsahují kompletní přehled oprávnění pro všechny role v systému.

### Organizace

| Operace | Student | Učitel | Správce |
|---------|---------|--------|---------|
| Zobrazit detail organizace | ✅ Pokud je členem | ✅ Pokud je členem | ✅ Pokud je členem |
| Zobrazit seznam organizací | ✅ Vlastní | ✅ Vlastní | ✅ Vlastní |
| Změnit roli uživatele | ❌ | ✅ Pouze studenty na učitele | ✅ Všechny role (kromě sebe) |

### Skupiny

| Operace | Student | Učitel | Správce |
|---------|---------|--------|---------|
| Zobrazit detail skupiny | ✅ Pokud je členem | ✅ Pokud je členem | ✅ Všechny v organizaci |
| Zobrazit seznam skupin | ✅ Vlastní | ✅ Kde je členem | ✅ Všechny v organizaci |
| Vytvořit skupinu | ❌ | ✅ | ✅ |
| Upravit skupinu | ❌ | ✅ Kde je členem | ✅ Všechny v organizaci |
| Smazat skupinu | ❌ | ✅ Kde je členem | ✅ Všechny v organizaci |
| Připojit se přes token | ✅ | ✅ | ✅ |
| Zobrazit žebříček | ✅ Pokud povolen | ✅ Pokud je členem | ✅ Všechny v organizaci |
| Zobrazit vlajky uživatelů | ❌ | ✅ Kde je členem | ✅ Všechny v organizaci |

### Uživatelé

| Operace | Student | Učitel | Správce |
|---------|---------|--------|---------|
| Zobrazit detail uživatele | ✅ Sebe a členy skupin | ✅ Uživatele v org. | ✅ Uživatele v org. |
| Zobrazit vlastní profil | ✅ | ✅ | ✅ |
| Smazat uživatele | ❌ | ✅ Studenty | ✅ Studenty i učitele |
| Změnit heslo | ✅ Sobě | ✅ Uživatelům v org. | ✅ Uživatelům v org. |
| Upravit avatar | ✅ Sobě | ✅ Uživatelům v org. | ✅ Uživatelům v org. |
| Přidat do skupiny | ❌ | ✅ Kde je členem | ✅ Všechny skupiny |
| Odebrat ze skupiny | ❌ | ✅ Kde je členem | ✅ Všechny skupiny |
| Spravovat VPN | ✅ Sobě | ✅ Uživatelům v org. | ✅ Uživatelům v org. |

### Úlohy

| Operace | Student | Učitel | Správce |
|---------|---------|--------|---------|
| Zobrazit úlohu | ✅ Zadané | ✅ Licencované | ✅ Licencované |
| Vytvořit úlohu | Speciální¹ | Speciální¹ | Speciální¹ |
| Upravit/smazat úlohu | ❌ | ❌ | Pouze vlastník² |
| Označit jako oblíbenou | ✅ | ✅ | ✅ |

### Zadání úloh

| Operace | Student | Učitel | Správce |
|---------|---------|--------|---------|
| Zobrazit zadání | ✅ Ve skupině | ✅ Ve skupině | ✅ Všechny v organizaci |
| Vytvořit zadání | ❌ | ✅ Kde je členem | ✅ Všechny skupiny |
| Smazat zadání | ❌ | ✅ Kde je členem | ✅ Všechny skupiny |
| Zobrazit vlastní postup | ✅ | ✅ | ✅ |
| Zobrazit postup všech | ❌ | ✅ Kde je členem | ✅ Všechny skupiny |
| Resetovat čas | ❌ | ✅ Kde je členem | ✅ Všechny skupiny |
| Resetovat postup | ❌ | ✅ Kde je členem | ✅ Všechny skupiny |

### Instance úloh

| Operace | Student | Učitel | Správce |
|---------|---------|--------|---------|
| Zobrazit instanci | ✅ Vlastní | ✅ Ve svých skupinách | ✅ Všechny v organizaci |
| Spustit instanci | ✅ Vlastní | ✅ Ve svých skupinách | ✅ Všechny v organizaci |
| Zastavit instanci | ✅ Vlastní | ✅ Ve svých skupinách | ✅ Všechny v organizaci |

### Vlajky

| Operace | Student | Učitel | Správce |
|---------|---------|--------|---------|
| Odevzdat vlajku | ✅ Vlastní instance | ❌ | ❌ |
| Odevzdat kvíz/kód | ✅ | ✅ | ✅ |
| Zobrazit detail vlajek | ❌ | ✅ Kde je členem | ✅ Všechny skupiny |
| Smazat odevzdání | ❌ | ✅ Kde je členem | ✅ Všechny skupiny |

### Pozvánky

| Operace | Student | Učitel | Správce |
|---------|---------|--------|---------|
| Zobrazit pozvánky | ❌ | ✅ Své skupiny + org. | ✅ Všechny v organizaci |
| Vytvořit pozvánku | ❌ | ✅ Své skupiny + org. | ✅ Všechny v organizaci |
| Smazat pozvánku | ❌ | ✅ Své skupiny + org. | ✅ Všechny v organizaci |
| Obnovit pozvánku | ❌ | ✅ | ✅ |
| Vytvořit otevřenou pozvánku | ❌ | ✅ Své skupiny + org. | ✅ Všechny v organizaci |

### Licence

| Operace | Student | Učitel | Správce |
|---------|---------|--------|---------|
| Zobrazit licenci | ❌ | ✅ Přes organizaci | ✅ Přes organizaci |

---

¹ **Speciální**: Vyžaduje speciální příznak CREATOR, který přiděluje administrátor platformy.  
² **Vlastník**: Uživatel, který úlohu vytvořil nebo mu bylo vlastnictví přiděleno.

## Časté otázky

### Mohu mít více správců v jedné organizaci?
Ano, organizace může mít libovolný počet správců. Všichni mají stejná oprávnění.

### Co se stane, když sám sebe ponížím?
Systém vám nedovolí ponížit sám sebe na učitele nebo studenta. Tuto akci musí provést jiný správce.
