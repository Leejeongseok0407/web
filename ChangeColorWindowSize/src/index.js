// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");

function ChangeColor() {
  const size = window.innerWidth;
  console.log(size);
  if (size > 900) {
    console.log("big");
    body.style.background = "yellow";
  } else if (size < 700) {
    console.log("small");
    body.style.background = "blue";
  } else {
    console.log("nomal");
    body.style.background = "purple";
  }
}

window.addEventListener("resize", ChangeColor);
