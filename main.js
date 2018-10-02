'use strict';
function buildDom(html){
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main(){
  var mainContainerElement = document.querySelector('#main-container');

  // Crear Splash
  var SplashElement = null; 
  var splashButton = null; 
  
  var handleSplashClick = function () {
    destroySplash();
    buildGame();
  }
  
  function buildSplash(){
    SplashElement = buildDom(`
    <main class="splash container">
      <h1 class="splash__title">Instrucciones</h1>
      <p class="splash__instructions">Tienes 30 segundos para conseguir la mayor cantidad posible de cerveza.
      Si recoges gotas de agua perderás tiempo y si recoges bretzel lo aumentarás</p>
      <button>Start</button>
    </main>
    `);
    mainContainerElement.appendChild(SplashElement);

    splashButton = document.querySelector('button');
    splashButton.addEventListener('click', handleSplashClick);


  }
  function destroySplash(){
    //evento click > remove
    splashButton.removeEventListener('click', handleSplashClick);
    SplashElement.remove();
  }

  // Game 
  var game = null;
  var handleGameOver = function (){
    destroyGame();
    buildGameOver(game.score);
  }
  function buildGame(){
    game = new Game(mainContainerElement);
    game.onOver(handleGameOver);
  }
  function destroyGame(){
    //parar despues de 30 segundos
    game.destroy();
  }

  //funcion para contar 30 segundos

  //  GameOver
  var gameOverElement = null; 
  var gameOverButton = null; 

  var handleGameOverClick = function () {
    destroyGameOver();
    buildSplash();
  }

  function buildGameOver(score){
    gameOverElement = buildDom(`
    <main class="gameover container">
      <h1>Game over</h1>
      <img src="./images/5a1d06ed526735.7194899815118517573375.png" alt="Game Over">
      <p>Litros conseguidos: <span class="score"></span></p>
      <button>Restart</button>
      </main>
    `);
    mainContainerElement.appendChild(gameOverElement);
  
    gameOverButton = document.querySelector('button');
    gameOverButton.addEventListener('click', handleGameOverClick);

    var scoreElement = document.querySelector('.score');
    scoreElement.innerText = score;

  }
  function destroyGameOver(){
    gameOverButton.removeEventListener('click', handleGameOverClick);
    gameOverElement.remove();
  }
  buildSplash();
}
document.addEventListener('DOMContentLoaded', main);