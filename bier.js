

function Bier(canvas, x, y){
  var self = this;
  
  var bierColors = ['#A3601D',
  '#E58A12',
  '#E5A614'];

  self.x = x;
  self.y = y;
  self.size = Math.floor(Math.random() * 40) +15;
  self.velocidad = 3;
  //self.volumenBier = Math.floor(Math.random()*5)+1;
  self.volumenBier = Math.floor(self.size/3);
  self.color = bierColors[Math.floor(Math.random() * bierColors.length)];
  self.ctx = canvas.getContext('2d');
  self.img = document.createElement('img');
  self.img.src ='./images/vaso-cerveza.png';

}

Bier.prototype.update = function () {
  var self = this;
  self.y += self.velocidad;
  self.x = self.x;
}


Bier.prototype.render = function () {
  var self = this;

  

  // self.ctx.fillStyle = self.color;
  // self.ctx.fillRect(self.x, self.y, self.size, self.size);
  self.ctx.drawImage(self.img, self.x, self.y, self.size, self.size);
  
}

Bier.prototype.onTheFloor = function() {
  var self = this;
  //console.log ((self.y + self.size) > self.ctx.height);
  return ((self.y + self.size) > self.ctx.canvas.height);
}

