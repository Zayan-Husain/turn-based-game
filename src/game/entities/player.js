class game_player extends game_entity {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 20;
    this.parent = $(".game_player_parent");
    this.class = "game_player"
  }
  update() {
    this.move();
  }
  move() {
    if (keyDown("w")) {
      this.x += 5;
    }
  }
}