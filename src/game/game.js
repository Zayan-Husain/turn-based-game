const $ = q => document.querySelector(q);
const $a = q => document.querySelectorAll(q);
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
function randomColor() {
  var r = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
function rect(x, y, width, height, parent = document.body, strokeCol = "rgb(0, 0, 0)", strokeWidth = 3, strokeStyle = "solid", fill = "rgb(255, 255, 255)", __class = false) {
  var r = document.createElement("div")
  r.style.width = width + "px";
  r.style.height = height + "px";
  r.style.position = "absolute";
  r.style.left = x + "px";
  r.style.top = y + "px";
  r.style.borderColor = strokeCol;
  r.style.borderWidth = strokeWidth + "px";
  r.style.borderStyle = strokeStyle;
  r.style.backgroundColor = fill;
  parent.appendChild(r);
  if (!__class) {
    return;
  }
  r.classList.add(__class);
  if (__class === "game_player") {
    // setTimeout(() => {
    //   requestAnimationFrame(animate)
    // }, 1)
  }
}
var screen = {
  w: window.innerWidth,
  h: window.innerHeight,
}
window.onresize = () => {
  screen = {
    w: window.innerWidth,
    h: window.innerHeight,
  }
}
var player3 = new game_player(200, 200);
player3.draw()
// function animate() {
//   $(".game_player_parent").removeChild($(".game_player"));
//   requestAnimationFrame(animate);
//   // player3.update();
//   // player3.draw();
// }