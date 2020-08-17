# 🎮 Challenge Frontend 01

Platzi Game

## 🎮 Contenido

1. [Descripción](#1-descripción)
2. [Mockups](#2-mockups)
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
## 7. Licencia

challenge-frontend-01 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
