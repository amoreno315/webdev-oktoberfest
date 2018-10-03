function Bretzel(canvas, x, y){
  var self = this; 

  
  self.x = x; 
  self.y = y;
  self.size = Math.floor(Math.random()*30)+20;
  self.velocidad = 10;
  self.color = 'red';
  self.ctx = canvas.getContext('2d');
  self.img = document.createElement('img');
  self.img.src ='./images/bretzel.png';


}

Bretzel.prototype.update = function (){
  var self = this; 
  self.y += self.velocidad;
  self.x = self.x;

}

Bretzel.prototype.render = function (){
  var self = this; 

  // self.ctx.fillStyle = self.color;
  // self.ctx.fillRect(self.x, self.y, self.size, self.size);
  self.ctx.drawImage(self.img, self.x, self.y, self.size, self.size);
}

Bretzel.prototype.bretzelOnTheFloor = function (){
  var self = this; 
  return ((self.y + self.size) > self.ctx.canvas.height);
}