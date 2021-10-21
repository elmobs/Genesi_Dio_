let order = [];
let clickOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul
// 4 =  
// 5 =
// 6 = 
// 7 =

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const blue2 = document.querySelector('.blue2');
const red2 = document.querySelector('.red2');
const green2 = document.querySelector('.green2');
const yellow2 = document.querySelector('.yellow2');

//cria ordem aleatoria das cores
let shuffOrder = () => {
    let colorOrder = Math.floor(Math.random() * 8);
    order[order.length] = colorOrder;
    clickOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// acende a proxima cor
let lightColor = (element, number) => {
    number = number * 300;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 1000);
    setTimeout(() => {
        element.classList.remove('selected');
    }, 1000);
}

//checa a ordem que foi clicado
let checkOrder = () => {
    for (let i in clickOrder) {
        if(clickOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickOrder.length == order.length) {
        alert(`Pontação: ${score}\n Voce Acertou!!! Proximo Nivel!` );
        nextLevel();
    }
}

//função para 

let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
    createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);  
}

//funcao que retornar a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    }else if(color == 1) {
        return red;
    }else if(color == 2) {
        return yellow;
    }else if (color == 3) {
        return blue;
    }else if(color == 4) {
        return green2;
    }else if(color == 5) {
        return red2;
    }else if(color == 6) {
        return yellow2;
    }else if (color == 7) {
        return blue2;
    }
}

// função para proximo nivel

let nextLevel = () => {
    score++;
    shuffOrder();
}

//função game over

let gameOver = () => {
    alert(`Pontuação: ${score}\nVoçê Perdeu o Jogo HAHAHA!\n Clique em OK para iniciar um novo Jogo`);
    order =[];
    clickOrder = [];

    playGame();
}

//

let playGame = () => {
    alert('Bem Vindo ao jogo!!!');
    score = 0;

    nextLevel();
}

//click das cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
green2.onclick = () => click(4);
red2.onclick = () => click(5);
yellow2.onclick = () => click(6);
blue2.onclick = () => click(7);


//inicio do jogo
playGame();