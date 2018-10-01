function Player(canvas){
  var self = this;

  self.ctx = canvas.getContext('2d');
  self.size = 100;
  self.x = (self.ctx.canvas.width) / 2 - (self.size)/2;
  self.y = self.ctx.canvas.height - self.size;
  //self.color = blue;
  self.direction = 0; 
  self.movimiento = 0; // -1 se mueve a la izquiera, 1 se mueve a la derecha
  self.volJarra;
  self.img = document.createElement('img');
  self.img.src ='./images/jugador150.png';

  
  
}
Player.prototype.update = function (){
  var self = this;
  
  self.x = self.x + self.movimiento; 
  
  //self.ctx.fillRect(self.x + self.movimiento, self.y, self.size, self.size+10);
  

}
Player.prototype.moveLeft = function (){
  var self = this;
  if (self.x + self.movimiento <= 0){
    
    self.movimiento = self.x *-1;
    return true;
  }
  self.movimiento = -25;

}
Player.prototype.moveRight = function (){
  var self = this; 
  if ((self.x + self.size + self.movimiento + 25) > self.ctx.canvas.width){
    self.movimiento =  self.ctx.canvas.width - (self.x + self.size);
    return true;
  }
  self.movimiento = 25;
}

Player.prototype.render = function (){
  var self = this;
  //self.ctx.fillStyle = '#45362F';
  //self.ctx.drawImage(self.img,0,0,100,86,self.x, self.y,100,100);
  //self.ctx.fillRect(self.x, self.y, self.size, self.size+10);
  self.ctx.drawImage(self.img, self.x, self.y, self.size, self.size);
}

Player.prototype.fullJarra = function (){
  var self = this;
}

Player.prototype.checkCollision = function (object){
  var self = this;
  console.log(object.y)
  var collTop = self.y < object.y + object.size;
  var collLeft = object.x > self.x;
  var collRight = object.x < self.x + self.size;
  
  if (collTop && collLeft && collRight){
    //&& ((self.x + self.size)>object.x)
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