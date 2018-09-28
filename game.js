'use strict';
function Game(parent){
  var self = this;

  self.parentElement = parent;
  self.gameElement = null; 
  self.onGameOverCallback = null;

  self._init();
  self._startLoop();
}

Game.prototype._init = function(){
  var self = this;
  self.gameElement = buildDom(`
    <main class="game container">
      <header class="game__header">
        <div class="time">
          <span class="label">Time:</span>
          <span class="value"></span>
        </div>
        <div class="score">
          <span class="label">Score:</span>
          <span class="value"></span>
          <span class="value">Litros</span>
        </div>
      </header>
      <div class="game__canvas">
        <canvas class="canvas"></canvas>
      </div>
    </main>
  `)
  self.parentElement.appendChild(self.gameElement);

  self.canvasParentElement = document.querySelector('.game__canvas');
  self.canvasElement = document.querySelector('.canvas');

  self.timeElement = self.gameElement.querySelector('.time .value');
  //inicializar tiempo
  self.scoreElement = self.gameElement.querySelector('.score .value');


  self.width = self.canvasParentElement.clientWidth;
  self.height = self.canvasParentElement.clientHeight;

  self.canvasElement.setAttribute('width', self.width);
  self.canvasElement.setAttribute('height', self.height);

  self.ctx = self.canvasElement.getContext('2d');


  //idea Backlog: aumentar/disminuir tiempo de juego.
  // var countDown = function(){
  //   var timeoutId = window.setInterval(function(){
  //     if (counter >= 0) {
  //       displayCountdown.innerHTML = counter;
  //       counter--;
  //       return;
  //     }
      
      
  //     }, 200);
  //     // llamar a handleGameOver(); del main.js
  //     //clearInterval(timeoutId);
  //     clearInterval(timeoutId);
  //     self.onGameOverCallback();
  //   }
  // countDown();
  
}


Game.prototype._startLoop = function(){
  var self = this;

  self.score = 0;
  //crear cerveza
  //inicializar contador
  self.counter = 5;

  self.countDown = function (sec) {
    self.counter -= sec;
  }

  self.player = new Player(self.canvasElement);
  
  self.handleKeyDown = function (event){
    if (event.key === "ArrowLeft"){
      console.log (event);
      self.player.movimiento = -1;
    }
    if (event.key === "ArrowRight"){
      console.log (event);
      self.player.movimiento = 1;
    }
    
    
  }

  document.addEventListener('keydown', self.handleKeyDown);
  console.log (event);

  function loop(){
    self._clearAll();
    self._updateAll();
    self._renderAll();

    if (self.counter > 0) {
      requestAnimationFrame(loop);
    } else {
      self.gameover();
    }
  }

  requestAnimationFrame(loop);
  self.intervalId = setInterval(function() {
    self.countDown(1);
  }, 1000);
}

Game.prototype._updateAll = function (){
  var self = this;

  //self._spawnBier();
  
  self.player.update();
  self._checkAllCollision();
  self._updateUI();

  //sumar volumen por colision

}
Game.prototype._renderAll = function () {
  var self = this;


  //self.bier.render();
  //self.bier.forEach(function(item){
    //item.render();
  //})
  self.player.render();
}

Game.prototype._clearAll = function (){
  //limpiar cervezaOut
}

Game.prototype._spawnBier = function() {
  //crear cerveza
  var self = this;

  if (Math.random() > 0.97){
    var randomX = Math.random() * self.width * 0.8;
    self.bier.push(new Bier(self.canvasElement, self.height, randomX));
  }
}

Game.prototype._checkAllCollision = function (){
  var self = this;
  //comprobar colisiones y sumar volumen a score

}

Game.prototype._updateUI = function() {
  var self = this; 

  self.scoreElement.innerText= self.score;
  self.timeElement.innerText= self.counter;
}

Game.prototype.onOver = function (callback) {
  var self = this;

  self.onGameOverCallback = callback;
}

Game.prototype.destroy = function (){
  var self = this; 

  self.gameElement.remove();
  document.removeEventListener('keydown', self.handleKeyDown);
}

Game.prototype.gameover = function () {
  var self = this;
  clearInterval(self.intervalId);
  self.onGameOverCallback();
}

