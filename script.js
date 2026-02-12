const horaAtual = document.querySelector('.relogio')

function atualizarRelogio () {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0'); 
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const newHora = `${horas}:${minutos}:${segundos}`;
    if (horaAtual) {
        horaAtual.textContent = newHora;
    }
}

atualizarRelogio();

setInterval(atualizarRelogio, 1000);