#  Documento de Arquitectura – Página Web Grupo de Trabajo UD

## Objetivo General

Desarrollar una página web **estática** dirigida a estudiantes de la **Universidad Distrital Francisco José de Caldas**, cuyo propósito es:

- Presentar el grupo de trabajo  
- Mostrar las actividades que realiza  
- Publicar cursos ofrecidos por el grupo  
- Permitir que estudiantes se postulen mediante un formulario externo  

**Restricciones:**

- No habrá base de datos  
- No habrá lógica de negocio  
- No habrá descargas  

El sitio será completamente **estático** y enfocado únicamente en **mostrar información**.

---

##  Estructura General del Sitio

1. **Inicio**  
2. **Actividades**  
3. **Actividad Individual**  
4. **Cursos**  
5. **Curso Individual**  
6. **Equipo**

**No habrá:**

- Noticias  
- Eventos con fecha  
- FAQ  
- Descargas  
- Sistema de autenticación  

---

##  Navegación

### Navbar (Fija / Sticky)

**Elementos:**

- Logo (lado izquierdo)  
- Inicio  
- Actividades  
- Cursos  
- Equipo  

**Botón destacado:** **“Únete”**  
→ Redirige a un único formulario externo  
→ Visible en todas las páginas

---

## 1. Página de Inicio

**Contenido:**

### Hero Principal
- Nombre del grupo  
- Texto descriptivo breve (tono semi-formal académico)  
- Botón **“Únete”**

### Sección “¿Qué hacemos?”
Cards representando:

- Cursos  
- Hackatones  
- Maratones  
- Actividades lúdicas  

### Galería de Actividades
- Carrusel de imágenes  
- Fotos reales del grupo  

### Bloque Institucional
- Misión  
- Visión  

### Footer
- Redes sociales  
- GitHub  

---

##  2. Página de Actividades

Vista en **grid de tarjetas**.

Cada actividad incluye:

- Imagen destacada  
- Título  
- Tipo (ej: Hackatón, Maratón, Actividad Lúdica)  
- Click → Redirige a página individual

---

## 3. Página Individual de Actividad

**Contenido:**

- Imagen destacada (cover)  
- Título  
- Tipo  
- Descripción  
- Botón **“Participar”** → Formulario externo  

**Campos mínimos definidos:**

- Título  
- Tipo  
- Descripción  
- Link a Forms  
- Imagen  

---

##  4. Página de Cursos

Vista en **grid de tarjetas tipo carátula**.

Cada tarjeta incluye:

- Imagen representativa  
- Título del curso  
- Click → Página individual del curso  

**No habrá:**

- Filtros  
- Buscador  
- Categorías  
- Paginación  

Si se agregan más cursos, simplemente se añaden nuevas tarjetas.

---

##  5. Página Individual de Curso

**Estructura fija:**

- Título  
- Descripción  

### Objetivos
- Lista de objetivos

### Prerrequisitos
- Lista de prerrequisitos

### Temario / Roadmap

Módulo 1  
- Tema A  
- Tema B  

Módulo 2  
- Tema C  

### Recursos
- Lista de enlaces externos  

**No habrá:**

- Lecciones internas  
- Entregables  
- Notas  
- Evaluaciones  

---

##  6. Página de Equipo

Mostrará únicamente los **integrantes principales (5)**.

Cada integrante tendrá:

- Foto  
- Nombre  
- Rol  
- Link a Instagram  
- Link a LinkedIn  

No se mostrarán miembros secundarios ni logros/certificados.

---

##  Identidad y Tono

- **Estilo:** Semi-formal académico  
- **Público objetivo:** Estudiantes universitarios  
- **Enfoque:** Institucional pero cercano  
- **Idioma:** Español  
- **Colores:** Definidos previamente por el grupo  

---

##  Alcance Deliberadamente Excluido

- Backend  
- Base de datos  
- Panel administrativo  
- Sistema de login  
- Publicación dinámica  
- Sistema de noticias  
- Eventos con fechas  
- Descargas  

---

##  Escalabilidad

- Más cursos → Nuevas tarjetas  
- Más actividades → Nuevas páginas individuales  

No se contemplan filtros ni organización por categorías.

---

##  Interacción del Usuario

Acciones disponibles:

- Navegar entre secciones  
- Hacer clic en enlaces externos  
- Completar el formulario de postulación  

---

**Documento final de definición estructural listo para pasar a diseño técnico y selección de stack.**
