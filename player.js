function Player(canvas){
  var self = this;

  self.x = (self.ctx.canvas.weith) / 2 - self.size;
  self.y = self.ctx.canvas.heith- self.size;
  self.direction = 0; 
  self.movimiento;
  self.volJarra;
  self.ctx = canvas.getContext('2d');
  
}
Player.prototype.update = function (){
  var self = this;

}

Player. prototype.render = function (){
  var self = this;
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