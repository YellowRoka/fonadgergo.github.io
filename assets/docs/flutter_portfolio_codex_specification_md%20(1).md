# Flutter Portfólió Weboldal - Codex Specifikáció

# 1. BUSINESS KÖVETELMÉNYEK

## Projekt célja
A projekt célja egy prémium minőségű, Flutter Web alapú személyes portfólió és szakmai bemutatkozó weboldal létrehozása.

A weboldal feladata:
- egy magas szintű software & system engineer profil reprezentálása,
- álláslehetőségek, freelance munkák és üzleti kapcsolatok támogatása,
- recruiterek, HR-esek, tech leadek, startupok és ügyfelek megszólítása,
- erős rendszer szintű mérnöki gondolkodás kommunikálása,
- vizuális és technikai kiemelkedés az átlagos fejlesztői portfólió oldalak közül,
- hosszú távon bővíthető és karbantartható rendszer biztosítása.

A weboldal ne hagyományos CV-oldal érzést keltsen.
Inkább egy modern mérnöki és termékbemutató rendszer hangulatát adja.

Elsődleges pozicionálás:

> Software & System Engineer
> Engineer who builds complete systems.

A weboldal hangsúlyozza:
- a rendszer szintű gondolkodást,
- a cross-domain engineering szemléletet,
- az architektúra fókuszú gondolkodást,
- az embedded ↔ backend ↔ frontend integrációt,
- a valós termékfejlesztési tapasztalatot,
- az ownership és technical leadership szemléletet.

A weboldal NE fókuszáljon túlzottan:
- általános Flutter developer brandingre,
- egyszerű skill barokra,
- generikus mobilalkalmazás prezentációra.

---

# 2. VIZUÁLIS ÉS UX KÖVETELMÉNYEK

## Design irány
A weboldal vizuális iránya:
- dark futuristic,
- premium tech,
- cinematic,
- engineering-focused.

A stílus:
- modern és prémium érzetű legyen,
- kerülje a túlzott cyberpunk/game UI stílust,
- kerülje az olcsó neon túlzásokat,
- maradjon professzionális recruiterek és ügyfelek számára is.

Vizuális inspirációk:
- engineering dashboardok,
- modern SaaS landing oldalak,
- cinematic motion design,
- visszafogott futurisztikus UI.

Ajánlott vizuális technikák:
- glassmorphism,
- rétegzett blur effektek,
- finom gradientek,
- visszafogott animált háttér,
- depth és lighting effektek,
- responsive motion animációk,
- prémium tipográfia,
- nagyobb whitespace használat,
- smooth transitionök.

A weboldal támogassa:
- desktop,
- tablet,
- mobile nézeteket.

A responsive működés kötelező.

---

# 3. NYELVI ÉS LOKALIZÁCIÓS KÖVETELMÉNYEK

A weboldal támogassa:
- az angol,
- a magyar nyelvet.

A lokalizációs rendszer később bővíthető legyen.

Követelmények:
- language switcher,
- fordításra előkészített architektúra,
- ne legyen hardcoded látható szöveg widgetekben,
- későbbi új nyelvek támogatása.

Ajánlott megoldás:
- JSON vagy ARB alapú lokalizáció.

---

# 4. WEBOLDAL STRUKTÚRA

A weboldal több oldalas struktúrát használjon.

Ajánlott oldalak:

## Home
Cél:
- cinematic bemutatkozás,
- professzionális pozicionálás,
- erős első benyomás.

Tartalmazza:
- animált hero section,
- professzionális tagline,
- rövid bemutatkozás,
- architecture/system engineering fókusz,
- CTA gombok.

Ajánlott CTA gombok:
- Experience megtekintése
- Projektek megtekintése
- CV letöltése
- Kapcsolat

---

## Experience
Cél:
- timeline alapú szakmai bemutatás.

Követelmények:
- vizuális timeline,
- engineering responsibility fókusz,
- ownership alapú megfogalmazás,
- ne hasson egyszerű task-listának.

Fókusz:
- architektúra,
- leadership,
- rendszerszemlélet,
- integráció,
- technikai felelősség.

---

## Projects
Cél:
- projekt showcase.

Követelmények:
- responsive project card rendszer,
- modern hover animációk,
- kibővíthető projekt részletek.

Fókusz:
- architektúra,
- technológiák,
- engineering kihívások,
- rendszer integráció.

A VendomatIQ legyen a legerősebben kiemelt projekt.

Opcionális:
- videó embedek,
- architektúra diagramok,
- screenshotok.

---

## Architecture
Cél:
- rendszer szintű mérnöki gondolkodás bemutatása.

Ez az oldal kiemelten fontos.

Ajánlott tartalom:
- architektúra filozófia,
- embedded ↔ backend ↔ frontend kommunikáció,
- moduláris gondolkodás,
- automatizálási rendszerek,
- state management szemlélet,
- engineering alapelvek.

Opcionális:
- animált diagramok,
- interaktív system flow vizualizációk.

---

## About
Cél:
- személyesebb, engineering fókuszú bemutatkozás.

Hangvétel:
- professzionális,
- intelligens,
- rendszerszemléletű,
- autentikus.

Narratíva:

> Engineer who builds complete systems.

Kommunikálja:
- a mérnöki kíváncsiságot,
- a folyamatos fejlődést,
- a product mindsetet,
- a quality-first szemléletet,
- a gyakorlati mérnöki hozzáállást.

---

## Contact
Követelmények:
- responsive contact form,
- LinkedIn link,
- email megjelenítés,
- opcionális GitHub link.

Cél email cím:
- fonadgergo@hotmail.com

A contact form később támogassa:
- EmailJS,
- Formspree,
- Firebase Functions,
- Supabase Edge Functions.

A GitHub Pages kompatibilitás fontos.

---

# 5. CV LETÖLTÉS KÖVETELMÉNYEK

A weboldal támogassa:
- Executive CV letöltés,
- Standard CV letöltés.

Ajánlott elhelyezés:
- hero section,
- navigation,
- contact section.

---

# 6. PERFORMANCE KÖVETELMÉNYEK

A weboldal:
- gyorsan töltődjön be,
- kerülje a túl nehéz animációkat,
- gyengébb eszközökön is maradjon smooth,
- optimalizálja a képek betöltését,
- minimalizálja a rebuild-eket.

Ajánlott:
- lazy loading,
- moduláris page loading,
- lightweight animációk.

---

# 7. SEO ÉS DEPLOYMENT KÖVETELMÉNYEK

Elsődleges deployment cél:
- GitHub Pages.

Későbbi támogatás:
- saját domain.

Követelmények:
- SEO-friendly metadata,
- social preview támogatás,
- responsive viewport kezelés,
- megfelelő Flutter Web routing stratégia.

---

# 8. ARCHITEKTÚRA ÉS KÓD KÖVETELMÉNYEK

## Általános architektúra
A projekt pragmatikus feature/module alapú architektúrát kövessen.

A cél NEM a túlzott clean architecture.

A cél:
- karbantarthatóság,
- tiszta felelősségi körök,
- modularitás,
- skálázhatóság,
- mérnöki átláthatóság.

A projekt struktúrája maradjon:
- érthető,
- praktikus,
- production-oriented.

---

# 9. RÉTEGEK

## ui
Felelősségek:
- oldalak,
- widgetek,
- cubitok/blocok,
- UI logika,
- view state-ek.

## business
Felelősségek:
- üzleti logika,
- repository-k,
- use case-ek,
- modellek,
- engine/service réteg,
- data source-ok.

## system
Felelősségek:
- routing,
- theme kezelés,
- konstansok,
- közös utility-k.

## di
Felelősségek:
- dependency injection konfiguráció.

---

# 10. FŐ ADATÁRAMLÁS

UI event
→ Cubit/Bloc
→ UseCase
→ Repository
→ Engine
→ DataSource
→ Data stream
→ Bloc/Cubit
→ UI rebuild

---

# 11. ENGINEERING SZABÁLYOK

## Import szabályok
A projekten belüli importok abszolút formátumot használjanak.

Relative importok használata nem megengedett.

---

## DataSource szabályok
A DataSource felelőssége:
- állapot tárolás,
- cache kezelés,
- stream biztosítása.

A DataSource NEM tartalmazhat üzleti logikát.

---

## Engine szabályok
A tényleges üzleti logika az Engine rétegben található.

Az Engine réteg helye:

business/services/

Felelőssége:
- számítások,
- orchestration,
- transzformációk,
- üzleti szabályok,
- state koordináció.

---

## Repository szabályok
A Repository réteg vékony adapter az Engine felé.

A repository-k:
- maradjanak lightweight-ek,
- kerüljék a duplikált logikát,
- tiszta API-t biztosítsanak.

---

## UseCase szabályok
A UseCase-ek szándékosan vékonyak.

Céljuk:
- tiszta business entry point biztosítása,
- UI és business réteg szétválasztása,
- későbbi skálázhatóság támogatása.

A UseCase-ek ne váljanak túlzottan absztrakttá.

---

# 12. STATE MANAGEMENT KÖVETELMÉNYEK

Ajánlott függőségek:
- flutter_bloc
- freezed
- get_it
- injectable
- go_router
- rxdart

A Cubit preferált ahol lehetséges.
Bloc használható összetettebb event-driven flow esetén.

Ajánlott state megközelítés:
- feature-önként egy state class,
- több mező egyetlen state objektumban,
- kerülendő a túlzott subclass hierarchy.

Példa:

```dart
@freezed
class HomeState with _$HomeState {
  const factory HomeState({
    required bool isLoading,
    required Locale locale,
    required ThemeMode themeMode,
    required List<ProjectModel> featuredProjects,
    required bool isHeroAnimationReady,
    String? errorMessage,
  }) = _HomeState;
}
```

---

# 13. PROJEKT STRUKTÚRA

Ajánlott struktúra:

```text
lib/
  main.dart

  di/

  system/
    navigation/
    theme/
    utils/

  business/
    data_sources/
    models/
    repositories/
    services/
    usecases/
    utils/

  ui/
    splash_page/
    error_page/
    home_page/
      bloc/
      parts/
      home_view.dart

    projects_page/
      bloc/
      parts/
      projects_view.dart

    architecture_page/
      bloc/
      parts/
      architecture_view.dart

    experience_page/
      bloc/
      parts/
      experience_view.dart

    about_page/
      bloc/
      parts/
      about_view.dart

    contact_page/
      bloc/
      parts/
      contact_view.dart
```

---

# 14. ROUTING KÖVETELMÉNYEK

Ajánlott router:
- go_router

Követelmények:
- deep link támogatás,
- browser navigation támogatás,
- animált page transitionök,
- localization-ready route kezelés.

---

# 15. THEME KÖVETELMÉNYEK

A projekt támogassa:
- dark theme first szemléletet,
- későbbi light theme támogatást.

A theme rendszer:
- maradjon moduláris,
- támogassa az újrafelhasználható color tokeneket,
- támogassa az újrafelhasználható typography tokeneket.

Ajánlott vizuális irány:
- dark graphite háttér,
- visszafogott neon accentek,
- prémium kontraszt,
- glass effektek.

---

# 16. ANIMÁCIÓS KÖVETELMÉNYEK

Az animációk:
- smooth,
- prémium,
- cinematic,
- engineering-focused érzést keltsenek.

Kerülendő:
- cartoon effektek,
- túlzott motion,
- gamer jellegű villogás.

Ajánlott animációk:
- fade transitionök,
- parallax,
- layered movement,
- animált hero háttér,
- finom hover effektek,
- smooth page transitionök.

---

# 17. KÓDMINŐSÉGI KÖVETELMÉNYEK

A generált kód:
- production quality legyen,
- maradjon moduláris,
- maradjon skálázható,
- kerülje a felesleges absztrakciót,
- kerülje a dead code-ot,
- kerülje a túlzott overengineeringet.

Az architektúra érzete:
- praktikus,
- senior szintű,
- hosszú távon karbantartható legyen.

---

# 18. VÉGSŐ IMPLEMENTÁCIÓS CÉL

A végeredmény érzete:
- prémium engineering showcase,
- modern system engineer portfólió,
- valós termék weboldal,
- komoly technikai brand.

A végső élmény kommunikálja:

> This engineer can design and build complete systems.

