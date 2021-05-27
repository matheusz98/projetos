const diasTxt = document.querySelector('#dias');
const horasTxt = document.querySelector('#horas');
const minutosTxt = document.querySelector('#minutos');
const segundosTxt = document.querySelector('#segundos');
const dataNatal = '25 Dec 2021';

function contagem() {
    const natal = new Date(dataNatal);
    const dataAtual = new Date();

    const tempo = (natal - dataAtual) / 1000;
    const dias = Math.floor(tempo / 3600 / 24);
    const horas = Math.floor(tempo / 3600 % 24);
    const minutos = Math.floor(tempo / 60) % 60;
    const segundos = Math.floor(tempo) % 60;

    diasTxt.innerHTML = dias;
    horasTxt.innerHTML = formataHora(horas);
    minutosTxt.innerHTML = formataHora(minutos);
    segundosTxt.innerHTML = formataHora(segundos);
}

function formataHora(horas) {
    return horas < 10 ? (`0${horas}`) : horas;
}

contagem();

setInterval(contagem, 1000);