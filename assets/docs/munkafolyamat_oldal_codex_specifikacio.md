# Munkafolyamat oldal – Codex specifikáció

## 1. Cél

A jelenlegi **Architektúra** menüpont helyett egy ügyfélközpontú **Munkafolyamat** oldal készüljön.

Az oldal célja, hogy közérthetően bemutassa:

- hogyan indul egy projekt;
- hogyan történik az igényfelmérés;
- hogyan alakul ki a scope;
- hogyan készül el a technikai terv;
- hogyan zajlik az iteratív fejlesztés;
- hogyan történik a tesztelés és a visszacsatolás;
- hogyan történik az átadás és a továbbfejlesztés.

Az oldal fő üzenete:

> Az ötlettől a működő rendszerig.

A tartalom legyen érthető:

- ügyfeleknek;
- startupoknak;
- recruitereknek;
- tech leadeknek;
- technikai döntéshozóknak.

A meglévő dark premium tech design maradjon meg.

---

## 2. Navigáció

### Magyar menüpont

`Munkafolyamat`

### Angol menüpont

`Process`

### Ajánlott route

```text
/process
```

A korábbi `/architecture` route opcionálisan irányítson át a `/process` oldalra.

---

## 3. Fő narratíva

### Magyar

`Agilis szemléletben, rövid visszacsatolási ciklusokkal és fokozatosan szállítható eredményekkel dolgozom. A konkrét folyamatot mindig a projekt méretéhez, kockázataihoz és az ügyfél működéséhez igazítom.`

### Angol

`I work with an agile mindset, short feedback cycles, and incrementally deliverable results. The exact process is adapted to the project size, risks, and the way the client operates.`

Kerülendő:

- annak állítása, hogy minden projekt klasszikus Scrum szerint működik;
- túl sok módszertani zsargon;
- hosszú, nehezen olvasható szövegblokkok;
- a belső Flutter-architektúra elsődleges fókusza.

---

## 4. Hero section

### Magyar cím

`Az ötlettől a működő rendszerig.`

### Magyar alcím

`Átlátható, iteratív fejlesztési folyamat rövid visszacsatolási ciklusokkal, mérhető mérföldkövekkel és folyamatos ügyfél-egyeztetéssel.`

### Angol cím

`From idea to a working system.`

### Angol alcím

`A transparent, iterative development process with short feedback cycles, measurable milestones, and continuous client collaboration.`

### Elsődleges CTA

- Magyar: `Beszéljünk a projektről`
- Angol: `Discuss your project`

### Másodlagos CTA

- Magyar: `Kapcsolat`
- Angol: `Contact`

---

## 5. Folyamatábra

A fő vizuális elem egy hétlépéses, iteratív folyamat legyen.

### Magyar lépések

1. `Feltárás`
2. `Tervezés`
3. `Architektúra`
4. `Fejlesztés`
5. `Validálás`
6. `Átadás`
7. `Továbbfejlesztés`

### Angol lépések

1. `Discover`
2. `Plan`
3. `Design`
4. `Build`
5. `Validate`
6. `Deliver`
7. `Improve`

### Ajánlott logikai sorrend

```text
Discover → Plan → Design → Build → Validate → Deliver → Improve
                                ↑                         ↓
                                └──── continuous feedback ┘
```

A diagram ne legyen túl technikai. A cél az, hogy az ügyfél néhány másodperc alatt megértse a teljes munkafolyamatot.

---

## 6. Lépések tartalma

### 1. Feltárás / Discover

#### Magyar

`Az üzleti célok, felhasználói problémák, technikai korlátok és prioritások közös feltérképezése.`

#### Angol

`We map business goals, user problems, technical constraints, and priorities together.`

#### Kulcspontok

- üzleti cél;
- felhasználói igény;
- technikai környezet;
- kockázatok;
- prioritások.

---

### 2. Tervezés / Plan

#### Magyar

`A scope, a mérföldkövek, az elfogadási feltételek és a fejlesztési sorrend kialakítása.`

#### Angol

`We define the scope, milestones, acceptance criteria, and implementation order.`

#### Kulcspontok

- scope;
- backlog;
- mérföldkövek;
- függőségek;
- kockázatkezelés.

---

### 3. Architektúra / Design

#### Magyar

`A rendszer komponenseinek, adatáramlásának, integrációinak és technológiai alapjainak megtervezése.`

#### Angol

`We design the system components, data flow, integrations, and technical foundations.`

#### Kulcspontok

- rendszerarchitektúra;
- komponensek;
- adatáramlás;
- integrációk;
- bővíthetőség.

---

### 4. Fejlesztés / Build

#### Magyar

`Prioritás szerint, rövid iterációkban készülnek a működő és bemutatható funkciók.`

#### Angol

`Working, demonstrable features are delivered in short, priority-driven iterations.`

#### Kulcspontok

- iteratív fejlesztés;
- code review;
- feature delivery;
- technikai dokumentáció;
- rendszeres demo.

---

### 5. Validálás / Validate

#### Magyar

`Fejlesztői tesztelés, integrációs ellenőrzés, smoke test és ügyfél-visszajelzés alapján történő finomítás.`

#### Angol

`Developer testing, integration checks, smoke tests, and client feedback guide refinement.`

#### Kulcspontok

- tesztelés;
- integráció;
- minőségbiztosítás;
- visszajelzés;
- hibajavítás.

---

### 6. Átadás / Deliver

#### Magyar

`Release, dokumentáció, stabilizálás és a működéshez szükséges átadási támogatás.`

#### Angol

`Release, documentation, stabilization, and the support needed for a successful handover.`

#### Kulcspontok

- release;
- dokumentáció;
- átadás;
- bevezetés;
- támogatás.

---

### 7. Továbbfejlesztés / Improve

#### Magyar

`A következő iterációk, új funkciók és hosszú távú fejlesztési irányok közös meghatározása.`

#### Angol

`We define the next iterations, new features, and long-term development direction together.`

#### Kulcspontok

- roadmap;
- új funkciók;
- optimalizálás;
- üzemeltetési visszajelzés;
- hosszú távú fejlődés.

---

## 7. Ügyfélérték blokk

### Magyar cím

`Mit kap az ügyfél?`

### Angol cím

`What does the client get?`

### Kártyák

#### Átlátható haladás

`Jól követhető státusz, mérföldkövek és rendszeres visszajelzési pontok.`

#### Korai működő eredmények

`Nem csak a projekt végén látható a rendszer: az egyes iterációk már működő funkciókat adnak.`

#### Kontrollálható scope

`A prioritások és változások hatása folyamatosan látható marad.`

#### Karbantartható rendszer

`A cél nem csak a működő kód, hanem a stabil, dokumentálható és továbbfejleszthető megoldás.`

### Angol kártyacímek

- `Transparent progress`
- `Early working results`
- `Controlled scope`
- `Maintainable system`

---

## 8. Technikai megközelítés blokk

A korábbi Architektúra oldal tartalma ne vesszen el teljesen.

Az oldal alján jelenjen meg egy kisebb, opcionálisan lenyitható szekció.

### Magyar cím

`Technikai megközelítés`

### Angol cím

`Technical Approach`

### Tartalom

- tiszta felelősségi körök;
- moduláris felépítés;
- tesztelhetőség;
- code review;
- automatizált és manuális ellenőrzések;
- dokumentálható döntések;
- frontend–backend–embedded integráció.

A meglévő architektúra-diagram kisebb vizuális elemként vagy modalban jelenhet meg.

Ez a blokk ne dominálja az oldalt.

---

## 9. Vizuális követelmények

A design illeszkedjen a meglévő oldalhoz:

- dark navy / midnight háttér;
- electric blue és cyan accent;
- glassmorphism panelek;
- finom glow;
- világos tipográfia;
- prémium tech érzet;
- kevés, de tudatos animáció;
- ne legyen gamer vagy túlzott cyberpunk.

A folyamatlépések:

- lekerekített kártyák;
- sorszám vagy ikon;
- rövid cím;
- maximum kétsoros leírás;
- összekötő vonalak;
- feedback loop jelölése.

---

## 10. Animációs követelmények

Ajánlott:

- fokozatos fade/slide belépés;
- folyamatvonal finom kirajzolása;
- hover esetén visszafogott glow;
- aktív lépés kiemelése;
- `prefers-reduced-motion` támogatás.

Kerülendő:

- folyamatos pulzálás;
- nagy parallax;
- túl sok mozgás;
- hosszú intro animáció.

---

## 11. Responsive működés

### Desktop

- vízszintes vagy enyhén ívelt folyamatábra;
- mind a hét lépés jól olvasható;
- a feedback loop alsó összekötéssel jelenjen meg.

### Tablet

- 4 + 3 tördelés vagy két sor;
- a kapcsolatok maradjanak követhetők.

### Mobil

- függőleges timeline;
- jól látható sorszámok;
- ne legyen vízszintes görgetés;
- a feedback loop rövid szöveges jelöléssel jelenjen meg.

---

## 12. Lokalizáció

- minden látható szöveg kerüljön ARB/JSON lokalizációs fájlba;
- ne legyen hardcoded szöveg a widgetekben;
- magyar és angol nyelv legyen támogatott;
- az adatmodell később bővíthető maradjon.

---

## 13. Ajánlott adatmodell

```dart
@freezed
class ProcessStepModel with _$ProcessStepModel {
  const factory ProcessStepModel({
    required String id,
    required int order,
    required String titleLocalizationKey,
    required String descriptionLocalizationKey,
    required List<String> highlightLocalizationKeys,
    required String iconAsset,
  }) = _ProcessStepModel;
}
```

Ajánlott ID-k:

```text
discover
plan
design
build
validate
deliver
improve
```

---

## 14. State kezelés

Lehetőleg egyetlen state osztály legyen.

```dart
@freezed
class ProcessState with _$ProcessState {
  const factory ProcessState({
    @Default([]) List<ProcessStepModel> steps,
    @Default(0) int activeStepIndex,
    @Default(false) bool isTechnicalSectionExpanded,
    @Default(false) bool isLoading,
    String? errorMessage,
  }) = _ProcessState;
}
```

Cubit használata elegendő.

A Cubit feladata:

- a lépések betöltése;
- aktív lépés kezelése;
- technikai blokk nyitása/zárása;
- UI-állapot koordinálása.

Üzleti logika ne kerüljön a widgetekbe.

---

## 15. Asset követelmények

A vizuális assetek külön feladatban készülnek.

A kódban ezekre a fájlokra kell felkészülni:

```text
assets/images/process/process_flow_diagram.png
assets/images/process/process_flow_diagram_mobile.png
docs/process_page_mockup.png
```

---

## 16. Elfogadási kritériumok

A feladat akkor tekinthető késznek, ha:

1. Az Architektúra menüpont Munkafolyamat / Process néven jelenik meg.
2. A fő tartalom az ügyfél számára érthető fejlesztési folyamat.
3. A hét lépés magyarul és angolul is elérhető.
4. A folyamat desktopon, tableten és mobilon is jól működik.
5. A korábbi technikai architektúra másodlagos blokkban megmarad.
6. A design illeszkedik a meglévő dark premium engineering stílushoz.
7. Nincs hardcoded látható szöveg.
8. A Cubit/State megoldás megfelel a meglévő architekturális szabályoknak.
9. Az oldal üzleti és technikai döntéshozó számára is érthető.
10. A page nem válik túl szövegessé vagy módszertan-központúvá.
