# Tapasztalat oldal – teljes karrierút átírási specifikáció

## 1. Cél

A jelenlegi **Tapasztalat** oldal csak néhány egyéni vállalkozói projektet mutat be. Ezek a projektek már külön **Projektek** felületet kaptak, ezért ezen az oldalon a teljes szakmai karrierutat kell megjeleníteni.

A módosítás célja:

- a jelenlegi vizuális formátum megtartása;
- a projektnevek helyett cégek és munkakörök megjelenítése;
- a teljes szakmai pálya bemutatása 2016-tól napjainkig;
- az embedded fejlesztéstől a robotikán, Flutteren és Androidon át a rendszertervezésig tartó fejlődési ív érzékeltetése;
- a párhuzamos alkalmazotti, tanácsadói és vállalkozói szerepek egyértelmű jelölése;
- a Projektek oldal tartalmának felesleges ismétlésének elkerülése.

A forrás a feltöltött CV. A Codex ne találjon ki új céget, időszakot, technológiát vagy felelősségi kört.

---

## 2. Megtartandó UI-formátum

A jelenlegi képernyő szerkezete és designja maradjon változatlan:

- középre igazított oldalfejléc és rövid alcím;
- bal oldali dátumoszlop;
- függőleges timeline-vonal és kék pontok;
- jobb oldalon munkakör és cégnév;
- egy rövid, legfeljebb kétmondatos leírás;
- alatta 2–4 rövid tag;
- az aktuális pozíciók felül, a legrégebbi alul;
- a meglévő spacing, tipográfia, színek és responsive működés megőrzése.

Ne készüljön teljesen új oldal vagy kártyarendszer. A feladat a **tartalom és az adatmodell átírása**, nem a design újratervezése.

---

## 3. Oldalfejléc

### Magyar

**Cím:** `Tapasztalat`

**Alcím:**  
`Szakmai utam az embedded fejlesztéstől a robotikán és a multiplatform alkalmazásokon át a teljes rendszerek tervezéséig.`

### Angol

**Cím:** `Experience`

**Alcím:**  
`My professional journey from embedded development through robotics and cross-platform applications to complete system design.`

---

## 4. Tartalmi szabályok

### Megjelenítendő

- főállású munkaviszonyok;
- IT-tanácsadói szerepek;
- hosszabb vállalkozói megbízások;
- jelentős ipari és kutatási fejlesztői szerepek.

### Ne jelenjen meg önálló karrierállomásként

- VendomatIQ;
- Zenia;
- CruzR;
- Bolygok.com.

Ezek a **Projektek** oldalon maradjanak. Az Experience oldalon a kapcsolódó cég és munkakör jelenjen meg.

Példa:

- ne: `VendomatIQ`
- helyette: `Lead System & Software Engineer – Organic Only Vending Franchise Magyarország Kft.`

### Párhuzamos szerepek

Az időbeli átfedések valósak. Ezeket ne hibaként kezelje a rendszer.

Ajánlott foglalkoztatási típus tagek:

- `Főállás`
- `IT-tanácsadás`
- `Vállalkozói megbízás`
- `Projektalapú szerep`

Angolul:

- `Employment`
- `IT Consulting`
- `Contract`
- `Project-based Role`

### Rendezés

1. jelenleg is aktív szerepek;
2. kezdési dátum szerint csökkenő sorrend;
3. azonos kezdési évnél a frissebb hónap előrébb.

### Szöveghossz

Egy timeline-bejegyzés tartalmazzon:

- dátumot;
- munkakör–cégnév címet;
- legfeljebb 160–220 karakteres összefoglalót;
- 2–4 rövid taget.

---

# 5. Karrierút-extrakció – magyar

## Piller Nonprofit Kft.

**Időszak:** `2025.06 – jelenleg`  
**Cím:** `Android szoftverfejlesztő – Piller Nonprofit Kft.`  
**Típus:** `Főállás`

**Leírás:**  
`Kotlin-alapú Android alkalmazások fejlesztése és karbantartása, új funkciók megvalósítása, refaktorálás, teljesítményoptimalizálás, állapotgépek tervezése és code review.`

**Tag-ek:** `Kotlin / Android`, `MVI és állapotgépek`, `Code review`, `Főállás`

---

## Hunelco Kft.

**Időszak:** `2024.01 – 2024.09`  
**Cím:** `Senior Android Front-end szoftverfejlesztő – Hunelco Kft.`  
**Típus:** `Vállalkozói megbízás`

**Leírás:**  
`Egyedi Android-eszközökre készült Flutter alkalmazás fejlesztése, új funkciók implementálása, állapotkezelés, teljesítményoptimalizálás és inter-app kommunikáció.`

**Tag-ek:** `Flutter / Dart`, `BLoC / Cubit`, `Egyedi Android-eszközök`, `Vállalkozói megbízás`

---

## Data-Vita Kft.

**Időszak:** `2023.01 – jelenleg`  
**Cím:** `Lead Android Front-end szoftverfejlesztő – Data-Vita Kft.`  
**Típus:** `IT-tanácsadás`

**Leírás:**  
`Flutter-alapú Android alkalmazás vezető front-end fejlesztése, code review, junior mentorálás, technikai interjúk támogatása és együttműködés az ügyfél fejlesztőcsapatával.`

**Tag-ek:** `Flutter / BLoC`, `Technikai vezetés`, `Mentorálás`, `IT-tanácsadás`

---

## HUN-REN Társadalomtudományi Kutatóközpont

**Időszak:** `2023.06 – 2023.12`  
**Cím:** `Senior Android Front-end szoftverfejlesztő – HUN-REN TK`  
**Típus:** `Vállalkozói megbízás`

**Leírás:**  
`Flutter-alapú Android alkalmazás fejlesztési támogatása, állapotgépek kialakítása, teljesítményoptimalizálás, tesztelés és szakmai konzultáció.`

**Tag-ek:** `Flutter / Android`, `BLoC`, `Konzultáció`, `Vállalkozói megbízás`

---

## Cavity Eye Hungary Kft.

**Időszak:** `2023.01 – 2023.08`  
**Cím:** `Senior Front-end szoftverfejlesztő – Cavity Eye Hungary Kft.`  
**Típus:** `Vállalkozói megbízás`

**Leírás:**  
`Ipari embedded rendszerhez kapcsolódó Android- és webalkalmazás fejlesztése Flutterrel, REST API- és TCP-kommunikációval, valamint állapotkezelési és UI-feladatokkal.`

**Tag-ek:** `Flutter / Web`, `REST API / TCP`, `Embedded integráció`, `Vállalkozói megbízás`

---

## Organic Only Vending Franchise Magyarország Kft.

**Időszak:** `2022.03 – jelenleg`  
**Cím:** `Lead System & Software Engineer – Organic Only Vending Franchise Magyarország Kft.`  
**Típus:** `Vállalkozói megbízás`

**Leírás:**  
`Automataüzemeltetési rendszer teljes architektúrájának és központi komponensének tervezése Flutter frontenddel, Spring Boot backenddel és STM32/freeRTOS embedded vezérlőkkel.`

**Tag-ek:** `Rendszerarchitektúra`, `Flutter / Spring Boot`, `STM32 / CAN`, `Technikai ownership`

---

## MZX Robotics / MuzixGroup

**Időszak:** `2019.07 – 2019.12; 2021.03 – 2024.10`  
**Cím:** `Senior robotikai szoftvermérnök és termékmenedzser – MZX Robotics`  
**Típus:** `IT-tanácsadás / projektalapú szerep`

**Leírás:**  
`Android/AOSP és Ubuntu alapú humanoid szolgáltatórobot alkalmazásainak tervezése, fejlesztése és karbantartása, AI-integrációval, helyszíni teszteléssel és hibakereséssel.`

**Tag-ek:** `Android / Java / Kotlin`, `Humanoid robotika`, `DialogFlow / Firebase`, `IT-tanácsadás`

A két külön időszak egy timeline-elemben jelenjen meg. A részletes CruzR történet a Projektek oldalon maradjon.

---

## B. Braun Group

**Időszak:** `2020.04 – 2022.03`  
**Cím:** `Embedded szoftvermérnök – B. Braun Group`  
**Típus:** `Főállás`

**Leírás:**  
`Beágyazott orvostechnikai eszközök C/C++ alapú fejlesztése, legacy rendszerek karbantartása, követelménykezelés, tesztautomatizálási eszközök és MATLAB/Simulink modellek fejlesztése.`

**Tag-ek:** `Embedded C/C++`, `Orvostechnika`, `MATLAB / Simulink`, `Főállás`

---

## Mentor Graphics

**Időszak:** `2019.02 – 2019.05`  
**Cím:** `Szoftverfejlesztő – Mentor Graphics`  
**Típus:** `Főállás`

**Leírás:**  
`AUTOSAR-alapú embedded rendszerek kódgeneráló eszközének tesztelése és forráskód-módosítása Java és C/C++ környezetben, SiL és CI eszközök használatával.`

**Tag-ek:** `AUTOSAR`, `C/C++ és Java`, `SiL / Jenkins`, `ISTQB`

---

## evosoft Hungary

**Időszak:** `2016.11 – 2019.01`  
**Cím:** `Junior embedded szoftverfejlesztő – evosoft Hungary`  
**Típus:** `Főállás`

**Leírás:**  
`Autóipari embedded rendszerek C/C++ és Ada alapú fejlesztése, modul- és HiL-tesztek készítése, AUTOSAR modellezés, követelmények feldolgozása és hardverközeli hibakeresés.`

**Tag-ek:** `Embedded C/C++`, `AUTOSAR`, `HiL / miniHiL`, `Autóipar`

---

# 6. Karrierút-extrakció – angol

## Piller Nonprofit Kft.

**Period:** `Jun 2025 – Present`  
**Title:** `Android Software Engineer – Piller Nonprofit Kft.`  
**Summary:** `Developing and maintaining Kotlin-based Android applications, implementing new features, refactoring, performance optimization, state-machine design, and code review.`  
**Tags:** `Kotlin / Android`, `MVI & State Machines`, `Code Review`, `Employment`

## Hunelco Kft.

**Period:** `Jan 2024 – Sep 2024`  
**Title:** `Senior Android Front-end Software Engineer – Hunelco Kft.`  
**Summary:** `Developed Flutter applications for custom Android devices, including new features, state management, performance optimization, refactoring, and inter-app communication.`  
**Tags:** `Flutter / Dart`, `BLoC / Cubit`, `Custom Android Devices`, `Contract`

## Data-Vita Kft.

**Period:** `Jan 2023 – Present`  
**Title:** `Lead Android Front-end Software Engineer – Data-Vita Kft.`  
**Summary:** `Leading Flutter front-end development for an Android application, including code review, junior mentoring, interview support, and collaboration with the client’s engineering team.`  
**Tags:** `Flutter / BLoC`, `Technical Leadership`, `Mentoring`, `IT Consulting`

## HUN-REN Centre for Social Sciences

**Period:** `Jun 2023 – Dec 2023`  
**Title:** `Senior Android Front-end Software Engineer – HUN-REN CSS`  
**Summary:** `Supported Flutter-based Android development through state-machine design, performance optimization, testing, technical consulting, and cooperation with the client team.`  
**Tags:** `Flutter / Android`, `BLoC`, `Consulting`, `Contract`

## Cavity Eye Hungary Kft.

**Period:** `Jan 2023 – Aug 2023`  
**Title:** `Senior Front-end Software Engineer – Cavity Eye Hungary Kft.`  
**Summary:** `Developed Android and web applications connected to an industrial embedded system using Flutter, REST APIs, TCP communication, state management, and responsive UI design.`  
**Tags:** `Flutter / Web`, `REST API / TCP`, `Embedded Integration`, `Contract`

## Organic Only Vending Franchise Magyarország Kft.

**Period:** `Mar 2022 – Present`  
**Title:** `Lead System & Software Engineer – Organic Only Vending Franchise Magyarország Kft.`  
**Summary:** `Designing the architecture and central component of a vending automation platform with a Flutter frontend, Spring Boot backend, and STM32/freeRTOS embedded controllers.`  
**Tags:** `System Architecture`, `Flutter / Spring Boot`, `STM32 / CAN`, `Technical Ownership`

## MZX Robotics / MuzixGroup

**Period:** `Jul 2019 – Dec 2019; Mar 2021 – Oct 2024`  
**Title:** `Senior Robotics Software Engineer & Product Manager – MZX Robotics`  
**Summary:** `Designed, developed, and maintained applications for Android/AOSP and Ubuntu-based humanoid service robots, including AI integration, on-site testing, and troubleshooting.`  
**Tags:** `Android / Java / Kotlin`, `Humanoid Robotics`, `DialogFlow / Firebase`, `IT Consulting`

## B. Braun Group

**Period:** `Apr 2020 – Mar 2022`  
**Title:** `Embedded Software Engineer – B. Braun Group`  
**Summary:** `Developed C/C++ software for embedded medical devices, maintained legacy systems, handled requirements, and extended automated test tools and MATLAB/Simulink models.`  
**Tags:** `Embedded C/C++`, `Medical Devices`, `MATLAB / Simulink`, `Employment`

## Mentor Graphics

**Period:** `Feb 2019 – May 2019`  
**Title:** `Software Engineer – Mentor Graphics`  
**Summary:** `Tested and modified an AUTOSAR-oriented code generation tool for embedded systems using Java, C/C++, SiL environments, Jenkins, and automated testing practices.`  
**Tags:** `AUTOSAR`, `C/C++ & Java`, `SiL / Jenkins`, `ISTQB`

## evosoft Hungary

**Period:** `Nov 2016 – Jan 2019`  
**Title:** `Junior Embedded Software Engineer – evosoft Hungary`  
**Summary:** `Developed automotive embedded systems in C/C++ and Ada, created module and HiL tests, worked with AUTOSAR models, processed requirements, and performed hardware-related debugging.`  
**Tags:** `Embedded C/C++`, `AUTOSAR`, `HiL / miniHiL`, `Automotive`

---

# 7. Ajánlott adatmodell

```dart
@freezed
class CareerEntryModel with _$CareerEntryModel {
  const factory CareerEntryModel({
    required String id,
    required String periodLocalizationKey,
    required String titleLocalizationKey,
    required String summaryLocalizationKey,
    required List<String> tagLocalizationKeys,
    required CareerEngagementType engagementType,
    required DateTime sortDate,
    @Default(false) bool isCurrent,
  }) = _CareerEntryModel;
}

enum CareerEngagementType {
  employment,
  consulting,
  contract,
  projectBased,
}
```

Ajánlott azonosítók:

```text
piller
hunelco
data_vita
hun_ren
cavity_eye
organic_only
mzx_robotics
b_braun
mentor_graphics
evosoft
```

---

# 8. Lokalizáció

Minden látható szöveg kerüljön ARB/JSON lokalizációs fájlba.

Ne legyen hardcoded:

- munkakör és cégnév kombináció;
- időszak;
- összefoglaló;
- tag;
- oldalalcím;
- foglalkoztatási típus.

A cégnevek önmagukban változatlanok maradhatnak.

---

# 9. Responsive viselkedés

## Desktop

- maradjon a jelenlegi bal oldali dátum + timeline + jobb oldali tartalom;
- a hosszabb cégnév törhet két sorba;
- a tagek `Wrap` használatával törjenek;
- a timeline ne csússzon el a változó magasságú elemek miatt.

## Tablet

- keskenyebb dátumoszlop;
- több sorba törhető cím és leírás;
- tagek `Wrap` widgetben.

## Mobil

- a dátum a tartalmi blokk fölött vagy a timeline jobb oldalán jelenjen meg;
- ne legyen vízszintes görgetés;
- a tagek törjenek több sorba;
- a teljes leírás maradjon olvasható.

---

# 10. Implementációs elvárások

- A meglévő architektúra- és state-management szabályok maradjanak érvényben.
- A Career/Experience adatok business modellből érkezzenek.
- A Cubit/Bloc csak a UI-állapotot és a lista megjelenítését koordinálja.
- A jelenlegi timeline-komponenseket lehetőleg újra kell használni.
- Ne készüljön külön Cubit minden bejegyzéshez.
- Egyetlen `ExperienceState` tartalmazza a listát, a betöltési állapotot és az esetleges hibát.
- Ne jelenjen meg születési dátum vagy bizalmas ügyféladat.
- Az aktuális szerepek kaphatnak finom vizuális jelölést, de ne térjenek el a design-rendszertől.

---

# 11. Elfogadási kritériumok

1. A Tapasztalat oldal nem a VendomatIQ, Zenia és CruzR projektlistát mutatja.
2. A teljes szakmai karrierút 2016-tól napjainkig megjelenik.
3. A jelenlegi timeline design megmarad.
4. A párhuzamos szerepek külön és helyesen láthatók.
5. A magyar és angol tartalom is működik.
6. Nincs hardcoded látható szöveg a widgetekben.
7. A desktop, tablet és mobil elrendezés nem törik.
8. A Projektek oldal tartalma nem duplikálódik részletesen.
9. Az aktív szerepek felül, a legrégebbi szerep alul jelenik meg.
10. A megjelenés illeszkedik a dark premium engineering designhoz.
