let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let game;

//prepara el boton de reiniciar juego
prepareRestart();

function prepareRestart() {
  document
    .getElementById("restart-button")
    .addEventListener("click", function () {
      game.startAgain();
      if (document.getElementById("winnerText").innerHTML != "") {
        document.getElementById("winnerText").innerHTML = "";
      }
    });
}

//preparo los botones para elegir el juego
prepareGameChanges();

function prepareGameChanges() {
  //traigo los botones con la clase btnChange
  let btns = document.getElementsByClassName("btnChange");
  //recorro el arreglo de botones
  for (const btn of btns) {
    //a cada boton le agrego el evento que cargara las opciones para fichas
    btn.addEventListener("click", function () {
      loadChipsOptions(btn.dataset.number);
    });
  }
}

function loadChipsOptions(number) {
  //traigo los botones con la clase btnChange
  let btns = document.getElementsByClassName("btnChange");
  //recorro el arreglo para desabilitar y esconder las opciones
  for (const btn of btns) {
    btn.disabled = true;
    btn.style.display = "none";
  }
  //traigo los botones con la clase btnOption
  let options = document.getElementsByClassName("btnOption");
  //recorro el arreglo de botones
  for (const option of options) {
    //activo cada boton
    option.disabled = false;
    //muestro el boton
    option.style.display = "block";
    //agrego un evento al boton
    option.addEventListener("click", function () {
      loadGame(number, option.dataset.number);
    });
  }
}

function loadGame(number, opt) {
  //traigo los botones con la clase btnOption
  let options = document.getElementsByClassName("btnOption");
  //recorro el arreglo para desabilitar y esconder las opciones
  for (const option of options) {
    option.disabled = true;
    option.style.display = "none";
  }
  if (opt == 1) {
    //creo una instancia del juego
    game = new Game();
    //establesco el estilo de las fichas
    game.alienChipImg = document.getElementById("alienChipImg");
    game.astronautChipImg = document.getElementById("astronautChipImg");
    //le establesco la cantidad
    game.changeConnect4To(number);
  } else if (opt == 2) {
    //creo una instancia del juego
    game = new Game();
    //establesco el estilo de las fichas
    game.alienChipImg = document.getElementById("alienChipImg2");
    game.astronautChipImg = document.getElementById("astronautChipImg2");
    //le establesco la cantidad
    game.changeConnect4To(number);
  } else if (opt == 3) {
    //creo una instancia del juego
    game = new Game();
    //establesco el estilo de las fichas
    game.alienChipImg = document.getElementById("alienChipImg3");
    game.astronautChipImg = document.getElementById("astronautChipImg3");
    //le establesco la cantidad
    game.changeConnect4To(number);
  }
}
