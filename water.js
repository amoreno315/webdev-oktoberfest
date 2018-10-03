function Water(canvas, x, y){
  var self = this; 

  
  self.x = x; 
  self.y = y;
  self.size = Math.floor(Math.random()*15)+10;
  self.velocidad = 8;
  self.color = 'red';
  self.ctx = canvas.getContext('2d');
  self.img = document.createElement('img');
  self.img.src ='./images/gota-agua.png';


}

Water.prototype.update = function (){
  var self = this; 
  self.y += self.velocidad;
  self.x = self.x;

}

Water.prototype.render = function (){
  var self = this; 

  // self.ctx.fillStyle = self.color;
  // self.ctx.fillRect(self.x, self.y, self.size, self.size);
  self.ctx.drawImage(self.img, self.x, self.y, self.size, self.size);
}

Water.prototype.waterOnTheFloor = function (){
  var self = this; 
  return ((self.y + self.size) > self.ctx.canvas.height);
}
// Water.prototype.checkCollision = function (object){
//   var self = this;
  
//   if (self.y === object.y + object.size){
//     //&& ((self.x + self.size)>object.x)
//     return true; 

//   }
//     return false;
// }