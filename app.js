// Cambio de imagen por evento mouse

let mainImage = document.getElementById('main-image');
console.log(mainImage)
mainImage.addEventListener('mouseover',()=>{
    mainImage.src='./images/diseñando.jpg';
})
mainImage.addEventListener('mouseout',()=>{
    mainImage.src='./images/foto-gris.jpeg';
})

// Ver mas

let cards = document.querySelectorAll('.portfolio-card');

console.log(cards);

cards.forEach(card => {
    let linkVerMas = card.querySelector('.verMas');
    let hiddenContent = card.querySelector('.hidden');

    linkVerMas.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('hice click');


        if (hiddenContent.style.display === 'block') {
            hiddenContent.style.display = 'none';
            linkVerMas.innerHTML = 'Saber más';
        } else {
            hiddenContent.style.display = 'block';
            linkVerMas.innerHTML = 'Ver menos';
        }
    });
});


// Mensaje de "Enviado con éxito" 
// 
// En el caso de querer enviar los datos realmente deberia usar el evento submit. 
// Pero en este caso no funciona 

let formBoton = document.querySelector('.form-button');
let containerMsje = document.getElementById('container-enviar');

formBoton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click en el form');

    let mensajeEnviado = document.createElement('p');
    mensajeEnviado.textContent = 'Enviado con éxito';

    containerMsje.appendChild(mensajeEnviado);
});


// SLIDER
let indiceActual = 0;
const tarjetasPorSlide = 3; 
const anchoTarjeta = 300;

function moverSlider(direccion) {
    const contenedor = document.querySelector('.container-cards');

    if (direccion === 1 && indiceActual < contenedor.children.length - tarjetasPorSlide) {
        indiceActual += tarjetasPorSlide;
    } else if (direccion === -1 && indiceActual > 0) {
        indiceActual -= tarjetasPorSlide;
    }

    contenedor.style.transform = `translateX(-${indiceActual * anchoTarjeta}px)`;
}