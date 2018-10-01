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
Player.prototype.moveLeft = function (){
  var self = this;
  if (self.x + self.movimiento <= 0){
    
    self.movimiento = self.x *-1;
    return true;
  }
  self.movimiento = -20;

}
Player.prototype.moveRight = function (){
  var self = this; 
  if ((self.x + self.size + self.movimiento + 20) > self.ctx.canvas.width){
    self.movimiento =  self.ctx.canvas.width - (self.x + self.size);
    return true;
  }
  self.movimiento = 20;
}

Player.prototype.render = function (){
  var self = this;
  self.ctx.fillStyle = '#45362F';
  self.ctx.fillRect(self.x, self.y, self.size, self.size+10);
}

Player.prototype.fullJarra = function (){
  var self = this;
}

Player.prototype.checkCollision = function (object){
  var self = this;
  
  if (self.y === object.y + object.size){
    return true; 

  }
    return false;
}

// Player.prototype.collided = function() {
//   var self = this;
//   self.volJarra += 1; //añadir el volumenBier de Bier
// }
// Player.prototype._checkLimitis = function (){
//   var self = this;
//   //impedir avanzar más alla del limite 
//   if (self.x < 0 ){ // || ((self.x + self.size))> cxt.canvas.width
//     //self.movimiento = 0;
//     return true;

//   }
// }