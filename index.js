
let temporizador = 0;
let intentos = 0;



document.querySelector('#boton-empezar').onclick = inicializarJuego;

function inicializarJuego() {
    iniciarTiempo();
}

function iniciarTiempo() {
   const tiempo = document.querySelector('#tiempo').innerHTML = '00:00';
    document.querySelector('#boton-empezar').disabled = true;
    
    let segundos = 0;
    const intervalId = setInterval(() => {
        segundos++;
        tiempo.innerHTML = '00:' + (segundos < 10 ? '0' : '') + segundos;
    }, 1000);   
    
    setSeconds();
}




