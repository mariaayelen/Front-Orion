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
- **Yahir** ([Github](https://github.com/yahirperez2899-dotcom))

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
├── index.html                # Página principal
├── assets/
│   └── img/                  # Imágenes y recursos visuales
├── css/
│   └── style.css             # Estilos globales del sitio
├── js/
│   └── script.js             # Comportamiento y animaciones globales
├── pages/
│   ├── bitacora/
│   │   ├── bitacora.html     # Página de bitácora del proyecto
│   │   └── styles.css        # Estilos específicos de la bitácora
│   │
│   ├── ivan/
│   │   ├── page.html         # Perfil individual de Iván
│   │   ├── styles.css        # Estilos propios del perfil
│   │   └── gravity.js        # Efectos dinámicos (partículas / animaciones personalizadas)
│   │
│   ├── maira/
│   │   ├── page.html         # Perfil individual de Maira
│   │   ├── styles.css        # Estilos propios del perfil
│   │   └── gravity.js        # Efectos dinámicos (partículas / animaciones personalizadas)
│   │
│   ├── ivana/
│   │   ├── page.html         # Perfil individual de Ivana
│   │   ├── styles.css        # Estilos propios del perfil
│   │   └── gravity.js        # Efectos dinámicos (partículas / animaciones personalizadas)
│   │
│   ├── ayelen/
│   │   ├── page.html         # Perfil individual de Ayelén
│   │   ├── styles.css        # Estilos propios del perfil
│   │   └── gravity.js        # Efectos dinámicos (partículas / animaciones personalizadas)
│   │
│   └── yahir/
│       ├── page.html         # Perfil individual de Yahir
│       ├── styles.css        # Estilos propios del perfil
│       └── gravity.js        # Efectos dinámicos (partículas / animaciones personalizadas)
│
└── README.md                 # Documentación del proyecto
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

## Guía de Estilos
### Paleta de Colores 

- Fondo principal: #000000
- Texto principal: #ffffff
- Color primario (neón): #c77dff
- Primario claro: #d192ff
- Primario oscuro: #9d4edd
- Secundario: #3f1161
- Acento: #8c77bb
- Fondo tarjetas: #10092b
- Hover tarjetas: #1a0f3a
- Texto secundario: #e1d1ed

## Tipografías

- Títulos:
https://fonts.google.com/specimen/Michroma
- Texto general:
https://fonts.google.com/specimen/Montserrat

## JavaScript

### Funcionalidades implementadas:
- Menú hamburguesa
  - Se activa en resoluciones menores a 768px
  - Permite mostrar/ocultar el menú de navegación
- ScrollReveal
 - Aplica animaciones al hacer scroll en:
    - Sección hero
    - Tarjetas de integrantes
    - Bitácora
- tsParticles
  - Fondo animado con partículas
  - Refuerza la ambientación espacial
- Efectos visuales
  - Flip cards en integrantes (CSS + interacción)
  - Botones con efecto neón
  - Animaciones hover
- Cursor personalizado (cohete)
  - Se activa dinámicamente con JavaScript
  - Genera partículas tipo “humo” al moverse

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

## Capturas de Pantalla

(Agregar imágenes del proyecto)

- Home
- Sección equipo
- Bitácora
- Perfil individual

## Uso de Inteligencia Artificial
- Herramientas utilizadas
  - ChatGPT
  - Copilot 
  - Google Geminis

## Enlace al Proyecto Desplegado "Agregar Link"

## Licencia

Proyecto académico sin licencia específica.

## Créditos

Desarrollado por el Equipo Orión como parte de la Tecnicatura en Desarrollo de Software.
