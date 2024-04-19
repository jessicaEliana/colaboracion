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
