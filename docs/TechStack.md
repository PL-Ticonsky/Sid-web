# Stack Tecnológico – SID Web

## Frontend / Static Site Generator

### Astro

Astro se adopta como generador de sitio estático (SSG).

**Razones técnicas:**

- Genera HTML estático (máximo rendimiento y mínima complejidad)
- Evita sobrecarga de JavaScript innecesaria
- Componentes reutilizables (layouts, cards, navbar, etc.)
- Ideal para sitios centrados en contenido (cursos, actividades, equipo)

---

## Estilos / UI

### Tailwind CSS

Tailwind se usa como sistema de estilos principal.

**Ventajas:**

- Permite construir interfaces limpias rápidamente
- Consistencia visual sin CSS manual extenso
- Fácil adaptación al manual de marca
- Escalable y mantenible en el tiempo

---

## Animaciones

### CSS Transitions (sin librerías pesadas)

Se prioriza animación nativa vía CSS.

**Criterios:**

- Hover states
- Fade / opacity transitions
- Micro-interacciones suaves
- Sin dependencias innecesarias

Para casos puntuales (ej. carrusel), se permite:

- Librería pequeña y aislada  
**o**
- Componente propio en Astro

---

## Modelo de Contenido

### Estrategia Principal

Se adopta contenido basado en archivos, no en base de datos.

**Tecnologías:**

- Markdown → Contenido principal
- Frontmatter YAML → Metadatos estructurados
- JSON (opcional) → Datos globales

---

### Uso de Markdown

Markdown se utiliza para:

- Descripciones
- Objetivos
- Temarios
- Secciones largas
- Contenido académico

---

### Uso de Frontmatter YAML

YAML define propiedades del contenido.

Ejemplo de campos típicos:

```yaml
title: "Hackatón SID"
type: "Actividad"
cover: "/images/activities/hackaton.webp"
formUrl: "https://forms..."
slug: "hackaton-sid"
```

---

### Uso de JSON (Opcional)

Solo cuando exista necesidad de datos globales:

- Configuración del sitio
- Redes
- Ajustes globales
- Datos pequeños y estructurados

---

## Decisiones de Estructura

**Cursos y Actividades**

- Un archivo `.md` por ítem
- Máxima mantenibilidad
- Escalabilidad natural

**Equipo**

- YAML o JSON simple
- Datos pequeños y estructurados

---

## Estrategia de Despliegue

### GitHub Pages + GitHub Actions

**Arquitectura:**

- Repositorio en GitHub
- Build automático con GitHub Actions
- Publicación en GitHub Pages en cada push a `main`

**Ventajas:**

- Totalmente gratis
- SSL automático
- Sin gestión de servidores
- Dominio personalizable a futuro

---

## Estructura del Proyecto

```
sid-web/
  src/
    content/
      activities/
        hackatones.md
        maratones.md
        integraciones.md
      courses/
        curso-x.md
    data/
      team.yml
      site.yml
    components/
    layouts/
    pages/
      index.astro
      activities/index.astro
      activities/[slug].astro
      courses/index.astro
      courses/[slug].astro
      team.astro

  public/
    images/
      activities/
      courses/
      team/
      brand/

  astro.config.mjs
  tailwind.config.cjs
  package.json
```

---

## Flujo de Trabajo de Contenido

### Agregar Curso o Actividad

1. Crear archivo `.md`
2. Definir frontmatter YAML
3. Agregar imagen en `/public/images/...`
4. Commit / push → Deploy automático

No se requieren cambios en código de páginas.

---

## Modelo de Contenido

### Actividad

**Ubicación:**

`src/content/activities/actividad-x.md`

**Frontmatter mínimo:**

- `title`
- `type`
- `cover`
- `formUrl`
- `slug`

**Contenido Markdown:**

- Descripción

---

### Curso

**Ubicación:**

`src/content/courses/curso-x.md`

**Frontmatter mínimo:**

- `title`
- `cover`
- `slug`

**Secciones recomendadas:**

- Descripción
- Objetivos
- Prerrequisitos
- Temario
- Recursos

---

# Stack Definitivo

**Framework / SSG**  
Astro → HTML estático rápido, estable y escalable.

**Estilos**  
Tailwind CSS → Consistencia visual + velocidad de desarrollo.

**Contenido**

- Cursos → Markdown + YAML
- Actividades → Markdown + YAML
- Equipo → YAML / JSON

**Animaciones**  
CSS transitions nativas.

**Hosting**  
GitHub Pages + GitHub Actions.

---

# Sistema Visual / Diseño

## Tipografías

- Headings / Display → **Poppins (Bold)**
- Texto / UI → **Montserrat (Regular)**

---

## Paleta de Colores (Tokens)

- `sid-navy` → `#181D36`  
  Base, headers, texto principal

- `sid-blue` → `#286D8C`  
  Links, acciones secundarias

- `sid-cyan` → `#38BCE2`  
  Acentos suaves, highlights

- `sid-purple` → `#866FB1`  
  Estados, etiquetas

- `sid-pink` → `#E41376`  
  CTA principal (“Únete”), elementos críticos

---

## Principios de Diseño

Una interfaz “agradable a la vista” debe cumplir:

- Jerarquía visual clara
- Espaciado consistente
- Uso limitado de colores de acento
- Animaciones discretas
- Prioridad en legibilidad y contenido

Evitar:

- Saturación visual
- Animaciones excesivas
- Variaciones tipográficas arbitrarias
- Componentes decorativos sin función
