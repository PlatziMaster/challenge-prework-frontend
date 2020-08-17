function accion() {
  const buttonPlay = document.querySelector("#button-circle2");
  buttonPlay.style.display = "inherit";

  var newLife = Math.ceil(Math.random() * 101) - 1;
  const lifePorcent = document.querySelector("#porcent2");
  const life2 = document.querySelectorAll("#life2");

  var index = 0,
    length = life2.length;
  for (index; index < length; index++) {
    lifePorcent.innerHTML = newLife + "%";
    life2[index].style.width = newLife + "px";
  }
  if (newLife == 0) {
    drawGif("Player 1");
  }
}

function accion2() {
  var newLife = Math.ceil(Math.random() * 101) - 1;
  const lifePorcent = document.querySelector("#porcent");
  const life2 = document.querySelectorAll("#life");

  var index = 0,
    length = life2.length;
  for (index; index < length; index++) {
    lifePorcent.innerHTML = newLife + "%";
    life2[index].style.width = newLife + "px";
  }
  if (newLife == 0) {
    drawGif("Player 2");
  }
}

function drawGif(winner) {
  const winnerLabel = document.querySelector("p");
  winnerLabel.innerHTML = "El ganador es " + winner;
  var xhr = $.get(
    "https://api.giphy.com/v1/gifs/random?api_key=lmcaocIixcCj7XOfEkijjvXs1b1tuMqe&tag=cartoon&rating=g"
  );
  xhr
    .done(function (data) {
      console.log("success got data", data);
      return data;
    })
    .done(function (json) {
      console.log(json);
      var imgGif = json.data.images.fixed_height.url;
      const imagenModal = document.getElementById("imgModal");
      imagenModal.src = imgGif;
    });

  $("#myModal").modal("show");
}
