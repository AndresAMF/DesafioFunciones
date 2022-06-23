let color = "";

document.addEventListener("keydown", function (event) {

  if (event.key == "a") {
    color = "gray";
    alert("Seleccionaste Gris")
  } else if (event.key == "s") {
    color = "black";
    alert("Seleccionaste Negro")
  } else if (event.key == "d") {
    color = "pink";
    alert("Seleccionaste Rosado")
  }else{
    alert("No has seleccionado color, presiona A, S o D")
  }
});

keydownColor = function () {
  const list = document.querySelectorAll("#div1, #div2, #div3, #div4");

  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function (ele) {
      ele.target.style.backgroundColor = color;
    });
  }
}

keydownColor();

 