let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")
let box = 4
let snake = []; let snake2 = {}
snake[0] = {x: 0, y: 0}; snake2 = {x: 0, y: 0} 
let food = {
    // x : Math.floor(Math.random() * 15),
    // y : Math.floor(Math.random() * 15)
    x : box * Math.floor(30*Math.random()),
    y : box * Math.floor(30*Math.random())
}
let direction = "right"
speed = 1.0
let delay = 100


function criarBG() {
    context.fillStyle = "white"
    context.fillRect(0, 0,700,700)
}

function criarCobrinha() {
    for (i=0; i < snake.length; i++) {
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function apagarRastro() {
    context.fillStyle = "white"
    context.fillRect(snake2.x,snake2.y,box,box)
}

function apagarRastro2() {
    context.fillStyle = "white"
    context.fillRect(snake[snake.length-1].x,snake[snake.length-1].y,box,box)
}

function criarCobrinha2() {
        context.fillStyle = "green"
        context.fillRect(snake2.x, snake2.y, box, box)
}

function drawFood() {
    context.fillStyle = 'red'
    context.fillRect(food.x,food.y,box,box)
}

// function update(event) {
//     let tecla = event.key

//     if (tecla == "ArrowLeft"    && direction != 'right')    direction = 'left'
//     if (tecla == "ArrowRight"   && direction != 'left')     direction = 'right'
//     if (tecla == "ArrowUp"      && direction != 'down')     direction = 'up'
//     if (tecla == "ArrowDown"    && direction != 'up')       direction = 'down'
// }

// function iniciarJogo_DEPRECATED() {
    // criarBG()
    // let snakeX = snake[0].x; let snakeY = snake[0].y    
    // if (direction == "right") snakeX += box
    // if (direction == "left") snakeX -= box
    // if (direction == "up") snakeY -= box
    // if (direction == "down") snakeY += box
    // snake.pop()
    // let newHead = {x:snakeX, y:snakeY }
    // snake.push(newHead)
    // criarCobrinha()
// }

function update2(event) {
    let tecla = event.key

    if (tecla == "ArrowLeft" && direction != 'right') {    
        if (direction == 'left') speed += 1
        if (direction == 'right' && speed > 1) speed -= 1
        direction = 'left' ;
    }

    if (tecla == "ArrowRight" && direction != 'left') {
        if (direction == 'right') speed += 1
        if (direction == 'left' && speed > 1) speed -= 1
        direction = 'right';
    }

    if (tecla == "ArrowUp" && direction != 'down') {    
        if (direction == 'up') speed += 1
        if (direction == 'down' && speed > 1) speed -= 1
        direction = 'up'   ;
    }

    if (tecla == "ArrowDown" && direction != 'up') {    
        if (direction == 'down') speed += 1
        if (direction == 'up' && speed > 1) speed -= 1
        direction = 'down' ;
    }
}


function iniciarJogo(apagaRastro=true) {
    criarBG()
    criarCobrinha()
    let snakeX = snake[0].x; let snakeY = snake[0].y
    if (direction == "right") snakeX += 1 * box // speed * box
    if (direction == "left") snakeX -=  1 * box // speed * box
    if (direction == "up") snakeY -=    1 * box // speed * box
    if (direction == "down") snakeY +=  1 * box // speed * box
    // snake.x = snakeX
    // snake.y = snakeY
    // apagarRastro2()
    for (i = 1; i < snake.length ; i++)
    {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y)
        {
            clearInterval(jogo)
            alert('o jogo acabou')
        }
    }

    if (food.x == snake[0].x && food.y == snake[0].y) {
        // alert('voce ganhou')
        food.x = box * Math.floor(30*Math.random())
        food.y = box * Math.floor(30*Math.random())
    }
    else {
        if (apagaRastro) snake.pop()
    }
    let newHead = {x:snakeX, y:snakeY }; snake.unshift(newHead)
    drawFood()

}

document.addEventListener('keydown',update2)
let jogo = setInterval(iniciarJogo, 100)

