class game_entity {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.w = 60;
    this.h = 60;
    this.color = randomColor();
    this.class;
  }
  draw() {
    rect(this.x, this.y, this.w, this.h, this.parent, "black", 1, "none", this.color, this.class);
  }
}