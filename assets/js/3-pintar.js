function changebackgroundcolor() {
  document.querySelector("#ele1").addEventListener("click", function (pintar) {
    if (pintar.target.style.backgroundColor == "green") {
      pintar.target.style.backgroundColor = "yellow";
    } else if (pintar.target.style.backgroundColor == "yellow") {
      pintar.target.style.backgroundColor = "green";
    } else {
      pintar.target.style.backgroundColor = "green";
    }
  });
}

changebackgroundcolor();
