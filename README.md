# Equipo Orión - Proyecto Web

## Descripción

Página web de presentación y bitácora del Equipo Orión, desarrollada como trabajo práctico para la Tecnicatura en Desarrollo de Software.

El sitio apuesta por una estética inspirada en el espacio, con colores oscuros, tipografías modernas y animaciones suaves. Incluye una sección de bienvenida, tarjetas de integrantes y una bitácora que documenta el proceso creativo y técnico.

## Objetivos del proyecto

- Mostrar la identidad del equipo.
- Documentar el proceso de creación con una bitácora visual.
- Incluir animaciones y diseño responsivo.
- Usar tecnologías web básicas para una página estática.

## Integrantes del Equipo

- **Iván**
- **Maira**
- **Ivana**
- **Ayelén**
- **Yahir**

## Tecnologías utilizadas

- **HTML5**: Estructura de la página y contenidos.
- **CSS3**: Estilos, diseño responsivo y efectos visuales.
- **JavaScript**: Animaciones, control de partículas y comportamiento dinámico.
- **Font Awesome**: Iconos para navegación y redes.
- **Google Fonts**: Tipografías `Michroma` y `Montserrat`.
- **ScrollReveal**: Animaciones al hacer scroll.
- **tsParticles**: Fondo de partículas en movimiento.

## Estructura del proyecto

```
Front-Orion/
├── index.html              # Página principal
├── assets/
│   └── img/                # Imágenes y recursos visuales
├── css/
│   └── style.css           # Estilos globales del sitio
├── js/
│   └── script.js           # Comportamiento y animaciones globales
├── pages/
│   ├── bitacora/           # Sección de bitácora del proyecto
│   │   ├── bitacora.html
│   │   └── styles.css
│   └── ivan/               # Ejemplo de página de integrante
│       ├── page.html
│       ├── styles.css
│       └── gravity.js
└── README.md               # Documentación del proyecto
```

## Contenido principal

### `index.html`
- Página de inicio con presentación del equipo.
- Secciones de bienvenida, integrantes y llamada a la acción.
- Botón principal para comenzar el viaje.
- Footer con branding y redes sociales.

### `pages/bitacora/bitacora.html`
- Línea de tiempo con hitos del desarrollo.
- Tarjetas de bitácora con texto e imagen.
- Animaciones de entrada para cada tarjeta.
- Fondo de partículas activo con `tsParticles`.

### `pages/ivan/page.html`
- Ejemplo de perfil individual personalizado.
- Incluye secciones de música, películas y habilidades.
- Implementa lógica propia de partículas y gravedad (`gravity.js`).

### `css/style.css`
- Estilos generales para todo el sitio.
- Diseño responsivo para desktop y mobile.
- Temas de color, tipografía y efectos de neón.
- Estilos específicos para tarjetas, navbar y footer.

### `js/script.js`
- Inicializa `ScrollReveal` para animar secciones con scroll.
- Configura el fondo de partículas con `tsParticles`.
- Controla el efecto visual del footer al llegar al final de la página.

## Cómo ejecutar el proyecto

1. Descarga o clona el repositorio a tu PC.
2. Abre `index.html` directamente en el navegador.
3. Navega hacia la bitácora o los perfiles desde los enlaces del menú.

> El proyecto es estático; no necesita servidor. Sin embargo, si querés probarlo con un servidor local, podés usar `Live Server` en VS Code.

## Personalización rápida

- Para cambiar el logo, reemplaza `./assets/img/logo.png` y actualiza el nombre si es necesario.
- Para agregar más tarjetas a la bitácora, copia una tarjeta existente en `bitacora.html` y cambia el contenido.
- Para ajustar la animación de scroll, edita los valores en `js/script.js` dentro de `ScrollReveal().reveal(...)`.

## Problemas comunes

- Si las animaciones no aparecen, verifica que `ScrollReveal` y `tsParticles` carguen correctamente en el navegador.
- Si las imágenes no se ven, revisa que las rutas dentro de `assets/img/` estén bien escritas.

## Mejoras futuras sugeridas

- Completar las páginas individuales del resto de los integrantes.
- Añadir más interactividad a las tarjetas tipo flip card.
- Optimizar la carga de imágenes usando formatos modernos (WebP).
- Crear una versión con dark mode automático.

## Licencia

Proyecto académico sin licencia específica.

## Créditos

Desarrollado por el Equipo Orión como parte de la Tecnicatura en Desarrollo de Software.