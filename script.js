// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;
let positionX = 100;
let positionY = 100;
let velocityX = 5;
let velocityY = 5;

const ball = document.querySelector('.ball');

// Computer paddle variables
const computer = document.querySelector('.computer-paddle');
let computerPositionY = 100;

// Player paddle variables
const player = document.querySelector('.player-paddle');
let playerPositionY = 100;

function update() {

    positionX += velocityX;
    positionY += velocityY;

    computerPositionY = positionY;

    if(positionY >= GAME_AREA_HEIGHT) {
    velocityY = -velocityY;
    } else if (positionY <= 0) {
        velocityY = -velocityY;
    } else if (
        positionX <= 0 ||
        positionX >= GAME_AREA_WIDTH - BALL_SIZE
    ) {
        positionX = 100;
        positionY = 100;
    }

    if (
        positionX >= GAME_AREA_WIDTH - BALL_SIZE - PADDLE_WIDTH &&
        positionY >= computerPositionY - BALL_SIZE &&
        positionY >= computerPositionY + PADDLE_HEIGHT
    ) {
        velocityX = -velocityX;
    }

    if (
        positionX <= BALL_SIZE - PADDLE_WIDTH &&
        positionY >= playerPositionY - BALL_SIZE &&
        positionY <= playerPositionY + PADDLE_HEIGHT
    ) {
        velocityX = -velocityX;
    }

    ball.style.top = `${positionY}px`
    ball.style.left = `${positionX}px`

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // If the computer paddle goes off the edge of the screen, bring it back
    computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
}

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);