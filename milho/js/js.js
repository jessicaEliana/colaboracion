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
var lastScrollTop = 0; // Variable para almacenar la última posición de desplazamiento

  window.addEventListener('scroll', function() {
    var elemento = document.querySelector('.elemento');
    var scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
      elemento.classList.add('ocultar'); // Si se desplaza hacia abajo, oculta el elemento
    } else {
      elemento.classList.remove('ocultar'); // Si se desplaza hacia arriba, muestra el elemento
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Asegúrate de que la última posición de desplazamiento no sea negativa
  });

//funcion scroll elementos
window.addEventListener('scroll', function() {
    var elemento = document.querySelector('.elemento');
    var posicionY = window.scrollY;

    if (posicionY > 100) { // Cambia 100 por la posición en la que quieres que el elemento desaparezca
      elemento.classList.add('ocultar');
    } else {
      elemento.classList.remove('ocultar');
    }
  });