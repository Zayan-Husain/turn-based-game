class enemy extends entity {
  constructor() {
    super();
    this.type = "enemy";
    this.x = screen.w - 290;
    this.y = 160;
    this.hp = 1000;
    this.max_hp = 1e3;
    this.healthBar = qs(".ehealth");
    this.mp = 600;
    this.max_mp = 600;
    this.stats = {
      weak: "ice",
      repel: null,
      drain: null,
      null: "fire",
      resist: null,
    }
    this.turn = false;
    this.moves = [
      "water|4",
      "ice|4",
      "fire|4",
      "heal|2",
      "elec|4",
    ]
  }
  loseHp(dmg) {
    this.hp -= dmg
    this.stat_limits();
    setEhealth(this);
    this.loseCondition()
  }
  update() {
    if (this.turn === true) {
      setTimeout(() => {
        this.use_move();
      }, 3000)
    }
  }
  use_move() {
    var pweak = player2.stats.weak;
    if (this.hp < this.max_hp * 0.65) {
      for (let i = 0; i < this.moves.length; i++) {
        if (this.moves[i]) {
          var chance = Math.floor(Math.random() * 2);
          if (chance === 2) chance = Math.floor(Math.random() * 2);
          if (chance === 2) chance = 0;
          if (chance === 1) {
            // alert("1 chance");
            if (this.moves[i].split("|")[0] === "heal") {
              this.attack(this.moves[i]);
              break;
            }
          } else if (chance === 0) {
            // alert("0 chance");
            this.attack(randomArray(this.moves));
            break;
          }
        }
      }
    } else {
      this.attack(randomArray(this.moves));
      // this.attack("wind|4");
    }
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
  loseCondition() {
    if (this.hp === 0) {
      this.moves = [];
      playerWin();
      document.removeEventListener('keydown', keyEvents);
    }
  }
  attack(move) {
    if (move === false || move === undefined) {
      this.use_move();
      return;
    }
    if (this.hp > this.max_hp * 0.65 && move.split("|")[0] === "heal") {
      this.use_move();
      return;
    }
    const attack_bar = move2 => {
      var aB = qs(".attack_bar");
      aB.style.opacity = "1";
      aB.innerHTML = `${move2}`;
      setTimeout(() => {
        aB.style.transition = "opacity 650ms";
        aB.style.opacity = "0";
        setTimeout(() => {
          aB.style.transition = "none";
        }, 650)
      }, 600)
    };
    var type = move.split("|")[0];
    var attack = moves2[type][move.split("|")[1]];
    var dmg = attack.dmg;
    attack_bar(attack.name)
    if (dmg === undefined && attack.special === "heal") {
      enemy2.addHp(attack.heal);
      eventHandlers();
      setTimeout(() => {
        this.turn = false;
        this.update();
        player2.turn = true;
        player2.update();
        eventHandlers();
      }, 2000)
      return;
    }
    var normal = player2.stats.weak !== type
      && player2.stats.null !== type
      && player2.stats.resist !== type
      && player2.stats.drain !== type;
    //end normal
    var resist;
    if (Array.isArray(player2.stats.resist)) {
      for (let i = 0; i < player2.stats.resist.length; i++) {
        var resistance = player2.stats.resist[i]
        if (resistance === type) {
          resist = true;
        }
      }
    } else if (!Array.isArray(player2.stats.resist)) {
      if (player2.stats.resist === type) {
        resist = true;
      }
    }
    const stat = (textClass, text) => {
      var statText = qs(".pstat");
      statText.innerHTML = text;
      statText.classList.add(textClass);
      setTimeout(() => {
        statText.classList.forEach(__class => {
          if (__class !== "pstat") {
            statText.classList.remove(__class + "");
          }
        })
        statText.innerHTML = "";
      }, 1000);
    }
    function win() {
      if (player2.hp === 0) {
        console.log("hi")
        document.onkeydown = null;
        return;
      }
    }
    win();
    if (player2.stats.weak === type) {
      player2.loseHp(dmg.weak)
      stat("weak", "Weak!");
      win();
    } else if (player2.stats.null === type) {
      player2.loseHp(dmg.null);
      stat("null", "Null!");
      win();
    } else if (resist) {
      player2.loseHp(dmg.resist);
      stat("resist", "Resist");
      win();
    } else if (player2.stats.drain === type) {
      player2.addHp(dmg.normal, false)
      stat("drain", "Drain!");
      win();
    } else if (normal) {
      player2.loseHp(dmg.normal);
      win();
    }

    //after all above
    setTimeout(() => {
      this.turn = false;
      this.update();
      player2.turn = true;
      player2.update();
      eventHandlers()
    }, 2000)
  }
  addHp(hp, move = true) {
    if (move && hp === 1) {
      var r = random(20, 30);
      if (this.max_hp - this.hp < r) {
        this.hp = this.max_hp;
        setEhealth(this);
        return;
      } else {
        this.hp += r;
      }
    } else if (move && hp === 2) {
      var r = random(170, 210);
      if (this.max_hp - this.hp < r) {
        this.hp = this.max_hp;
        setEhealth(this);
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
    setEhealth(this);
  }
}