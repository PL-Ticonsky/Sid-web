# ADR-001: Generación estática con Astro

## Estado
Aceptado

## Contexto
El sitio SID es informativo, sin base de datos, sin lógica de negocio y sin autenticación.
Debe permitir crecimiento progresivo (nuevos cursos y actividades) sin introducir
infraestructura compleja.

El mantenimiento estará a cargo de un único desarrollador y el despliegue será en
GitHub Pages, lo que favorece una arquitectura estática.

## Decisión
Usar Astro como generador de sitio estático (SSG).

## Justificación
- Permite generación de HTML estático optimizado.
- Soporta componentes reutilizables.
- Integra manejo estructurado de contenido (Markdown + frontmatter).
- Es compatible con despliegue directo en GitHub Pages.
- Reduce superficie de ataque al no existir backend.

## Consecuencias
### Positivas
- Sitio rápido, seguro y simple de desplegar.
- Arquitectura preparada para crecer en contenido.
- Separación clara entre presentación y contenido.

### Negativas
- No existe renderizado dinámico en tiempo real.
- Cambios requieren rebuild y redeploy.

adrs/ADR-002-estilos-tailwind.md
# ADR-002: Sistema de estilos con Tailwind CSS

## Estado
Aceptado

## Contexto
El proyecto requiere coherencia visual alineada con el manual de marca
(colores oficiales y tipografías Poppins / Montserrat).
Se busca velocidad de desarrollo y consistencia sin crear una hoja CSS extensa y difícil de mantener.

## Decisión
Adoptar Tailwind CSS como framework de utilidades, definiendo tokens oficiales
de marca en la configuración (colores SID y familias tipográficas).

## Justificación
- Permite construir UI consistente mediante utilidades composables.
- Reduce CSS personalizado y deuda técnica visual.
- Facilita mantener identidad corporativa mediante configuración centralizada.
- Funciona eficientemente en sitios estáticos con purgado automático.

## Consecuencias
### Positivas
- Consistencia visual en todos los componentes.
- Menor mantenimiento de CSS artesanal.
- Velocidad de implementación alta.

### Negativas
- Requiere disciplina en composición de clases.
- Curva inicial de adaptación al enfoque utility-first.

adrs/ADR-003-contenido-md-yaml.md
# ADR-003: Gestión de contenido mediante Markdown y YAML

## Estado
Aceptado

## Contexto
El sitio no tendrá base de datos ni panel administrativo.
Debe permitir añadir cursos y actividades de forma estructurada,
versionable y mantenible.

## Decisión
- Cursos y actividades se almacenarán como archivos Markdown individuales.
- Los metadatos (título, tipo, cover, enlaces) se gestionarán mediante frontmatter YAML.
- Datos estructurados pequeños (equipo, configuración global) se almacenarán en archivos YAML/JSON.

## Justificación
- Permite crecimiento sin introducir backend.
- Facilita control de versiones en Git.
- Mantiene separación clara entre contenido y presentación.
- Compatible nativamente con Astro.

## Consecuencias
### Positivas
- Añadir contenido es crear o editar archivos.
- Historial claro y trazable.
- Estructura validable y organizada.

### Negativas
- Cambios requieren rebuild.
- No es editable por usuarios no técnicos.

adrs/ADR-004-deploy-gh-pages.md
# ADR-004: Despliegue en GitHub Pages con GitHub Actions

## Estado
Aceptado

## Contexto
Se requiere un hosting clásico, sencillo, confiable y de costo cero.
No se desea mantener infraestructura propia ni servidor dedicado.

## Decisión
Usar GitHub Pages como plataforma de hosting.
Automatizar el build y despliegue mediante GitHub Actions en cada push a la rama principal.

## Justificación
- Hosting gratuito para sitios estáticos.
- SSL automático.
- Integración directa con repositorio.
- No requiere mantenimiento de servidor.
- Permite agregar dominio personalizado en el futuro.

## Consecuencias
### Positivas
- Deploy automático.
- Costo cero.
- Infraestructura gestionada externamente.

### Negativas
- Dependencia del ecosistema GitHub.
- Limitado a capacidades de sitio estático.

adrs/ADR-005-animaciones-suaves.md
# ADR-005: Política de animaciones y experiencia visual

## Estado
Aceptado

## Contexto
Se busca una experiencia moderna y agradable, alineada con identidad institucional,
sin introducir complejidad innecesaria ni afectar performance.

## Decisión
Implementar únicamente animaciones suaves mediante CSS transitions
(hover, fade, transform leves).
Evitar librerías pesadas de animación salvo necesidad claramente justificada.

No se implementará modo oscuro en esta versión del sitio.

## Justificación
- Mantiene rendimiento alto.
- Evita sobrecarga innecesaria de JavaScript.
- Conserva una estética profesional y sobria.
- Reduce deuda técnica futura.

## Consecuencias
### Positivas
- UI fluida y ligera.
- Código más simple.
- Mejor mantenibilidad.

### Negativas
- Animaciones complejas requerirán evaluación futura.
