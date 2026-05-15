# Portfolio Admin Panel Blueprint

## Goal
Create a fully client-side portfolio site where all page content, layout values, and theme settings are stored in a structured browser database (IndexedDB) and edited through a hidden admin panel. No visible admin route is exposed; access is triggered by typing `sudo` anywhere on the page outside input fields.

## Architecture

### Model
The application data is stored in a centralized configuration model. Each section uses a schema-driven object rather than hardcoded values.

`src/models/defaultConfig.js`
- site
  - title
  - description
  - socialLinks
- hero
  - name
  - subtitleOptions
  - description
  - ctas
  - avatarEmoji
  - imageUrl
- about
  - introParagraphs
  - highlights
  - contactLinks
- skills
  - categories
- projects
  - categories
  - items
- education
  - timelineEntries
  - certifications
  - achievements
- strengths
  - items
- contact
  - email
  - phone
  - socials
  - messagePlaceholder
- footer
  - copyright
  - socialLinks
- theme
  - accentColor
  - backgroundColor
  - surfaceColor
  - headingFont
  - bodyFont
- admin
  - protectedKeyword: "sudo"
  - userHash
  - settings

### View
React components read from the active configuration context and render UI dynamically.

Components:
- `App.jsx` — root, wraps provider and renders public view
- `Header.jsx`
- `Hero.jsx`
- `About.jsx`
- `Skills.jsx`
- `Projects.jsx`
- `Education.jsx`
- `Strengths.jsx`
- `Contact.jsx`
- `Footer.jsx`
- `AdminModal.jsx` — hidden login overlay
- `AdminPanel.jsx` — admin dashboard
- `AdminSectionEditor.jsx` — edit specific section content
- `ThemeEditor.jsx` — live theme editor
- `ExportImportPanel.jsx` — JSON backup and restore
- `KeyboardTriggerListener.jsx` — global sudo listener

### Controller / Service Layer
A small service layer manages data persistence and validation.

`src/services/indexedDB.js`
- openDatabase()
- getConfig(section)
- setConfig(section, value)
- getAllConfig()
- resetConfig()
- saveAdminCredentials()
- verifyAdminCredentials()

`src/services/contentService.js`
- loadConfig()
- updateSection(sectionKey, value)
- updateNestedItem(sectionKey, itemId, itemData)
- exportConfig()
- importConfig(json)
- validateConfig()

### Data Flow
1. App mounts
2. `ContentProvider` loads stored config from IndexedDB
3. If missing, provider initializes with `defaultConfig`
4. Public components render from `siteData`
5. `KeyboardTriggerListener` listens for `sudo`
6. Admin login modal appears
7. After login, `AdminPanel` is displayed
8. Admin edits update `ContentContext` and persist to IndexedDB immediately
9. Theme changes update CSS variables live
10. Export/Import allows backup and migration

## Access and Security

### Admin access
- Hidden trigger: typing `sudo` outside of inputs
- Login modal appears afterwards
- Credentials are SHA-256 hashed in IndexedDB
- No visible route or admin button exists

### Credentials
- Stored only in IndexedDB
- Admin credential record includes hashed username and password
- Default login setup is seeded on first load

## Persistence

### IndexedDB stores
- `siteConfig` — all page content and theme values
- `adminAuth` — hashed login credentials and metadata
- `settings` — UI preferences, last active admin tab

### Backup and restore
- JSON export from admin panel
- JSON import to restore data
- This retains the remote-backend-safe design

## Theme editing

### Live editable theme values
- Accent color
- Background color
- Surface/card color
- Heading font
- Body font

### Implementation
- CSS variables in `src/styles/global.css`
- Updated live via `document.documentElement.style.setProperty(...)`
- No refresh required

## No hardcoded variables

All content values are driven by config.

### Example
`About.jsx` should not contain text arrays defined in the component.
Instead it reads:
```js
const { about } = useContent()
about.introParagraphs.map(...)
```

### Editable content
The admin panel can modify:
- All strings
- Lists of cards and items
- Skill categories and levels
- Project categories and order values
- Education timeline details
- Certifications and achievements
- Social and contact links
- Theme tokens

## Roadmap

### Phase 1: Config + persistence setup
- defaultConfig
- IndexedDB wrapper
- content provider
- theme live-binding

### Phase 2: Public component refactor
- update About, Skills, Projects, Education, Hero, Contact, Footer
- eliminate static content
- use config-driven rendering

### Phase 3: Admin interface
- hidden keyboard trigger
- admin login modal
- admin dashboard
- section editors
- export/import

### Phase 4: polish and QA
- usability, keyboard nav, mobile UI
- test config restore
- ensure no page refresh for theme updates

## Notes
- Image uploads are intentionally avoided
- Avatar uses emoji or URL references only
- Order fields are numeric, not drag reorder
- Section visibility is not part of v1

---

This blueprint will be followed exactly in the implementation.
