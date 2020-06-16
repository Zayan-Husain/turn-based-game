const key = {};
document.addEventListener("keydown", e => {
  key[e.key] = true;
  console.log(key);
});
document.addEventListener("keyup", e => {
  key[e.key] = false;
  console.log(key);
});
var keyDown;