// Animação do coração
let time = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(30);
}

function draw() {
    background(0, 20);
    translate(width / 2, height / 2);

    stroke(255, 0, 0);
    strokeWeight(2);
    noFill();

    for (let i = 0; i < 30; i++) {
        let angle = map(i, 0, 30, 0, TWO_PI);
        let x = 16 * pow(sin(angle), 3) * 20;
        let y = -(13 * cos(angle) - 5 * cos(2 * angle) - 2 * cos(3 * angle) - cos(4 * angle)) * 20;
        let offsetX = sin(time + i) * 10;
        let offsetY = cos(time + i) * 10;

        line(0, 0, x + offsetX, y + offsetY);
    }

    time += 0.1;
}

// Transição para o site principal após 5 segundos
setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}, 5000);

// Contador de tempo
function atualizarContador() {
    const dataInicial = new Date("2023-06-10T00:00:00"); // Mude para a data correta
    const agora = new Date();

    const diferenca = agora - dataInicial;
    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / 60000) % 60;
    const horas = Math.floor(diferenca / 3600000) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24)) % 30;
    const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30)) % 12;
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));

    document.getElementById("contador").innerHTML = `
        <strong>${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos</strong>
    `;
}

setInterval(atualizarContador, 1000);
