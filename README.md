# 🚀 InnovaFreelance - MVP Frontend

**InnovaFreelance** es una plataforma web desarrollada en **React** diseñada para ser el punto de encuentro entre talento de ingeniería especializado y proyectos tecnológicos de alto impacto. 

Este repositorio contiene el **Frontend** del sistema, construido bajo una arquitectura de componentes escalables y un diseño enfocado en la productividad técnica.

---

## 💻 Funcionalidades de la Aplicación

### 🏠 Landing Page Dinámica
* Interfaz optimizada con **Tailwind CSS** para un rendimiento ultra rápido.
* Diseño "Dark Mode" nativo integrado para reducir la fatiga visual de los ingenieros.
* Call-to-actions claros para los dos flujos de usuario: Clientes y Freelancers.

### 🔍 Buscador de Talento (Descubrir)
* Catálogo visual de expertos categorizados por especialidad (IoT, Software, Hardware).
* Tarjetas de perfil interactivas que muestran habilidades clave y valoraciones de un vistazo.

### 👤 Portafolios de Ingeniería (Estilo GitHub)
* Visualización de perfiles técnicos que emula un `README.md` profesional.
* Secciones dedicadas a:
    * **Stack Tecnológico:** Visualización de herramientas actuales.
    * **Proyectos Destacados:** Galería de trabajos previos (IoT, PCBs, Software).
    * **Actividad Reciente:** Historial de contribuciones y avances técnicos.

---

## 🛠️ Tecnologías Utilizadas

* **React 18**: Biblioteca principal para la construcción de la interfaz de usuario.
* **Vite**: Herramienta de construcción para un entorno de desarrollo veloz.
* **React Router Dom**: Gestión de navegación entre páginas (Inicio, Talento, Login, Perfil) sin recarga de página (SPA).
* **Tailwind CSS**: Framework de utilidades para un diseño moderno, responsivo y fácil de mantener.
* **Material Symbols**: Librería de iconos vectoriales para una estética profesional.
* **Despliegue:** Vercel (CI/CD integrado con GitHub).

---

## 📁 Estructura del Proyecto (Frontend)

```text
src/
├── App.jsx        # Enrutador principal y Landing Page
├── Login.jsx      # Interfaz de autenticación
├── Talento.jsx    # Catálogo de ingenieros (Descubrir)
├── Perfil.jsx     # Vista detallada del portafolio del freelancer
├── index.css      # Configuraciones globales de Tailwind
└── main.jsx       # Punto de entrada de React
