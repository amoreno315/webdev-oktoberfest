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
  self.scoreElement = self.gameElement.querySelector('.score .value');

  self.width = self.canvasParentElement.clientWidth;
  self.height = self.canvasParentElement.clientHeight;

  self.canvasElement.setAttribute('width', self.width);
  self.canvasElement.setAttribute('height', self.height);

  self.ctx = self.canvasElement.getContext('2d');

}
Game.prototype._startLoop = function(){
  var self = this;

  self.score = 0;
  //crear cerveza
  self.player = new Player(self.canvasElement);
  
  self.handleKeyDown = function (event){
    //event ArrowLeft direction <-
    //event ArrowRight direction ->
  }

  //addEventListener 'keyleft'

  function loop(){
    self._clearAll();
    self._updateAll();
    self._renderAll();

    //if Time <30 
    //else GameOver
  }
}

Game.prototype._updateAll = function (){
  var self = this;

}
Game.prototype._renderAll = function () {
  //bier[].render()
  //player.render()
}

Game.prototype._clearAll = function (){
  //limpiar cervezaOut
}

Game.prototype._spawnBier = function() {
  //crear cerveza
}

Game.prototype._checkAllCollision = function (){

}

Game.prototype.destroy = function (){
  var self = this; 

  self.gameElement.remove();
  document.removeEventListener('keydown', self.handleKeyDown);
  
}