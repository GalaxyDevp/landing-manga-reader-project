# 📚 Manga Reader — Landing Page
 
Una landing page moderna y responsiva para una aplicación de lectura de manga, construida con React 19 y Vite.
 
## 🖼️ Vista general
 
Este proyecto es la página de presentación (_landing page_) de una plataforma de lectura de manga. Está diseñada para captar la atención de nuevos usuarios, mostrar las características de la app y dirigirlos a la descarga o registro.
 
---
 
## 🚀 Stack tecnológico
 
| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | ^19.2.4 | Librería UI principal |
| [Vite](https://vitejs.dev/) | ^8.0.1 | Bundler y servidor de desarrollo |
| [React Router](https://reactrouter.com/) | ^7.14.0 | Enrutamiento SPA |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2.2 | Estilos utilitarios |
| [Sass](https://sass-lang.com/) | ^1.98.0 | Preprocesador CSS |
| [Zustand](https://zustand-demo.pmnd.rs/) | ^5.0.12 | Gestión de estado global |
 
---
 
## 📁 Estructura del proyecto
 
```
landing-manga-reader-project/
├── public/               # Archivos estáticos (imágenes, favicon, etc.)
├── src/                  # Código fuente principal
│   ├── components/       # Componentes reutilizables
│   ├── pages/            # Vistas/páginas de la app
│   ├── store/            # Estado global con Zustand
│   └── main.jsx          # Punto de entrada de React
├── index.html            # HTML raíz
├── vite.config.js        # Configuración de Vite
├── tailwind.config.js    # Configuración de Tailwind
├── eslint.config.js      # Configuración de ESLint
└── package.json
```
 
---
 
## ⚙️ Instalación y uso
 
### Prerrequisitos
 
- Node.js >= 18
- pnpm >= 9 — puedes instalarlo con `npm install -g pnpm`
### Clonar el repositorio
 
```bash
git clone https://github.com/GalaxyDevp/landing-manga-reader-project.git
cd landing-manga-reader-project
```
 
### Instalar dependencias
 
```bash
pnpm install
```
 
### Iniciar servidor de desarrollo
 
```bash
pnpm dev
```
 
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.
 
### Construir para producción
 
```bash
pnpm build
```
 
### Previsualizar el build
 
```bash
pnpm preview
```
 
### Ejecutar linter
 
```bash
pnpm lint
```
 
