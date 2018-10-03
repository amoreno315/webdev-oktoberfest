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
      <p class="splash__instructions">Tienes 45 segundos para conseguir la mayor cantidad posible de cerveza.
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

  function saveNameScore(score){
    var user = prompt ("Introduce tu nombre: ");
    var currentScore = [];
    if (localStorage.getItem("rankings") !== null){
      currentScore = JSON.parse(localStorage.getItem("rankings"));
    }
    currentScore.push({user:user, score:score});
    currentScore.sort(function(objA, objB){
      return objB.score - objA.score;
    });
    localStorage.setItem("rankings", JSON.stringify(currentScore));

  }
  // function renderRankins(){
  //   var rankings= [];
  //   if (localStorage.getItem("rankings") !== null){
  //     rankings = JSON.parse(localStorage.getItem("rankings"));
  //   }
    
  //     var rankingsHtmlOl = document.getElementById("ranking");
  //     var user = '';
  //     var scoreUser = '';
      
  //     rankings.forEach(function (element) {
  //       var rankingLi = document.createElement('li');
  //       rankingLi.innerHTML= `
  //       <span class="user">${element.user}</span>
  //       <span class="scoreUser">${element.score}</span>`
  //       rankingsHtmlOl.appendChild(rankingLi);
  //     });
  // }
  function renderRankins(){
    var rankings= [];
    if (localStorage.getItem("rankings") !== null){
      rankings = JSON.parse(localStorage.getItem("rankings"));
    }
    
      var rankingsHtmlOl = document.getElementById("ranking");
      // var user = '';
      // var scoreUser = '';
      var maxValoresArray = 9;
      if (rankings.length <= 10){
        maxValoresArray = rankings.length - 1;
      }
      for (var i = 0; i <= maxValoresArray; i++){
        var rankingLi = document.createElement('li');
        rankingLi.innerHTML= `
        <span class="user">${rankings[i].user}</span>
        <span class="scoreUser">${rankings[i].score}</span>`
        rankingsHtmlOl.appendChild(rankingLi);
      }
      
  }

  function buildGameOver(score){
    gameOverElement = buildDom(`
    <main class="gameover container">
      <div class="gameOverUp">
        <h1>Game over</h1>
        <img src="./images/5a1d06ed526735.7194899815118517573375.png" alt="Game Over">
        <p>Litros conseguidos: <span class="score"></span></p>
      </div>
      <div class="gameOverDown">
        <h2>High Score</h2>
        <ol id="ranking"></ol>
      </div>
      <div class="restart">
        <button>Restart</button>
      </div>
      </main>
    `);
    mainContainerElement.appendChild(gameOverElement);
  
    gameOverButton = document.querySelector('button');
    gameOverButton.addEventListener('click', handleGameOverClick);

    var scoreElement = document.querySelector('.score');
    scoreElement.innerText = score;
    saveNameScore(score);
    renderRankins();
  }
  function destroyGameOver(){
    gameOverButton.removeEventListener('click', handleGameOverClick);
    gameOverElement.remove();
  }
  buildSplash();
}
document.addEventListener('DOMContentLoaded', main);