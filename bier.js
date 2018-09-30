//Dont do global variables
var globalColors = [
  '#A3601D',
  '#E58A12',
  '#E5A614'
]

function Bier(canvas, x, y){
  var self = this;
  
  self.x = x;
  self.y = 0;
  self.size = Math.floor(Math.random() * 10) + 1;
  self.velocidad = 3;
  self.volumenBier = Math.floor(Math.random()*15)+1;
  self.ctx = canvas.getContext('2d');
}

Bier.prototype.update = function () {
  var self = this;
  self.y += self.velocidad;
  self.x = self.x;
}

//Don't do this
var currentIdx = 0;
var offsetIdx = 1;
Bier.prototype.render = function () {
  var self = this;

  if (currentIdx > globalColors.length - 1 || currentIdx === 0) {
    offsetIdx *= -1;
  }

  self.ctx.fillStyle = globalColors[currentIdx];
  self.ctx.fillRect(self.x, self.y, self.size, self.size);

  currentIdx += offsetIdx;
}

