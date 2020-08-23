# 🎮 Challenge Frontend 01

Platzi Game

## 🎮 Contenido

1. [Descripción](#1-descripción)2. [Mockups](#2-mockups)
3. [Requerimientos](#3-requerimientos)
4. [Tecnologías](#4-tecnologías)
5. [Recursos](#5-recursos)
6. [Pasos a seguir](#6-pasos-a-seguir)
7. [Licencia](#7-licencia)

## 1. Descripción

Platzi Game es un juego en el que compiten 2 personajes. Cada personaje comienza el juego con una vida del `100%` pero la irá perdiendo cada que su oponente presione el botón `Play`, ya que este botón resta la vida del oponente de forma aleatoria. Una vez la vida de uno de los jugadores llega a `0%` se abrirá un modal que mostrará un gif, el nombre del ganador y un botón para volver a comenzar el juego.

**Consideraciones:**

* El botón `Play` inicialmente estará deshabilitado para el jugador 2 y habilitado para el jugador 1 (quién comenenzará a jugar siempre).
* Una vez el jugador 1 presione el botón `Play`, este se debe deshabilitar y habilitarse el botón de `Play` del jugador 2, quién ahora tiene turno de jugar. Una vez el jugador 2 termine de jugar, se debe deshabilitar su botón `Play`, habilitar el del jugardor 1 y así sucesivamente.

## 2. Mockups

* Enlace de Figma 👉🏼 [Aquí](https://www.figma.com/file/sZMkmbI0AcehmKu9p3vfM8/Challenge-Frontend-01-Platzi-Master?node-id=0%3A1)

### Pantalla principal

<kbd>
<img src="https://i.ibb.co/mXhHYVY/Screen-Shot-2020-08-10-at-12-02-03-AM.png" />
</kbd>

### Modal

<kbd>
<img src="https://i.ibb.co/T21Jrpt/Screen-Shot-2020-08-10-at-12-55-35-AM.png" />
</kbd>

## 3. Requerimientos

1. Hacer la maquetación de los dos diseños dados (pantalla principal y modal). En el footer de la pantalla principal donde dice @pepito_01, debe ir tu nombre de usuario en GitHub y los enlaces correspondientes a tus redes sociales (mínimo una).
2. Hacer los dos personajes de las cards con CSS. Puedes escoger 2 personajes de este [enlace](https://dribbble.com/shots/3189737-My-Game-Characters).
3. La barra de progreso debe mostrar visualmente (color rosado) el estado de la vida del personaje y también su equivalente en porcentaje.
4. El botón `Play` debe restar la vida del oponente de forma aleatoria y deshabilitarse en caso de no tener el turno para jugar. El botón deshabilitado debe cambiar de color para indicar visualmente quién es el que tiene el turno.
5. En cuanto la vida de uno de los dos jugadores llegue a `0%`, debe aparecer el modal.
6. El modal debe contener un Gif aleatorio (para esto se debe consumir la API de Giphy) con un texto que indique quién fue el ganador y un botón `Play again` que cerrará el modal y reseteará las vidas de los personajes para volver a jugar.

## 4. Tecnologías

1. HTML.
2. CSS (o cualquier preprocesador de tu elección).
3. JavaScript (o cualquier Framework o Librería de tu elección).

## 5. Recursos

1. Colores: #1A46E5 (azul), #43D8C9 (verde), #FFBD11 (amarillo), #FF89BB (rosado), #FFFFFF (blanco) y #000000 (negro).
2. [Fuente Poppins](https://fonts.google.com/specimen/Poppins?query=poppins)
3. [Íconos de redes sociales](https://icons8.com/icons)
4. [Imagen de los personajes](https://dribbble.com/shots/3189737-My-Game-Characters)
5. [Video guía para hacer los personajes con CSS](https://www.youtube.com/watch?v=hEZrW-fVnGs&feature=youtu.be)
5. [Guía de inicio rápido de API | Giphy](https://developers.giphy.com/docs/api#quick-start-guide)
6. [Curso de Fundamentos de JavaScript | Platzi](https://platzi.com/clases/fundamentos-javascript-2017/)
7. [Curso de Frontend Developer | Platzi](https://platzi.com/clases/frontend-developer/)

## 6. Pasos a seguir

1. Hacer un "Fork" de este proyecto.
2. Revolver el reto.
3. Crear un Pull Request hacia este repositorio.
/d/programacion/PlatziGame/PlatziGame.html
/d/programacion/PlatziGame/css  
Aun me falta aprender el Javascript ♥/d/programacion/PlatziGame/images


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Platzi Game </title>
    <link rel="icon" href="./images/Platzi.png">
    <link rel="stylesheet" href="../PlatziGame/css/body.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="bola1"></div>
    <div class="bola2"></div>
    <div class="bola3"></div>
    <div class="bola4"></div>
    <div class="Card1">
        <div class="Card1-vida1__rosado"></div>
        <div class="Card1-vida1__porcentaje">50%</div>
        <div class="card1-vida1"></div>
        <button class="Card1-boton">Play</button>
        <p>Torieto</p>
        <div class="Card1-pj1">
            <img class="Card1-pj1__img" src="../PlatziGame/images/platziPersonaje1.png" alt="Torieto">
        </div>
     </div>
    <div class="Card2">
        <div class="Card2-vida2__rosado"></div>
        <div class="Card2-vida2__porcentaje">20%</div>
        <div class="card2-vida2"></div>
        <button class="Card2-boton">Play</button>
        <p>VikingRock</p>
        <div class="Card2-pj2">
            <img class="Card2-pj2__img" src="../PlatziGame/images/PlatziPersonaje2.png" alt="VikingRock">
        </div>
     </div>
    <div class="game">
             <h1>PLATZI GAME</h1>
        </div>
       
          <footer class="footer">
                <div class="social"> 
                    <p>designed by <a href="https://github.com/IvanBarco"> @IvanBarco </a></p> 
                    <a href="https://github.com/IvanBarco" class="social-m github"></a>
                    <a href="https://www.instagram.com/ivan.barco_93/" class="social-m instagram"></a>
                </div>
          </footer>   
          
              
</body>
</html>

.social-m
{
    display:inline-flex;
    height: 50px;
    width: 50px;   
    background-size: 50px 50px;
    margin: -10px 5px 1px 30px;    
    border-radius: 10px;
    
}
.social-m.github
{ 
  background-image: url(../images/github.svg);
  background-color: black;
}
.social-m.instagram 
{
  background-image: url(../images/instagram.svg);
  background-color: black;
}
.game h1
{
  position: absolute;
  width: 400px;
  height: 80px;
  left: 536px;
  top: 105px;
  font-size: 60px;
  line-height: 90px;
}
.social
{
  display: inline-flex;  
  width: 400px;
  height: 100px;
}
body
{
  font-family: 'Poppins', sans-serif;
}
footer
{ 
    position: absolute;
    left: 1000px;
    top: 950px;
}
.bola1
{
  position: absolute;
  width: 195px;
  height: 195px;
  left: -48px;
  top: 26px;
  background: #1A46E5;
  border-radius: 100px;
}
.bola2
{
  position: absolute;
  width: 97px;
  height: 97px;
  left: 162px;
  top: 16px;
  background: #1A46E5;
  border-radius: 100px;
}
.bola3
{
  position: absolute;
  width: 335px;
  height: 335px;
  left: 1004px;
  top: -222px;
  background: #1A46E5;
  border-radius: 200px;
}
.bola4
{
  position: absolute;
  width: 49px;
  height: 49px;
  left: 1314px;
  top: 99px;
  background: #1A46E5;
  border-radius: 100px;
}
.Card1
{
  position: absolute;
  width: 467px;
  height: 582px;
  left: 182px;
  top: 269px;
  background: #43D8C9;
  border: 3px solid #000000;
  border-radius: 20px;
}
.Card2
{
  position: absolute;
  width: 467px;
  height: 582px;
  left: 791px;
  top: 269px;
  background: #FFBD11;
  border: 3px solid #000000;
  border-radius: 20px;
}
.Card1-pj1
{
  position: absolute;
  width: 370px;
  height: 231px;
  left: 45px;
  top: 300px;
  /* background-image: url("../PlatziGame/images/platziPersonaje1.png"); */
  background: #FFFFFF;
  border: 3px solid #000000;
  border-radius: 20px;
}
.Card1 p
{
    text-align: center;
    font-size: 35px;
    color: white;
}
.Card2 p
{
    text-align: center;
    font-size: 35px;
    color: white;
}
.Card2-pj2
{
  position: absolute;
  width: 370px;
  height: 231px;
  left: 45px;
  top: 300px;
  /* background-image: url("../PlatziGame/images/platziPersonaje2.png"); */
  background: #FFFFFF;
  border: 3px solid #000000;
  border-radius: 20px;
}
.Card1-boton
{
  position: absolute;
  width: 120px;
  height: 120px;
  left: 315px;
  top: 130px;
  font-size: 35px;
  background-color: #1A46E5;
  color: white;
  border: 3px solid #000000;
  border-radius: 100px;

}
.Card2-boton
{
  position: absolute;
  width: 120px;
  height: 120px;
  left: 315px;
  top: 130px;
  font-size: 35px;
  background-color: #1A46E5;
  color: white;
  border: 3px solid #000000;
  border-radius: 100px;
}
.Card1-pj1__img
{
    position: absolute;
    top: -140px;
    left: -160px;
}
.Card2-pj2__img
{
  position: absolute;
  top: -120px;
  left: -130px;
}
.card1-vida1
{
  position: absolute;
  width: 190px;
  height: 50px;
  left: 67px;
  top: 175px;
  background-color:#1A46E5;
  color: white;
  border-radius: 50px;
  border: 3px solid #000000;
  z-index: 3;
}
.card2-vida2
{
  position: absolute;
  width: 190px;
  height: 50px;
  left: 67px;
  top: 175px;
  background-color:#1A46E5;
  color: white;
  border-radius: 50px;
  border: 3px solid #000000;
  z-index: 1;
}
.Card2-vida2__porcentaje
{
  color: white;
  position: absolute;
  height: 5px;
  width: 3px;
  left: 150px;
  top:150px;
}
.Card2-vida2__rosado
{
  position: absolute;
  width: 50px;
  height: 50px;
  left: 210px;
  top: 178px;
  background-color:#FF89BB;
  z-index: 2;
  border-radius: 0px 30px 30px 0px;
}
.Card1-vida1__porcentaje
{
  color: white;
  position: absolute;
  height: 5px;
  width: 3px;
  left: 150px;
  top:150px;
}
.Card1-vida1__rosado
{
  position: absolute;
  width: 95px;
  height: 50px;
  left: 165px;
  top: 178px;
  background-color:#FF89BB;
  border-radius: 0px 30px 30px 0px;
  z-index: 4;
}

