# Flutter Portfolio Website - Codex Specification

# 1. BUSINESS REQUIREMENTS

## Project Goal
The goal of this project is to create a premium quality Flutter Web based personal portfolio and professional showcase website.

The website must:
- represent a high-level software & system engineer profile,
- support job opportunities, freelance work and business networking,
- target recruiters, HR, tech leads, startups and clients,
- communicate strong system-level engineering thinking,
- visually stand out from average developer portfolio websites,
- remain expandable and maintainable long-term.

The website should not feel like a traditional CV page.
Instead, it should feel like a modern engineering/product showcase.

Primary positioning:

> Software & System Engineer
> Engineer who builds complete systems.

The website should emphasize:
- system thinking,
- cross-domain engineering,
- architecture mindset,
- embedded ↔ backend ↔ frontend integration,
- real-world product engineering,
- ownership and technical leadership.

The website should NOT over-focus on:
- generic Flutter developer branding,
- simple skill bars,
- generic mobile app presentation.

---

# 2. VISUAL & UX REQUIREMENTS

## Design Direction
The website must use a:
- dark futuristic,
- premium tech,
- cinematic,
- engineering-focused visual identity.

The style should:
- feel modern and premium,
- avoid cyberpunk/game UI extremes,
- avoid cheap neon overload,
- remain professional for recruiters and clients.

Visual inspirations:
- engineering dashboards,
- modern SaaS landing pages,
- cinematic motion design,
- subtle futuristic UI.

Suggested visual techniques:
- glassmorphism,
- layered blur effects,
- smooth gradients,
- subtle animated backgrounds,
- depth and lighting effects,
- responsive motion animations,
- premium typography,
- large spacing,
- smooth transitions.

The website must support:
- desktop,
- tablet,
- mobile layouts.

Responsive behavior is mandatory.

---

# 3. LANGUAGE & LOCALIZATION REQUIREMENTS

The website must support:
- English,
- Hungarian.

The localization system must be expandable later.

Requirements:
- language switcher,
- translation-ready architecture,
- no hardcoded visible text inside widgets,
- future support for additional languages.

Preferred approach:
- JSON or ARB based localization.

---

# 4. WEBSITE STRUCTURE

The website should use a multi-page structure.

Suggested pages:

## Home
Purpose:
- cinematic introduction,
- professional positioning,
- first impression.

Must include:
- animated hero section,
- professional tagline,
- short introduction,
- architecture/system engineering emphasis,
- CTA buttons.

Suggested CTA buttons:
- View Experience
- View Projects
- Download CV
- Contact

---

## Experience
Purpose:
- timeline based professional experience.

Requirements:
- visual timeline,
- engineering responsibilities focus,
- ownership-oriented wording,
- avoid generic task-list appearance.

Focus areas:
- architecture,
- leadership,
- systems,
- integration,
- technical responsibility.

---

## Projects
Purpose:
- project showcase.

Requirements:
- responsive project card system,
- modern hover animations,
- expandable project details.

Focus areas:
- architecture,
- technologies,
- engineering challenges,
- system integration.

VendomatIQ should be the strongest highlighted project.

Optional:
- video embeds,
- architecture diagrams,
- screenshots.

---

## Architecture
Purpose:
- demonstrate system-level engineering thinking.

This page is important.

Suggested content:
- architecture philosophy,
- embedded ↔ backend ↔ frontend communication,
- modular thinking,
- automation systems,
- state management approach,
- engineering principles.

Optional:
- animated diagrams,
- interactive system flow visualizations.

---

## About
Purpose:
- more personal engineering-focused presentation.

Tone:
- professional,
- intelligent,
- system-oriented,
- authentic.

Narrative direction:

> Engineer who builds complete systems.

The section should communicate:
- engineering curiosity,
- continuous learning,
- product mindset,
- quality-first approach,
- practical engineering mentality.

---

## Contact
Requirements:
- responsive contact form,
- LinkedIn link,
- email visibility,
- optional GitHub link.

Email target:
- fonadgergo@hotmail.com

The contact form should be designed to later support:
- EmailJS,
- Formspree,
- Firebase Functions,
- Supabase Edge Functions.

GitHub Pages compatibility is important.

---

# 5. CV DOWNLOAD REQUIREMENTS

The website must support CV download.

Required:
- Executive CV download,
- Standard CV download.

Suggested placement:
- hero section,
- navigation,
- contact section.

---

# 6. PERFORMANCE REQUIREMENTS

The website must:
- load fast,
- avoid heavy unnecessary animations,
- remain smooth on lower-end devices,
- optimize image loading,
- minimize rebuilds.

Preferred:
- lazy loading,
- modular page loading,
- lightweight animations.

---

# 7. SEO & DEPLOYMENT REQUIREMENTS

Initial deployment target:
- GitHub Pages.

Future support:
- custom domain.

Requirements:
- SEO-friendly metadata,
- social preview support,
- responsive viewport handling,
- proper routing strategy for Flutter web.

---

# 8. ARCHITECTURE & CODE REQUIREMENTS

## General Architecture
The project follows a pragmatic feature/module based architecture.

The goal is NOT extreme clean architecture.

The goal IS:
- maintainability,
- clear responsibilities,
- modularity,
- scalability,
- engineering clarity.

The project structure should remain:
- understandable,
- practical,
- production-oriented.

---

# 9. LAYER STRUCTURE

## ui
Responsibilities:
- pages,
- widgets,
- cubits/blocs,
- UI logic,
- view states.

## business
Responsibilities:
- business logic,
- repositories,
- use cases,
- models,
- engines/services,
- data sources.

## system
Responsibilities:
- routing,
- themes,
- constants,
- shared utilities.

## di
Responsibilities:
- dependency injection configuration.

---

# 10. MAIN DATA FLOW

Primary data flow:

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

# 11. ENGINEERING RULES

## Import Rules
All internal project imports must use absolute import format.

Relative imports are not allowed.

---

## DataSource Rules
DataSource responsibilities:
- state storage,
- cache handling,
- stream exposure.

DataSources must NOT contain business logic.

---

## Engine Rules
The actual business logic must live inside the Engine layer.

The Engine layer is located under:

business/services/

Responsibilities:
- calculations,
- orchestration,
- transformations,
- business rules,
- state coordination.

---

## Repository Rules
Repositories are thin adapters toward the Engine layer.

Repositories should:
- remain lightweight,
- avoid duplicated logic,
- expose clean APIs.

---

## UseCase Rules
UseCases are intentionally thin.

Purpose:
- maintain clean business entry points,
- separate UI from business,
- support scalability later.

UseCases should NOT become overly abstract.

---

# 12. STATE MANAGEMENT REQUIREMENTS

Preferred dependencies:
- flutter_bloc
- freezed
- get_it
- injectable
- go_router
- rxdart

Cubit is preferred where possible.
Bloc may be used for more event-driven features.

Preferred state approach:
- single state class per feature,
- multiple fields inside state,
- avoid excessive subclass trees.

Example direction:

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

# 13. PROJECT STRUCTURE

Suggested structure:

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

# 14. ROUTING REQUIREMENTS

Preferred router:
- go_router

Requirements:
- deep link support,
- browser navigation support,
- animated page transitions,
- localization-ready routes.

---

# 15. THEME REQUIREMENTS

The project must support:
- dark theme first,
- future light theme support.

The theme system should:
- remain modular,
- support reusable color tokens,
- support reusable typography tokens.

Suggested visual direction:
- dark graphite backgrounds,
- subtle neon accents,
- premium contrast,
- glass effects.

---

# 16. ANIMATION REQUIREMENTS

Animations should feel:
- smooth,
- premium,
- cinematic,
- engineering-focused.

Avoid:
- cartoon effects,
- excessive motion,
- flashy gaming animations.

Suggested animations:
- fade transitions,
- parallax,
- layered movement,
- animated hero background,
- subtle hover effects,
- smooth page transitions.

---

# 17. CODE QUALITY REQUIREMENTS

The generated code must:
- remain production quality,
- remain modular,
- remain scalable,
- avoid unnecessary abstractions,
- avoid dead code,
- avoid overengineering.

The architecture should feel:
- practical,
- senior-level,
- maintainable.

---

# 18. FINAL IMPLEMENTATION GOAL

The final result should feel like:
- a premium engineering showcase,
- a modern system engineer portfolio,
- a real product website,
- a serious technical brand.

The final experience should communicate:

> This engineer can design and build complete systems.

