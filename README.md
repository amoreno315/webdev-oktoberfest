# Oktoberfest

## Description
Durante la Oktoberfest nuestro jugador tendrá que rellenar jarras de cerveza y servilas en la mesa. 
El juegador deberá coger una jarra e ir rellenandola con las gotas de cerveza que van cayendo desde la parte superior, cuando la jarra este llena, deberá dejar la jarra de nuevo en la mesa y coger otra vacia. 
La cerveza irá cayendo de la parte superior y cada gota podrá tener un volumen diferente. 
El juego dura 30 segundos y transcurridos estos segundos, mostrará que volumen de cerveza ha recogido el jugador. 
La duración el juego podrá cambiar dependiendo si el jugador ha recogido, además de cerveza, agua o bretzel. La primera restará 10 segundos y la segunda sumará este mismo tiempo a la duración de la partida. 



## MVP (DOM - CANVAS)
*CANVAS*
El MVP será: un jugador con una jarra que recogera la cerveza que va cayendo en linea recta, sin efecto ondas-zigzag. 
Transcurridos 30 segundos el juego finaliza y muestra el Score o volumen recogido de cerveza. 


## Backlog
Crear un volumen maximo de la jarra y cuando este ocurra que tenga, que tenga que coger otra jarra vacia.
Que la cerveza caiga dibujando una onda. 

### game.js
 - BarrilBier
  - x
  - y
  - volumenBarril
  - crear cerveza

- Cerveza
  - movimiento 
- imagenes
- dejar la jarra en la mesa cuando este llena 

## Data structure
Classes and methods definition.


## States y States Transitions
Definition of the different states and their transition (transition functions)
- main.js 
  - buildDom(html)
  - buildSplash()
  - destroySplash()
  - buildGame()
  - destroyGame()
  - buildGameOver()
  - destroyGameOver()

- Player 
  - x
  - y
  - direction
  - movimiento
  - volJarra
  - update()
  - render()
  - fullJarra()
  - checkCollision()

- Cerveza
  - x
  - y
  - velocidad
  - volumenGota (size)
  - update() 
  - render()
  

- Game
  - score = volumen recogido
  - time: 30 segundos
  - canvas-cxt
  - jugador
  - BarrilBier 
  - renderAll()
  - updateAll()
  - clearAll()
  - limpiarSuelo()
  - _init() html
  - _startLoop()
  - _destroy()
  - _gameOver()


- splashScreen
- gameScreen
- gameoverScreen
- winScreen


## Task
Task definition in order of priority
- crear archivos javascript
- Main - buildDom
- Main - buildSplash
- Main - addEventListener (Start)
- Main - destroySplash
- Game - buildDom
- Game - TimeOut start
- Jugador - crear
- Jugador - moviento
- Cerveza - crear
- Cerveza - moviento
- Jugador - update()
- Jugador - render()
- Cerveza - update()
- Cerveza - render()
- Jugador - checkCollision()

- Game - loop
- Game - Jugador y Cerveza position
- Game - clear
- Game - crear Cerveza
- Game - destruir CervezaOut
- Game - TimeOut test
- Game - GameOver
- Game - destroyGame
- Game - Score: volumenConseguido
- Game - addEventListener 
- Game - buildGameOver




## Links
https://github.com/amoreno315/webdev-oktoberfest

### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)