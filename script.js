/* 
  ====================================================================
  CARRUSEL INTERACTIVO MANUAL (.js-manual-carousel)
  ==================================================================== 
*/
let indiceManual = 0;

function cambiarSlideManual(direccion) {
    // Selecciona exclusivamente los elementos del carrusel manual
    const slides = document.querySelectorAll('.js-manual-slide');
    
    slides[indiceManual].classList.remove('active');
    indiceManual = (indiceManual + direccion + slides.length) % slides.length;
    slides[indiceManual].classList.add('active');
}


/* 
  ====================================================================
  CARRUSEL AUTOMÁTICO CADA 4 SEGUNDOS (.auto-carousel)
  ==================================================================== 
*/
let indiceAuto = 0;
// Selecciona exclusivamente los elementos del carrusel automático
const slidesAuto = document.querySelectorAll('.auto-slide');

function cambiarSlideAuto(direccion) {
    slidesAuto[indiceAuto].classList.remove('active');
    
    if (direccion !== undefined) {
        indiceAuto = (indiceAuto + direccion + slidesAuto.length) % slidesAuto.length;
    } else {
        indiceAuto = (indiceAuto + 1) % slidesAuto.length;
    }
    
    slidesAuto[indiceAuto].classList.add('active');
}

// Temporizador que cambia automáticamente cada 4 segundos (4000 ms)
setInterval(function() {
    cambiarSlideAuto();
}, 4000);


/* 
  ====================================================================
  FECHA DINÁMICA QUE CAMBIA SEGÚN EL DÍA ACTUAL (fecha-dinamica)
  ==================================================================== 
*/

const hoy = new Date();

// Obtenemos el formato estándar YYYY-MM-DD para el atributo datetime
const anio = hoy.getFullYear();
const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
const dia = String(hoy.getDate()).padStart(2, '0');
const fechaISO = `${anio}-${mes}-${dia}`;

const elementoTiempo = document.getElementById('fecha-dinamica');

if (elementoTiempo) {
    // Asignamos el valor técnico al atributo datetime
    elementoTiempo.setAttribute('datetime', fechaISO);
    
    // Mostramos la fecha legible para el usuario
    elementoTiempo.textContent = hoy.toLocaleDateString('es-ES', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}