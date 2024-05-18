
# Jak na běžné problémy?

## Základní catch-all řešení
Velkou část problémů s platformou HAXAGON je často možné vyřešit několika jednoduchými způsoby:

- **Obnovit webovou stránku**  
    V některých případech se nové události pouze nepropsaly do Vašeho zobrazení, takže stačí načíst stránku v prohlížeči znovu.  
    Toho lze dosáhnout několika způsoby, záleží na používaném prohlížeči. Obecně klávesou `F5`, `CTRL + R` nebo tlačítkem `⭮` v levém horním rohu prohlížeče.

- **Znovu načíst web, spolu s cache**  
    Pro znovunačtení některého obsahu (např. obrázků) nestačí běžný refresh stránky a je potřeba použít klávesové zkratky `SHIFT + F5` nebo `CTRL + SHIFT + R`.

- **Odhlásit se a znovu se přihlásit**

## Problémy se spouštěním úloh
### Úloha se spouští déle než 5 minut
Obraťte se prosím na podporu na [Discord serveru](https://discord.gg/Z3bn4EyE3H), s velkou pravděpodobností je chyba na infrastruktuře HAXAGONu.

### K úloze se nedaří připojit
Pokud úloha běží, ale nedaří se Vám na ni připojit, je několik kroků, které mohou pomoct.

- **Zkontrolovat status VPN**  
    Pokud se připojujete k úloze přes VPN, zkontrolujete, zda je tunel spuštěný.  
    Dále zkontrolujte, že se připojujete na VPN správného účtu. Nejjednodušší je smazat aktuální tunel a stáhnout novou konfiguraci ze stránky [VPN konfigurace](/students/basics/index.md#vpn-konfigurace).

- **Změnit způsob připojení k úloze**  
    Pokud se pokoušíte připojit přes VPN, zkuste připojení pomocí veřejné IP a opačně.

- **Zkontrolovat firewall**  
    Zkontrolujte nastavení firewall na Vašem zařízení nebo síti. Pokud se připojujete ze školní nebo firemní sítě, zkontrolujte, zda není blokované SSH připojení (především na porty mimo 22).  
    Pokud úloha dovoluje připojení přes HTTP, zkuste ho použít. Jedná se o náhradu za SSH a simuluje terminál v prohlížeči.

### Úloha se sama přestane startovat a znovu se objeví tlačítko "Spustit"
Kontaktujte nás na našem [Discord serveru](https://discord.gg/Z3bn4EyE3H).

## Problémy s přihlášením

- **[Obecná řešení](#zakladni-catch-all-reseni)**

- **Reset hesla**  
    Pokud jste zapomněli své heslo, je možné si ho obnovit.  
    Pod přihlašovacím formulářem vyberte tlačítko "Zapomenuté Heslo". Budete vyzváni k zadání své e-mailové adresy, kterou používáte k přihlašování. Na tu vám přijde e-mail s možností resetu hesla.
    - Pokud potvrzovací e-mail nevidíte, zkontrolujte složky typu "Nevyžádaná pošta" a "Hromadné".
    V e-mailu klikněte na tlačítko "Změnit heslo", které Vás opět přesměruje na stránky HAXAGONu. Po navštívení této stránky se Vám pošle druhý e-mail se samotným novým heslem.
    ::: danger POZOR
    Takovéto automaticky generované heslo je doporučené co nejdříve změnit za Vaše vlastní!
    :::

- Pokud žádný z předchozích kroků nepomáhá, kontaktujte nás na [Discord serveru](https://discord.gg/Z3bn4EyE3H).

## Problémy při řešení úloh

### Něco jsem v úloze pokazil
Pokud si v úloze něco rozbijete (smažete důležité soubory, programy atd.), je úlohu možné resetovat. To provedete zastavením a opětovným spuštěním úlohy.  
Postup v řešení vlajek se <u>NE</u>resetuje, ale <u>**smažou se**</u> veškeré <u>**soubory**</u> v kontejneru úlohy (vytvoří se nový). Takže pokud potřebujete k řešení dalších vlajek nějaké scripty z předchozích vlajek, zazálohujte si je, přepište je, nebo si je stáhněte jinam (třeba na lokální zařízení). 

### Došel mi čas na řešení úlohy.
Řekněte svému vyučujícímu, ten Vám může resetovat čas na úloze. Viz [Správa uživatelů na úloze](/teachers/basics/index.md#sprava-casu). 

### Došly mi pokusy pro vyřešení vlajky
Ve většině případů toto znamená, že budete mít danou vlajku označenou jako nevyřešenou. Počet pokusů pro odevzdání vlajek je upraven podle obtížnosti úlohy a jejího zaměření, např. testy budou mít méně pokusů.  
Pokud se nejedná o test, a šlo o jednoduchou chybu při odevzdávání (zapomenutí syntaxe `haxagon{…}`, …), můžete zkusit požádat svého vyučujícího, aby vám nepodařená odevzdání smazal.

### Rád bych si úlohu udělal znovu, včetně vyřešení všech vlajek
Požádejte svého vyučujícího, ten má možnost vymazat progress na úloze a vyřešené vlajky. Viz [Správa uživatelů a odevzdání](/teachers/basics/index.md#resetovani-vlajek).

