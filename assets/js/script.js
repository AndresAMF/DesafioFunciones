const ele = document.querySelector("#ele1");
ele.addEventListener("click", () => pintar(ele));

pintar = function(ele, color = "yellow") {
  ele.style.backgroundColor = color;
}

pintar(ele, "green");
