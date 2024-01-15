// Inicializa a biblioteca AOS (Animate On Scroll)
AOS.init();

// Define a data do evento
const dataDoEvento = new Date("Jun 15, 2024 01:00:00");

// Obtém o timestamp da data do evento
const timeStampDoEvento = dataDoEvento.getTime();

// Define uma função para atualizar o contador a cada segundo
const contaAsHoras = setInterval(function() {
    // Obtém a data e o timestamp atuais
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    // Calcula a distância em milissegundos até o evento
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    // Converte as unidades de tempo
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    // Calcula dias, horas, minutos e segundos até o evento
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    // Atualiza o elemento HTML com o contador
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    // Verifica se o evento já ocorreu
    if (distanciaAteOEvento < 0) {
        // Limpa o intervalo de atualização do contador
        clearInterval(contaAsHoras);
        // Atualiza o elemento HTML indicando que o evento expirou
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000); // Intervalo de atualização a cada 1000 milissegundos (1 segundo)
