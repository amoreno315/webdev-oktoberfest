function Bier(canvas, x, y){
  var self = this;
  
  self.x = x;
  seff.y = y;
  self.size = Math.floor(Math.random() * 10) + 1;
  self.velocidad = 3;
  self.ctx = canvas.getContext('2d');
}

Bier.prototype.update = function () {
  var self = this;

}

Bier.prototype.render = function(){
  var self = this;

}