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
      <p class="splash__instructions">Mueve al jugador
      para recoger cerveza y bretzel, intenta evitar las gotas de agua</p>
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