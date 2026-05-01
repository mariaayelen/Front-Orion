// Espera a que cargue todo el DOM
document.addEventListener("DOMContentLoaded", () => {

  // 🔹 SCROLLREVEAL (animaciones al hacer scroll)
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal();
    sr.reveal('.revelable', {
      delay: 200,
      distance: '80px',
      duration: 1200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      origin: 'bottom',
      interval: 300,
      scale: 0.9,
      cleanup: false
    });
  }


  // 🔹 PARTÍCULAS (estrellas fondo)
  if (typeof tsParticles !== 'undefined') {
    tsParticles.load("tsparticles", {
      background: {
        color: { value: "transparent" }
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: { min: 0.3, max: 0.8 }
        },
        size: {
          value: { min: 1, max: 2.5 }
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          outModes: {
            default: "out"
          }
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: false // 🔥 lo apagamos como querías (no reacciona al mouse)
          },
          onClick: {
            enable: false
          }
        }
      },
      detectRetina: true
    });
  }


  // 🔹 EFECTO FOOTER (cuando llegás abajo)
  const footer = document.querySelector('.main-footer');

  if (footer) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.innerHeight + window.scrollY;
      const totalHeight = document.body.scrollHeight;

      if (scrollPos >= totalHeight - 120) {
        footer.style.borderTop = '1px solid #d946ef';
        footer.style.boxShadow = '0 -10px 30px rgba(217, 70, 239, 0.2)';
      } else {
        footer.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
        footer.style.boxShadow = 'none';
      }
    });
  }

});