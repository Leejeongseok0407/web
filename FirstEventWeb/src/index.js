// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const text = document.querySelector("h2");

const superEventHandler = {
  MouseOut: function () {
    text.innerHTML = "The mouse is gone!";
    console.log("MouseOut");
    text.style.color = colors[0];
  },
  MouseIn: function () {
    text.innerHTML = "The mouse in here!";
    console.log("MouseIn");
    text.style.color = colors[1];
  },
  Resize: function () {
    text.innerHTML = "You just resized!";
    console.log("REsize");
    text.style.color = colors[2];
  },
  MouseRightClick: function () {
    text.innerHTML = "That was right click!";
    console.log("MouseRightClick");
    text.style.color = colors[3];
  }
};

text.addEventListener("mouseover", superEventHandler.MouseIn);
text.addEventListener("mouseout", superEventHandler.MouseOut);
window.addEventListener("resize", superEventHandler.Resize);
window.addEventListener("contextmenu", superEventHandler.MouseRightClick);
