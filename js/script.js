document.addEventListener("DOMContentLoaded", () => {
  // 1. Custom Cursor Cohete
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  cursor.innerHTML = '<i class="fa-solid fa-rocket"></i>';
  document.body.appendChild(cursor);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let isFlying = false;
  let isHovering = false;
  let currentAngle = -45;
  let isRocketActive = false; // Estado del modo cohete
  let lastParticleTime = 0;

  function createSmokeParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('smoke-particle');
    // Pequeña dispersión aleatoria
    const offsetX = (Math.random() - 0.5) * 10;
    const offsetY = (Math.random() - 0.5) * 10;
    particle.style.left = `${x + offsetX}px`;
    particle.style.top = `${y + offsetY}px`;
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 600);
  }


  // Seguir el mouse solo si el modo cohete está activo y no está volando
  document.addEventListener("mousemove", (e) => {
    if (!isRocketActive || isFlying) return;
    cursor.style.display = "block";
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    if (isRocketActive && !isFlying) {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;

      cursorX += dx * 0.2;
      cursorY += dy * 0.2;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      // Calcular el ángulo solo si hay movimiento significativo
      const speed = Math.sqrt(dx * dx + dy * dy);
      if (speed > 1) {
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);
        let targetAngle = angle + 45;

        // Normalizar el targetAngle para evitar giros bruscos (360 spin)
        let delta = targetAngle - currentAngle;
        delta = ((delta + 180) % 360 + 360) % 360 - 180;

        currentAngle += delta;

        // Crear partícula de humo
        const now = Date.now();
        if (now - lastParticleTime > 40) { // Limitar la cantidad de partículas
          createSmokeParticle(cursorX, cursorY);
          lastParticleTime = now;
        }
      }

      cursor.style.transform = `translate(-50%, -50%) rotate(${currentAngle}deg) scale(${isHovering ? 1.5 : 1})`;
    }
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Efecto hover en botones y enlaces
  const clickables = document.querySelectorAll('a, button');
  clickables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (!isRocketActive || isFlying) return;
      isHovering = true;
      cursor.style.color = '#ffffff';
      cursor.style.textShadow = '0 0 15px #ffffff';
    });
    el.addEventListener('mouseleave', () => {
      if (!isRocketActive || isFlying) return;
      isHovering = false;
      cursor.style.color = 'var(--color-primary)';
      cursor.style.textShadow = '0 0 10px var(--color-primary)';
    });
  });

  // 2. Menú Hamburguesa
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // 3. Efecto Cohete Toggle al hacer click en "Comenzar el Viaje"
  const btnViaje = document.querySelector('.btn-neon-viaje');
  if (btnViaje) {
    btnViaje.addEventListener('click', (e) => {
      if (isFlying) return; // Si está en medio de la animación, ignorar click

      isRocketActive = !isRocketActive;

      if (isRocketActive) {
        // ACTIVAR MODO COHETE
        document.body.classList.add('rocket-active');
        btnViaje.innerHTML = '<i class="fa-solid fa-stop"></i> FINALIZAR VIAJE';

        // Aparece en la posición actual del mouse
        cursorX = e.clientX;
        cursorY = e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        cursor.style.display = "block";
      } else {
        // DESACTIVAR MODO COHETE
        document.body.classList.remove('rocket-active');
        btnViaje.innerHTML = '<i class="fa-solid fa-rocket"></i> COMENZAR EL VIAJE';

        // Efecto de despedida: El cohete sale volando
        isFlying = true;
        cursor.style.transition = 'top 1.2s cubic-bezier(0.5, 0, 0.2, 1), transform 1.2s cubic-bezier(0.5, 0, 0.2, 1)';
        cursor.style.top = '-100px';
        // Forzar que apunte exactamente hacia arriba (-45deg para este ícono)
        cursor.style.transform = `translate(-50%, -50%) rotate(-45deg) scale(2)`;

        // Crear estela mientras sale volando
        const flyInterval = setInterval(() => {
          const rect = cursor.getBoundingClientRect();
          createSmokeParticle(rect.left + rect.width / 2, rect.top + rect.height / 2);
        }, 40);

        // Ocultar definitivamente después de volar
        setTimeout(() => {
          clearInterval(flyInterval);
          cursor.style.transition = 'transform 0.2s ease, color 0.2s ease, text-shadow 0.2s ease'; /
          cursor.style.display = "none";
          isFlying = false;
          currentAngle = -45; 
        }, 1200);
      }
    });
  }

  // 4. Animaciones con ScrollReveal (Solo en Bitácora)
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('.revelable', {
      delay: 200,
      distance: '80px',
      duration: 1200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      origin: 'bottom',
      interval: 300,
      scale: 0.9,
      cleanup: true
    });
  }

  // 5. Partículas en el fondo (Solo en Bitácora)
  const tsParticlesElement = document.getElementById('tsparticles');
  if (tsParticlesElement && typeof tsParticles !== 'undefined') {
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
            enable: true
          },
          onClick: {
            enable: false
          }
        }
      },
      detectRetina: true
    });
  }

});




// 6.Texto animado en la tarjeta (Solo en Bitácora)

const texto = document.getElementById("textoProximo");

const palabras = texto.innerText.split(" ");

texto.innerHTML = "";

palabras.forEach((palabra, index) => {
  const span = document.createElement("span");
  span.classList.add("card-subtitle-word");

  span.style.transitionDelay = `${index * 40}ms`;

  span.innerHTML = palabra + "&nbsp;";

  texto.appendChild(span);
});




// 7. Efecto de chispas al pasar el mouse sobre la tarjeta (Solo en Bitácora)

const card = document.querySelector(".card");

card.addEventListener("mouseenter", () => {
  const rect = card.getBoundingClientRect();

  for (let i = 0; i < 20; i++) {
    const spark = document.createElement("span");
    spark.classList.add("card-spark");

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    spark.style.left = x + "px";
    spark.style.top = y + "px";

    document.body.appendChild(spark);


    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 120 + 40;

    spark.animate([
      {
        transform: "translate(-50%, -50%) scale(1)",
        opacity: 1
      },
      {
        transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0.5)`,
        opacity: 0
      }
    ], {
      duration: 700,
      easing: "ease-out"
    });

    setTimeout(() => spark.remove(), 700);
  }
});