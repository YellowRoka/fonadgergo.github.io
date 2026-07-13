# Mockup Rebuild Plan

## Cél

Ez a dokumentum a jelenlegi Flutter Web portfólió és a referencia `mock-up` közti eltérések alapján készült.

A cél már nem kisebb vizuális finomítás, hanem a jelenlegi képernyők tudatos, képernyőnkénti újrakomponálása úgy, hogy:

- a layout kövesse a mockup szerkezetét
- a tartalomelhelyezés kövesse a mockup arányait
- a vizuális hierarchia egyezzen a mockup fókuszaival
- a meglévő architektúra, routing és adatmodell lehetőleg megmaradjon

## Alapelv

Nem a jelenlegi nézetek folyamatos javítgatása a cél, hanem a mockup szerinti újraszerkesztés.

Ez a gyakorlatban azt jelenti, hogy oldalanként:

1. meghatározzuk a mockup elsődleges fókuszát
2. elhagyjuk a jelenlegi, felesleges plusz UI-rétegeket
3. a tartalmat a mockup ritmusa szerint helyezzük vissza
4. csak utána finomítjuk a részleteket

## Általános eltérések

### Jelenlegi probléma

- a legtöbb oldal túl kártyás
- túl sok a panelen belüli panel
- több helyen a layout "Flutter UI" érzetű, nem mockup-kompozíció érzetű
- a mockup sokkal feszesebb, kompaktabb és fókuszáltabb
- egyes képernyőkön a vizuális főelem nem kap elég hangsúlyt

### Általános átépítési szabályok

- csökkenteni kell a felesleges belső panelek számát
- növelni kell a fő fókuszterület vizuális dominanciáját
- kevesebb, de erősebb szekció kell
- a pill/chip elemeket a mockup szerinti helyekre kell korlátozni
- az oldalak ne "dashboard elemek listája" legyenek, hanem egyetlen szerkesztett kompozíció

## Prioritási sorrend

1. Főoldal
2. Projektek
3. Architektúra
4. Kapcsolat
5. Rólam
6. Tapasztalat

## 1. Főoldal

### Mockup célkép

- bal oldalon kompakt hero szövegblokk
- jobb oldalon domináns vizuális rendszerábra
- alatta 4 egyforma értékkártya
- alatta kompakt projekt-előnézetek

### Jelenlegi eltérések

- a bal oldali hero blokk túl sok elemből áll
- a jobb oldali vizuál még mindig túl "beágyazott panel"
- a hero alatti extra információs blokk nem mockup-hű
- a highlight panelek túl nagyok
- a stat kártyák még nem eléggé mockup-szerűek
- a featured projektek túl nagy, hosszú kártyákként jelennek meg

### Átalakítási feladatok

#### Hero bal oldal

- a felső `SectionLabel` maradhat
- a második kis cím csak akkor maradjon, ha vizuálisan tényleg segít
- a hero leírás legyen rövidebb megjelenítésű
- a CTA-k száma maradjon maximum 2 elsődleges helyen
- a mostani köztes info-sáv kerüljön ki vagy olvadjon be finom meta-sorként
- a highlight elemek legyenek 4 egyforma, kompakt feature card formában

#### Hero jobb oldal

- a jobb oldali panel legyen kevésbé "panel a panelben"
- a központi SVG nagyobb helyet kapjon
- a felső dekor sáv egyszerűbb legyen
- az alsó info-strip legyen kisebb és kevésbé domináns
- a teljes hero vizuál arányát közelíteni kell a mockup 3D fókuszához

#### Stat kártyák

- 4 egyforma szélességű és magasságú kártya
- kisebb felső dekorcsík
- rövidebb másodlagos szöveg
- mockuphoz közelebbi belső spacing

#### Kiemelt projektek

- a projektkártyák legyenek alacsonyabbak és kompaktabbak
- a kép legyen az elsődleges fókusz
- a hosszú leírás csökkenjen
- a cím és meta a képhez közelebb szerveződjön

### Érintett fájlok

- `lib/ui/home_page/home_view.dart`

## 2. Projektek

### Mockup célkép

- felül egyszerű cím + rövid bevezető
- alatta filter/chip sor
- alatta 4 kompakt, egységes projektkártya
- minden kártya képalapú, rövid leírású
- alul opcionálisan központi CTA

### Jelenlegi eltérések

- a kártyák túl magasak
- túl sok a szöveg
- a kép és a meta közti ritmus még nem mockup-hű
- a featured kártya külön kezelése túlságosan eltérő vizuált ad

### Átalakítási feladatok

- egységes kártyamagasság
- rövidebb kivonat
- a cím kerüljön közelebb a preview-hoz
- a tagek száma kártyánként legyen limitált
- a CTA egyértelműbb, rövidebb legyen
- ha szükséges, legyen külön "összes projekt" alsó gomb

### Érintett fájlok

- `lib/ui/projects_page/projects_view.dart`

## 3. Architektúra

### Mockup célkép

- a diagram legyen az oldal főeleme
- a kísérő információ csak támogatás legyen
- a felső chip sor megmaradhat
- a fókusz a rendszerszintű kapcsolatokat bemutató központi ábrán legyen

### Jelenlegi eltérések

- a felső bal "fő adatfolyam" blokk túl erős
- a jobb oldali rétegkártyák túl sok helyet visznek el
- az alsó diagram még mindig nem elsődleges fókusz
- az oldal két külön világként működik, nem egyetlen kompozícióként

### Átalakítási feladatok

- a diagram blokkot fel kell hozni vizuális első helyre
- a kísérő szövegek legyenek tömörebbek
- a layer kártyák lehetnek kisebbek vagy ritkábbak
- a flow rail egyszerűbb lehet
- a diagram körüli üres tér tudatosabban legyen kezelve

### Érintett fájlok

- `lib/ui/architecture_page/architecture_view.dart`

## 4. Kapcsolat

### Mockup célkép

- bal oldalon kompakt elérhetőségi lista
- jobb oldalon egyszerű, feszes form
- alul finom dekorvonalak
- az egész képernyő legyen szűkebb és rendezettebb

### Jelenlegi eltérések

- a bal lista még mindig túl tágas
- a linkkártyák magasabbak a szükségesnél
- a form blokk nagy és levegős
- a mockuphoz képest a teljes oldal túl sok helyet foglal

### Átalakítási feladatok

- a bal oldali itemek magasságának csökkentése
- kisebb ikonblokk
- kompaktabb tipográfia
- a jobb oldali form mezői legyenek mockup-szerűen szorosabbak
- a dekorblokk maradjon, de kevésbé domináns módon

### Érintett fájlok

- `lib/ui/contact_page/contact_view.dart`

## 5. Rólam

### Mockup célkép

- központi cím
- bal oldalon tömör bemutatkozó bekezdések
- jobb oldalon kompakt profilkártya portréval
- alul 4 értékkártya

### Jelenlegi eltérések

- a jelenlegi szerkezet kevésbé kompakt
- a személyes branding nem elég fókuszált
- a profilkártya nem elég mockup-hű

### Átalakítási feladatok

- kompakt kétoszlopos layout
- portré hangsúlyosabb használata
- rövidebb bekezdések
- alsó stat/value sáv mockup mintára

### Érintett fájlok

- `lib/ui/about_page/about_view.dart`

## 6. Tapasztalat

### Mockup célkép

- középre szervezett timeline
- kisebb bal oldali dátum
- jobb oldali szerepkör és rövid leírás
- kevés dekoráció, erős tipográfiai hierarchia

### Jelenlegi eltérések

- a mostani megoldás túl kártyás
- túl sok a panel és a padding
- a mockup könnyedsége hiányzik

### Átalakítási feladatok

- a timeline nézet újraszerkesztése
- minimalizált kártyahasználat
- kisebb meta és rövidebb fókuszterületek

### Érintett fájlok

- `lib/ui/experience_page/experience_view.dart`

## Asset és tartalmi függések

### Már rendelkezésre áll

- hero SVG
- architecture SVG
- contact dekor SVG
- projekt preview képek

### Még segíthetne

- végleges portré
- egységesebb projekt screenshot készlet
- ha szükséges, egy külön mockuphoz hűbb hero SVG variáns

## Végrehajtási stratégia

### Javasolt munkamódszer

Minden oldalt az alábbi sorrendben kell átépíteni:

1. szerkezet újrarendezése
2. panelek számának csökkentése
3. spacing és arányok igazítása
4. tipográfia és chip-ek finomítása
5. végül vizuális polish

### Oldalankénti készültségi definíció

Egy oldal akkor tekinthető késznek, ha:

- a fő fókusz ugyanaz, mint a mockupon
- a tartalom ritmusa ugyanazt az olvasási sorrendet adja
- a panelek száma és tömege nem tér el durván
- a screenshot első ránézésre ugyanahhoz a képernyőcsaládhoz tartozik

## Következő konkrét lépés

A következő implementációs körben a `Főoldal` teljes mockup-hű újrakomponálása következzen.

Ennek részlépései:

1. hero bal oldal egyszerűsítése
2. hero jobb oldal újrarendezése
3. highlight / feature kártyák átalakítása
4. stat kártyák mockuphoz igazítása
5. kiemelt projektek kompaktabb újrarendezése
