function Player(canvas){
  var self = this;

  self.ctx = canvas.getContext('2d');
  self.size = 50;
  self.x = (self.ctx.canvas.width) / 2 - (self.size)/2;
  self.y = self.ctx.canvas.height - self.size;
  //self.color = blue;
  self.direction = 0; 
  self.movimiento = 0; // -1 se mueve a la izquiera, 1 se mueve a la derecha
  self.volJarra;
}
Player.prototype.update = function (){
  var self = this;
  self.x = self.x + self.movimiento; 
  self.ctx.fillRect(self.x + self.movimiento, self.y, self.size, self.size+10);

}
Player.prototype.movLeft = function (){
  var self = this;

}
Player.prototype.movRight = function (){
  var self = this; 
}

Player.prototype.render = function (){
  var self = this;
  self.ctx.fillRect(self.x, self.y, self.size, self.size+10);
}

Player.prototype.fullJarra = function (){
  var self = this;
}

Player.prototype.checkCollision = function (){
  var self = this;
}

Player.prototype._checkLimitis = function (){
  var self = this;
}