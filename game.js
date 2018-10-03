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
      <audio src="./music/main-theme.mp3"
       autoplay></audio>
    </main>
  `)
  //self.gameTheme.play();
  
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
  self.bier = [];
  self.water = [];
  self.bretzel = [];
  //inicializar contador, tiempo de juego
  self.counter = 30;

  self.countDown = function (sec) {
    self.counter -= sec;
  }

  self.player = new Player(self.canvasElement);
  
  
  self.handleKeyDown = function (event){
    if (event.key === "ArrowLeft"){
      //console.log (event);
      self.player.moveLeft();
      self.player.update();
     //console.log(self.player.movimiento) // = cambiamos la posicion x del jugador hacía la izquierda
    }
    if (event.key === "ArrowRight"){
      //console.log (event);
      self.player.moveRight();
      self.player.update();
      //console.log(self.player.movimiento);
    }
  }

  document.addEventListener('keydown', self.handleKeyDown);
  
 
  

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
  //cada segundo ejecuta un setInterval que actualiza el contador de tiempo
  requestAnimationFrame(loop);
  self.intervalId = setInterval(function() {
    self.countDown(1);
  }, 1000);
}

Game.prototype._updateAll = function (){
  var self = this;

  self._spawnBier();
  self._spawnWater();
  self._spawnBretzel();

  self.bier.forEach(function(item){
    item.update();
   
  });
  self.water.forEach(function(item){
    item.update();
   
  });
  self.bretzel.forEach(function(item){
    item.update();
  });

  //borrar cerveza cuando se sale del canvas
  self.bier = self.bier.filter(function(item){
    if(item.onTheFloor()){
      //console.log ('borra');
      return false;
    }
    return true;
  });
  self.water = self.water.filter(function(item){
    if(item.waterOnTheFloor()){
      //console.log ('borra');
      return false;
    }
    return true;
  });
  self.bretzel = self.bretzel.filter(function(item){
    if(item.bretzelOnTheFloor()){
      return false;
    }
    return true;
  })

  //self.player.update(); //mueve el jugador automaticamente
  self._checkAllCollision();
  self._updateUI();

  //sumar volumen por colision

}
Game.prototype._renderAll = function () {
  var self = this;


  //self.bier.render();
  self.bier.forEach(function(item) {
    item.render();
  });
  self.water.forEach(function(item) {
    item.render();
  });
  self.bretzel.forEach(function(item){
    item.render();
  });

  self.player.render();
}

Game.prototype._clearAll = function (){
  var self = this;
  //self.ctx.clearRect(0,0, self.width, self.height);
  //limpiar cervezaOut
  self.ctx.clearRect(0,0,self.width, self.height);
}

Game.prototype._spawnBier = function() {
  //crear cerveza
  var self = this;

  if (Math.random() > 0.95){
    var randomX = Math.random() * self.width * 0.8;
    self.bier.push(new Bier(self.canvasElement, randomX, 0));
    //console.log(self.bier);
  }

}
Game.prototype._spawnWater = function(){
  var self = this; 

  if (Math.random()> 0.96){
    var randomWX = Math.random() * self.width * 0.8;
    self.water.push (new Water(self.canvasElement, randomWX, 0));
  }
}

Game.prototype._spawnBretzel = function(){
  var self = this;

  if (Math.random()>0.995){
    var randomBX = Math.random() * self.width * 0.8;
    self.bretzel.push (new Bretzel(self.canvasElement, randomBX, 0));
  }
}

Game.prototype._checkAllCollision = function (){
  var self = this;
  //comprobar colisiones y sumar volumen a score
  // si colision: self.player.volJarra += self.bier.volumenBier;
  self.bier.forEach(function(item, idx){
    if (self.player.checkCollision(item)){
        self.bier.splice(idx, 1);
        self.score += item.volumenBier;
    }
  });

  self.water.forEach (function(item, idx){
    if (self.player.checkCollision(item)){
        self.water.splice(idx, 1);
        self.counter -= 10;
        
    }
  });

  self.bretzel.forEach (function(item, idx){
    if (self.player.checkCollision(item)){
        self.bretzel.splice(idx, 1);
        self.counter += 10;
        
    }
  });
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

