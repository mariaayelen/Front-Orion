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

    // Capturar mouse globalmente
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function update() {
        if (!isZeroG) return;

        elements.forEach(obj => {
            // Actualizar posición
            obj.x += obj.vx;
            obj.y += obj.vy;

            // Rebote contra bordes (con margen de seguridad de 15px)
            if (obj.x <= 15 || obj.x + obj.width >= window.innerWidth - 15) {
                obj.vx *= -0.8;
                obj.x = obj.x <= 15 ? 16 : window.innerWidth - obj.width - 16;
            }
            if (obj.y <= 15 || obj.y + obj.height >= window.innerHeight - 15) {
                obj.vy *= -0.8;
                obj.y = obj.y <= 15 ? 16 : window.innerHeight - obj.height - 16;
            }


            const margin = 20; // Margen de proximidad para el empuje
            if (mouseX > obj.x - margin && mouseX < obj.x + obj.width + margin &&
                mouseY > obj.y - margin && mouseY < obj.y + obj.height + margin) {

                // Calcular dirección del empuje desde el mouse hacia el centro
                const centerX = obj.x + obj.width / 2;
                const centerY = obj.y + obj.height / 2;
                const dx = centerX - mouseX;
                const dy = centerY - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;

                // Empuje dinámico
                const pushForce = 10;
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

                    elements.push({
                        el: el,
                        x: rect.left,
                        y: rect.top,
                        vx: (Math.random() - 0.5) * 10,
                        vy: (Math.random() - 0.5) * 10,
                        width: rect.width,
                        height: rect.height
                    });

                    el.classList.remove("returning");
                    el.classList.add("floating-element");
                    el.style.left = rect.left + "px";
                    el.style.top = rect.top + "px";
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
