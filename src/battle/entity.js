class entity {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.w = 60;
    this.h = 60;
    this.color = randomColor();
  }
  draw() {
    Rect(this.x, this.y, this.w, this.h, qs("." + this.type), "black", 1, "none", this.color);
  }
}