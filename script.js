document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { src: "PESCA.png", text: "DISTRIBUIDOR RESPONSABLE DE LAS MÚLTIPLES ACTIVIDADES DE LA PESCA PARA CHD Y CHI", bg: "linear-gradient(135deg, #001F60, #0044AA)" },
        { src: "CAMARA.png", text: "ALQUILER DE CÁMARAS FRIGORÍFICAS", bg: "linear-gradient(135deg, #2A5298, #1E3C72)" },
        { src: "PETROLEO.png", text: "VENTA DE PETRÓLEO PARA EMBARCACIONES PESQUERAS", bg: "linear-gradient(135deg, #6A11CB, #2575FC)" },
        { src: "TRANSPORTE.png", text: "CONVENIO CON LA EMPRESA TERRAMOVIL PARA TRANSPORTE", bg: "linear-gradient(135deg, #FF416C, #FF4B2B)" }
    ];

    let currentIndex = 0;
    const imageElement = document.getElementById("dynamic-image");
    const textElement = document.getElementById("dynamic-text");
    const textContainer = document.querySelector(".text-container");

    function updateBanner(index) {
        currentIndex = index;
        imageElement.style.opacity = "0";
        textElement.style.opacity = "0";

        setTimeout(() => {
            const item = images[index];
            imageElement.src = item.src;
            textElement.textContent = item.text;
            textContainer.style.background = item.bg;
            imageElement.style.opacity = "1";
            textElement.style.opacity = "1";
        }, 500);
    }

    // Cada 5 segundos cambia el banner automáticamente
    const interval = setInterval(() => {
        let nextIndex = (currentIndex + 1) % images.length;
        updateBanner(nextIndex);
    }, 5000);

    // Evento de clic en los sublogos
    document.querySelectorAll('.sub-logo').forEach(logo => {
        logo.addEventListener('click', () => {
            const index = parseInt(logo.dataset.index);
            updateBanner(index);
        });
    });

    // Redes sociales (igual que ya lo tenías)
    const socialLinks = {
        facebook: "https://www.facebook.com/diosempresa",
        whatsapp: "https://wa.me/+51924357477",
    };

    document.querySelectorAll(".footer-social a").forEach(icon => {
        icon.addEventListener("click", function (event) {
            event.preventDefault();
            const platform = this.dataset.platform;
            if (socialLinks[platform]) {
                window.location.href = socialLinks[platform];
            }
        });
    });
});
