class player extends entity {
  constructor() {
    super();
    this.type = "player";
    this.x = 280;
    this.y = 438;
    this.hp = 1.489e3;
    this.max_hp = 1.489e3;
    this.healthBar = qs(".phealth");
    this.mp = 190;
    this.turn = true;
    this.stats = {
      weak: "elec",
      resist: null,
      null: null,
      drain: null,
      repel: "phys",
    }
    this.moves = null;
  }

  update() {
    if (this.turn) {
      qs(".attack_table").classList.remove("hide");
    } else {
      qs(".attack_table").classList.add("hide");
    }
  }

  loseHp(dmg) {
    this.hp -= dmg
    this.stat_limits();
    setPhealth(this);
    this.loseCondition();
  }
  stat_limits() {
    if (this.hp <= 0) {
      this.hp = 0;
    }
    if (this.hp > this.max_hp) {
      this.hp = this.max_hp;
    }
    if (this.mp <= 0) {
      this.mp = 0;
    }
    if (this.mp > this.max_mp) {
      this.mp = this.max_mp;
    }
  }
  addHp(hp, move = true) {
    if (move && hp === 1) {
      var r = random(20, 30);
      if (this.max_hp - this.hp < r) {
        this.hp = this.max_hp;
        setPhealth(this);
        return;
      } else {
        this.hp += r;
      }
    } else if (move && hp === 2) {
      var r = random(170, 210);
      if (this.max_hp - this.hp < r) {
        this.hp = this.max_hp;
        setPhealth(this);
        return;
      } else {
        this.hp += r;
      }
    } else if (move && hp === 3) {
      this.hp = this.max_hp;
    } else if (!move) {
      this.hp += hp;
    }
    this.stat_limits();
    setPhealth(this);
  }
  loseCondition() {
    if (this.hp === 0) {
      enemyWin();
    }
  }
}