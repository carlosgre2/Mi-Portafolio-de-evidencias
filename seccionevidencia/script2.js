var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

// Función para abrir la imagen en pantalla completa asignando su ruta (src)
function openFullImg(reference) {
    fullImgBox.style.display = "flex";
    fullImg.src = reference;
}

// Función para cerrar la ventana modal
function closeImg() {
    fullImgBox.style.display = "none";
}

var fullImgBox2 = document.getElementById("fullImgBox2");
var fullImg2 = document.getElementById("fullImg2");

// Función para abrir la imagen en pantalla completa asignando su ruta (src)
function openFullImg2(reference2) {
    fullImgBox2.style.display = "flex";
    fullImg2.src = reference2;
}

// Función para cerrar la ventana modal
function closeImg2() {
    fullImgBox2.style.display = "none";
}