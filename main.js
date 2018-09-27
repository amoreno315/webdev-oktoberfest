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
      <h1 class="splash__title">Oktoberfest Spiele</h1>
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

  function buildGame(){

  }
  function destroyGame(){

  }
  //  GameOver
  function buildGameOver(){

  }
  function destroyGameOver(){

  }
  buildSplash();
}
document.addEventListener('DOMContentLoaded', main);