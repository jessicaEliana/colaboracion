document.addEventListener("mousemove", function(event) {
    const emojiContainer = document.getElementById("emojiContainer");
    const eye = document.getElementById("eye");
    const pupil = document.getElementById("pupil");
    const containerRect = emojiContainer.getBoundingClientRect();

    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;

    const eyePosX = eye.offsetLeft + eye.offsetWidth / 2;
    const eyePosY = eye.offsetTop + eye.offsetHeight / 2;

    const deltaX = mouseX - eyePosX;
    const deltaY = mouseY - eyePosY;

    const angle = Math.atan2(deltaY, deltaX);
    const radius = Math.min(eye.offsetWidth, eye.offsetHeight) / 4; // Pupil's maximum radius

    const pupilPosX = eyePosX + Math.cos(angle) * radius;
    const pupilPosY = eyePosY + Math.sin(angle) * radius;

    pupil.style.left = pupilPosX + "px";
    pupil.style.top = pupilPosY + "px";
});


//boton 3d

document.getElementById('btn1').addEventListener('click', function() {
    showModal('figura1.jpg');
});

document.getElementById('btn2').addEventListener('click', function() {
    showModal('figura2.jpg');
});

function showModal(imageSrc) {
    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modal-content');

    // Limpiar contenido anterior
    modalContent.innerHTML = '';

    // Crear elemento de imagen 3D
    var img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Figura 3D';

    // Agregar imagen al contenido del modal
    modalContent.appendChild(img);

    // Mostrar modal
    modal.style.display = 'block';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}



document.getElementById('btn1').addEventListener('click', function() {
    showModal('figura1.jpg');
});

document.getElementById('btn2').addEventListener('click', function() {
    showModal('figura2.jpg');
});

function showModal(imageSrc) {
    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modal-content');

    // Limpiar contenido anterior
    modalContent.innerHTML = '';

    // Crear elemento de imagen 3D
    var img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Figura 3D';

    // Agregar imagen al contenido del modal
    modalContent.appendChild(img);

    // Mostrar modal
    modal.style.display = 'block';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
