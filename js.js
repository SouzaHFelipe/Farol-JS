const img = document.getElementById('img');
const buttons = document.getElementById('buttons');



const trafficLght = ( event ) => {
    turnOn[event.target.id]();

}

const changecolor = () => {
    const color = 'red';
    turnOn[color]();

}

const turnOn = {
    'red' : () => img.src = './img/vermelho.png',
    'yellow' : () => img.src = './img/amarelo.png',
    'green' : () => img.src = './img/verde.png',
    'automatic': () => setinterval(changecolor , 200 )


}

buttons.addEventListener('click' , trafficLght);

