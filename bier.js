

function Bier(canvas, x, y){
  var self = this;
  
  var bierColors = ['#A3601D',
  '#E58A12',
  '#E5A614'];

  self.x = x;
  self.y = y;
  self.size = Math.floor(Math.random() * 10) + 1;
  self.velocidad = 3;
  self.volumenBier = Math.floor(Math.random()*15)+1;
  self.color = bierColors[Math.floor(Math.random() * bierColors.length)];
  self.ctx = canvas.getContext('2d');
}

Bier.prototype.update = function () {
  var self = this;
  self.y += self.velocidad;
  self.x = self.x;
}


Bier.prototype.render = function () {
  var self = this;

  

  self.ctx.fillStyle = self.color;
  self.ctx.fillRect(self.x, self.y, self.size, self.size);

  
}

