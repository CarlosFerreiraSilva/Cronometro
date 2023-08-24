var iniciar = document.getElementById('Iniciar');
var pausar = document.getElementById('Pausar');
var reiniciar = document.getElementById('Reiniciar');
var cronometroElement = document.getElementById('Cronometro');
var intervalId;
var contador = 0;

iniciar.addEventListener('click', () => {
    iniciar.style.display =  "none"
    pausar.style.display = "inline"
    if (!intervalId) {
        intervalId = setInterval(function() {
            contador += 1;
            displayCronometro();
        }, 10); // Update interval to 10 milliseconds for centiseconds
    }
});

pausar.addEventListener('click', () => {
    iniciar.style.display =  "inline"
    pausar.style.display = "none"
    clearInterval(intervalId);
    intervalId = null;
});

reiniciar.addEventListener('click', () => {
    iniciar.style.display =  "inline"
    pausar.style.display = "none"
    clearInterval(intervalId);
    intervalId = null;
    contador = 0;
    displayCronometro();
});

function displayCronometro() {
    var centiseconds = contador % 100;
    var seconds = Math.floor(contador / 100) % 60;
    var minutes = Math.floor(contador / 6000);

    var centisecondsDisplay = centiseconds.toString().padStart(2, '0');
    var secondsDisplay = seconds.toString().padStart(2, '0');
    var minutesDisplay = minutes.toString().padStart(2, '0');

    cronometroElement.innerHTML = `${minutesDisplay}:${secondsDisplay}:${centisecondsDisplay}`;
}

function mostrar(){

}

function naomostrar(){

}