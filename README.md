# SID Web  
**Sociedad de Innovación y Desarrollo**

Sitio web oficial de la Sociedad de Innovación y Desarrollo (SID).

Plataforma institucional diseñada para:

- Presentar el grupo de trabajo  
- Mostrar sus actividades académicas y formativas  
- Publicar los cursos ofrecidos  
- Visibilizar el equipo principal  
- Canalizar postulaciones mediante formulario externo  

El sitio es completamente estático y está orientado a comunicación académica clara, estructurada y mantenible.

---

## Naturaleza del Proyecto

Este no es un sistema web dinámico.

No incluye:

- Base de datos  
- Backend  
- Autenticación  
- Panel administrativo  
- Sistema de noticias  
- Eventos con fecha  

Es una arquitectura deliberadamente simple, enfocada en rendimiento, claridad estructural y sostenibilidad técnica.

---

## Stack Tecnológico

### Framework  
**Astro (Static Site Generator)**  

Generación de HTML estático optimizado, arquitectura basada en componentes y manejo estructurado de contenido.

### Estilos  
**Tailwind CSS**  

Sistema utility-first con tokens de marca centralizados.

### Modelo de Contenido  

- Markdown  
- Frontmatter YAML  
- JSON / YAML para datos estructurados simples  

### Despliegue  

- GitHub Pages  
- GitHub Actions (build automático)

---

## Identidad Visual

**Tipografías**

- Poppins (títulos)  
- Montserrat (texto)

**Paleta institucional**

- `#181D36`  
- `#286D8C`  
- `#38BCE2`  
- `#866FB1`  
- `#E41376`

**Estética**

Semi-formal académica, limpia y jerárquicamente clara.

---

## Estructura del Proyecto

```
sid-web/
│
├── src/
│   ├── content/
│   │   ├── activities/
│   │   └── courses/
│   │
│   ├── data/
│   ├── components/
│   ├── layouts/
│   └── pages/
│
├── public/
│   └── images/
│
├── adrs/
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

---

## Enfoque Arquitectónico

- Separación clara entre contenido y presentación  
- Crecimiento por contenido, no por complejidad técnica  
- Infraestructura mínima  
- Máximo rendimiento  

---

## Público Objetivo

Estudiantes universitarios de la  
**Universidad Distrital Francisco José de Caldas**

---

## Estado

Proyecto en evolución controlada.  
Arquitectura estable.  
Stack consolidado.  
Despliegue automatizado.
