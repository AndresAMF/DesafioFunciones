let color = "";

document.addEventListener("keydown", function (event) {
  if (event.key == "a") {
    color = "gray";
  } else if (event.key == "s") {
    color = "black";
  } else if (event.key == "d") {
    color = "pink";
  }
});

function keydownColor() {
  const nodeList = document.querySelectorAll("#div1, #div2, #div3, #div4");

  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener("click", function (background) {
      background.target.style.backgroundColor = color;
    });
  }
}

keydownColor();
