document.getElementById('botonAbrirSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '0'; // Al hacer clic, muestra el sidebar
});

// Cerrar sidebar al hacer clic fuera de él
document.addEventListener('click', function(e) {
    if (!document.getElementById('sidebar').contains(e.target) && e.target.id !== 'botonAbrirSidebar') {
        document.getElementById('sidebar').style.left = '-150px';
    }
});

// Función para ocultar con el scroll el heder
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Abajo
        document.getElementById("miHeader").classList.add("ocultar");
    } else {
        // Arriba
        document.getElementById("miHeader").classList.remove("ocultar");
    }
    lastScrollTop = currentScroll;
});