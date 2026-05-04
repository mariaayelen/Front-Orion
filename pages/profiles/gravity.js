document.addEventListener("DOMContentLoaded", () => {
    console.log("Gravity engine initialized");
    const btn = document.getElementById("gravityToggle");
    const targets = document.querySelectorAll(".badge-skill, .movie-mini-card");

    if (!btn) {
        console.error("Gravity toggle button not found!");
        return;
    }

    let isZeroG = false;
    let animationId = null;
    let elements = [];

    // 1. CAPTURAR MOUSE Y TÁCTIL GLOBALMENTE
    // Iniciamos fuera de la pantalla para que no empuje desde la esquina 0,0
    let mouseX = -1000;
    let mouseY = -1000;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Soporte para tocar y arrastrar en celulares
    document.addEventListener("touchmove", (e) => {
        if (e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        }
    }, { passive: true });

    // Cuando sacamos el dedo, alejamos el punto de empuje para que no siga interactuando
    document.addEventListener("touchend", () => {
        mouseX = -1000;
        mouseY = -1000;
    });

    function update() {
        if (!isZeroG) return;

        elements.forEach(obj => {
            // Actualizar posición
            obj.x += obj.vx;
            obj.y += obj.vy;

            // Rebote contra bordes (con margen de seguridad)
            if (obj.x <= 15 || obj.x + obj.width >= window.innerWidth - 15) {
                obj.vx *= -0.8;
                obj.x = obj.x <= 15 ? 16 : window.innerWidth - obj.width - 16;
            }
            if (obj.y <= 15 || obj.y + obj.height >= window.innerHeight - 15) {
                obj.vy *= -0.8;
                obj.y = obj.y <= 15 ? 16 : window.innerHeight - obj.height - 16;
            }

            const margin = 30; // Margen de proximidad (un poco más grande para los dedos)
            if (mouseX > obj.x - margin && mouseX < obj.x + obj.width + margin &&
                mouseY > obj.y - margin && mouseY < obj.y + obj.height + margin) {

                // Calcular dirección del empuje desde el touch/mouse hacia el centro
                const centerX = obj.x + obj.width / 2;
                const centerY = obj.y + obj.height / 2;
                const dx = centerX - mouseX;
                const dy = centerY - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;

                // Empuje dinámico
                const pushForce = 12; // Un toque más de fuerza para que se sienta fluido
                obj.vx += (dx / dist) * pushForce;
                obj.vy += (dy / dist) * pushForce;
            }

            // Fricción
            obj.vx *= 0.97;
            obj.vy *= 0.97;

            // Aplicar al DOM
            obj.el.style.left = obj.x + "px";
            obj.el.style.top = obj.y + "px";
        });

        animationId = requestAnimationFrame(update);
    }

    btn.addEventListener("click", () => {
        // Delay para sincronizar con el script global del cohete
        setTimeout(() => {
            isZeroG = document.body.classList.contains("rocket-active");
            console.log("Zero-G mode:", isZeroG);

            if (isZeroG) {
                elements = [];
                targets.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    // Forzamos el ancho para que no colapse al ser fixed
                    el.style.width = rect.width + "px";

                    // 2. CORRECCIÓN MOBILE: Prevenir que los elementos fuera de pantalla "exploten"
                    let startX = rect.left;
                    let startY = rect.top;

                    // Si el elemento está por debajo del scroll visual, lo traemos suavemente a la pantalla
                    if (startY > window.innerHeight - rect.height) {
                        startY = window.innerHeight - rect.height - (Math.random() * 80); 
                    }
                    if (startY < 0) startY = Math.random() * 80;
                    if (startX > window.innerWidth - rect.width) startX = window.innerWidth - rect.width - 20;
                    if (startX < 0) startX = 20;

                    elements.push({
                        el: el,
                        x: startX,
                        y: startY,
                        vx: (Math.random() - 0.5) * 15, // Un empuje inicial un poco más dinámico
                        vy: (Math.random() - 0.5) * 15,
                        width: rect.width,
                        height: rect.height
                    });

                    el.classList.remove("returning");
                    el.classList.add("floating-element");
                    el.style.left = startX + "px";
                    el.style.top = startY + "px";
                });

                if (!animationId) update();
            } else {
                if (animationId) cancelAnimationFrame(animationId);
                animationId = null;

                targets.forEach(el => {
                    el.classList.add("returning");
                    el.style.left = "";
                    el.style.top = "";
                    el.style.width = "";

                    setTimeout(() => {
                        el.classList.remove("floating-element");
                        el.classList.remove("returning");
                    }, 300);
                });
            }
        }, 150);
    });
});