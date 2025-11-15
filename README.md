# CrossFit Cidra - Official Website

Una página web moderna, mobile-friendly y completamente en español para CrossFit Cidra, diseñada para atraer nuevos miembros y mostrar la comunidad del box.

## 🎯 Características

- ✅ **100% Responsive** - Optimizado para móviles, tablets y desktop
- ✅ **Diseño Moderno** - Interfaz atractiva con animaciones suaves
- ✅ **Contenido en Español** - Todo el contenido en español para la audiencia local
- ✅ **Integración WhatsApp** - Contacto directo vía WhatsApp
- ✅ **Redes Sociales** - Enlaces a Facebook, Instagram y más
- ✅ **Galería de Fotos/Videos** - Muestra la comunidad en acción
- ✅ **Testimonios** - Historias reales de transformación
- ✅ **Planes y Precios** - Información clara de membresías
- ✅ **Mapa de Ubicación** - Integración con Google Maps
- ✅ **Formulario de Contacto** - Captura de leads

## 🚀 Tecnologías Utilizadas

- **React 19** - Framework de UI
- **TypeScript** - Type safety
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animaciones fluidas
- **Google Fonts** - Inter & Montserrat

## 📋 Requisitos Previos

- Node.js 16+ (recomendado 18+)
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd crossfit-cidra
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Preview de la build de producción

## 🎨 Estructura del Proyecto

```
crossfit-cidra/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navegación responsive
│   │   ├── Hero.tsx            # Sección hero con CTA
│   │   ├── WhatIsCrossFit.tsx  # Información sobre CrossFit
│   │   ├── Benefits.tsx        # Beneficios del CrossFit
│   │   ├── Programs.tsx        # Planes y precios
│   │   ├── Gallery.tsx         # Galería de fotos/videos
│   │   ├── Testimonials.tsx    # Testimonios de miembros
│   │   ├── Contact.tsx         # Formulario de contacto
│   │   ├── Location.tsx        # Mapa y ubicación
│   │   └── Footer.tsx          # Footer con links
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx               # Entry point
│   └── index.css              # Estilos globales
├── images/                     # Logos del box
├── index.html                 # HTML template
├── tailwind.config.js         # Configuración de Tailwind
├── vite.config.ts            # Configuración de Vite
└── package.json              # Dependencias

```

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#DC2626', // Rojo principal
    dark: '#991B1B',
    light: '#EF4444',
  },
  // ...
}
```

### Contenido
- **Información de contacto**: Actualiza los números de teléfono y emails en `Contact.tsx` y `Location.tsx`
- **Redes sociales**: Actualiza los enlaces en `Contact.tsx` y `Footer.tsx`
- **Planes y precios**: Modifica los planes en `Programs.tsx`
- **Testimonios**: Actualiza las historias en `Testimonials.tsx`

### Imágenes
- Reemplaza las imágenes de Unsplash con fotos reales del box
- Los logos están en la carpeta `/images`

## 📱 Secciones de la Página

1. **Hero** - Presentación principal con CTAs
2. **¿Qué es CrossFit?** - Educación sobre CrossFit
3. **Beneficios** - Ventajas de entrenar CrossFit
4. **Planes** - Membresías y precios
5. **Galería** - Fotos y videos del box
6. **Testimonios** - Historias de éxito
7. **Contacto** - Formulario y métodos de contacto
8. **Ubicación** - Mapa y dirección

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
# Sube la carpeta dist/ a GitHub Pages
```

### Netlify/Vercel
1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📞 Información de Contacto (Para Actualizar)

Actualiza esta información en los componentes correspondientes:

- **Teléfono**: (787) 777-7777
- **Email**: info@crossfitcidra.com
- **Dirección**: Carr. 172 Km 1.5, Cidra, PR 00739
- **WhatsApp**: +1 (787) 777-7777
- **Instagram**: @crossfitcidra
- **Facebook**: CrossFit Cidra

## 📝 Licencia

© 2025 CrossFit Cidra. Todos los derechos reservados.
CrossFit® es una marca registrada de CrossFit, LLC.

## 🤝 Contribuciones

Para mejoras o sugerencias, por favor abre un issue o pull request.

