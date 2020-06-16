document.addEventListener("contextmenu", e => e.preventDefault())
document.ondragstart = e => e.preventDefault();
const qs = q => document.querySelector(q);
const qsa = q => document.querySelectorAll(q);
if (location.hash === "#Mobile") {
  document.body.style.cursor = "auto";
} else if (location.hash !== "#Desktop" && location.hash !== "#Mobile") {
  var url1 = window.location.href;
  var url2 = url1.split("#")[0];
  var url3 = url2.split("?")[0];
  window.location.replace(url3 + "#Home");
}
qs("body").style.height = 653;
var mouseX, mouseY;
qs("html").addEventListener("mousemove", function custom_cursor(e) {
  var c = qs(".cursor");
  c.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
});
const ehealth = qs(".ehealth");
const phealth = qs(".phealth");
const setEhealth = e => { ehealth.style.width = ((e.hp / e.max_hp) * 100) + "%"; qs(".ehealthspan").innerHTML = "Health: " + e.hp + "/" + e.max_hp; }
const setPhealth = p => { phealth.style.width = ((p.hp / p.max_hp) * 100) + "%"; qs(".phealthspan").innerHTML = "Health: " + p.hp + "/" + p.max_hp; }
const setCol = (h, col) => h.style.backgroundColor = "rgb(" + col + ")";
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
function randomColor() {
  var r = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
function Rect(x, y, width, height, parent = document.body, strokeCol = "rgb(0, 0, 0)", strokeWidth = 3, strokeStyle = "solid", fill = "rgb(255, 255, 255)") {
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
var enemy2 = new enemy()
enemy2.draw();
setEhealth(enemy2)
var player2 = new player()
player2.draw();
setPhealth(player2)
if (((enemy2.hp / enemy2.max_hp) * 100) < 7) {
  setCol(enemy2.healthBar, "215, 0, 0")
} else if (((enemy2.hp / enemy2.max_hp) * 100) < 17) {
  setCol(enemy2.healthBar, "128, 0, 0")
} else if (((enemy2.hp / enemy2.max_hp) * 100) < 33) {
  setCol(enemy2.healthBar, "255, 102, 0")
}
player2.update()
const randomArray = a => Math.round(Math.random() * a.length) === 4 ? a[Math.round(Math.random() * a.length) - 1] : a[Math.round(Math.random() * a.length)];
const moves2 = {
  water: [
    null,
    {
      name: "Sleet",
      dmg: {
        weak: random(70, 90),
        resist: random(30, 40),
        null: 0,
        normal: random(50, 60),
      }
    },
    {
      name: "Raging Sea",
      dmg: {
        weak: random(140, 168),
        resist: random(50, 60),
        null: 0,
        normal: random(90, 130),
      }
    },
    {
      name: "Tsunami",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
    {
      name: "Hydro Blast",
      dmg: {
        weak: random(570, 600),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
  ],
  wind: [
    null,
    {
      name: "Garu",
      dmg: {
        weak: random(70, 90),
        resist: random(30, 40),
        null: 0,
        normal: random(50, 60),
      }
    },
    {
      name: "Garula",
      dmg: {
        weak: random(140, 168),
        resist: random(50, 60),
        null: 0,
        normal: random(90, 130),
      }
    },
    {
      name: "Garudyne",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
    {
      name: "Vacuum Wave",
      dmg: {
        weak: random(570, 600),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
  ],
  ice: [
    null,
    {
      name: "Bufu",
      dmg: {
        weak: random(70, 90),
        resist: random(30, 40),
        null: 0,
        normal: random(50, 60),
      }
    },
    {
      name: "Bufula",
      dmg: {
        weak: random(140, 168),
        resist: random(50, 60),
        null: 0,
        normal: random(90, 130),
      }
    },
    {
      name: "Bufudyne",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
    {
      name: "Diamond Dust",
      dmg: {
        weak: random(570, 600),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
  ],
  fire: [
    null,
    {
      name: "Agi",
      dmg: {
        weak: random(70, 90),
        resist: random(30, 40),
        null: 0,
        normal: random(50, 60),
      }
    },
    {
      name: "Agilao",
      dmg: {
        weak: random(140, 168),
        resist: random(50, 60),
        null: 0,
        normal: random(90, 130),
      }
    },
    {
      name: "Agidyne",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
    {
      name: "Inferno",
      dmg: {
        weak: random(570, 600),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
  ],
  psycho: [
    null,
    {
      name: "Psi",
      dmg: {
        weak: random(70, 90),
        resist: random(30, 40),
        null: 0,
        normal: random(50, 60),
      }
    },
    {
      name: "Psio",
      dmg: {
        weak: random(140, 168),
        resist: random(50, 60),
        null: 0,
        normal: random(90, 130),
      }
    },
    {
      name: "Psiodyne",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
    {
      name: "Psycho Blast",
      dmg: {
        weak: random(570, 600),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
  ],
  elec: [
    null,
    {
      name: "Zio",
      dmg: {
        weak: random(70, 90),
        resist: random(30, 40),
        null: 0,
        normal: random(50, 60),
      }
    },
    {
      name: "Zionga",
      dmg: {
        weak: random(140, 168),
        resist: random(50, 60),
        null: 0,
        normal: random(90, 130),
      }
    },
    {
      name: "Ziodyne",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
    {
      name: "Wild Thunder",
      dmg: {
        weak: random(570, 600),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
  ],
  nuclear: [
    null,
    {
      name: "Frei",
      dmg: {
        weak: random(70, 90),
        resist: random(30, 40),
        null: 0,
        normal: random(50, 60),
      }
    },
    {
      name: "Freila",
      dmg: {
        weak: random(140, 168),
        resist: random(50, 60),
        null: 0,
        normal: random(90, 130),
      }
    },
    {
      name: "Freidyne",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
    {
      name: "Cosmic Flare",
      dmg: {
        weak: random(570, 600),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
  ],
  bless: [
    null,
    {
      name: "Kouha",
      dmg: {
        weak: random(70, 90),
        resist: random(30, 40),
        null: 0,
        normal: random(50, 60),
      }
    },
    {
      name: "Kouga",
      dmg: {
        weak: random(140, 168),
        resist: random(50, 60),
        null: 0,
        normal: random(90, 130),
      }
    },
    {
      name: "Kougaon",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
    {
      name: "Divine Judgement",
      special: "half_hp",
      dmg: {
        weak: 0,
        resist: 0,
        null: 0,
        normal: 0,
      }
    },
  ],
  curse: [
    null,
    {
      name: "Eiha",
      dmg: {
        weak: random(70, 90),
        resist: random(30, 40),
        null: 0,
        normal: random(50, 60),
      }
    },
    {
      name: "Eiga",
      dmg: {
        weak: random(140, 168),
        resist: random(50, 60),
        null: 0,
        normal: random(90, 130),
      }
    },
    {
      name: "Eigaon",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
    {
      name: "Abyssal Wings↓",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
  ],
  heal: [
    null,
    {
      name: "Dia",
      special: "heal",
      heal: 1,
    },
    {
      name: "Diarama",
      special: "heal",
      heal: 2,
    },
    {
      name: "Diarahan",
      special: "heal",
      heal: 3,
    },
  ],
  phys: [
    null,
    {
      name: "Cleave",
      dmg: {
        weak: random(70, 90),
        resist: random(30, 40),
        null: 0,
        normal: random(50, 60),
      }
    },
    {
      name: "Giant Slice",
      dmg: {
        weak: random(140, 168),
        resist: random(50, 60),
        null: 0,
        normal: random(90, 130),
      }
    },
    {
      name: "Assault Dive",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
    {
      name: "Megaton Raid",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
    {
      name: "Brave Blade",
      dmg: {
        weak: random(270, 300),
        resist: random(190, 210),
        null: 0,
        normal: random(250, 260),
      }
    },
  ],
  gun: [
    null,
    {
      name: "Snap",
      dmg: {
        weak: random(140, 168),
        resist: random(50, 60),
        null: 0,
        normal: random(90, 130),
      }
    },
    {
      name: "Triple Down",
      special: "3x",
      dmg: {
        weak: random(70, 90),
        resist: random(30, 40),
        null: 0,
        normal: random(50, 60),
      }
    },
    {
      name: "One-shot Kill",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
    {
      name: "Riot Gun",
      dmg: {
        weak: random(170, 200),
        resist: random(490, 510),
        null: 0,
        normal: random(540, 570),
      }
    },
  ],
}
player2.moves = moves2;
var attackTable = qs(".attack_table");
var statText = qs(".stat");
eventHandlers();
function update() {
  for (let i = 0; i < attackTable.children[0].children.length; i++) {
    var c = attackTable.children[0].children[i];
    if (c) {
      var cc = c.children[0];
      if (cc.id !== "") {
        var type = cc.id.split("|")[0];
        var which = cc.id.split("|")[1];
        var html = moves2[type][which].name;
        cc.innerHTML = html;
      }
    }
  }
}
update();
function keyEvents(e) {
  if (player2.turn) {
    if (e.key == "ArrowDown") {
      e.preventDefault()
      var s = qs(".selected");
      var tr = s.parentNode;
      var sdp = tr.nextElementSibling;
      if (sdp == null) {
        s.classList.remove("selected");
        attackTable.children[0].children[1].children[0].classList.add("selected");
        return;
      }
      var sd = sdp.children[0];
      s.classList.remove("selected");
      sd.classList.add("selected");
    }
    if (e.key == "ArrowUp") {
      e.preventDefault()
      var s = qs(".selected");
      var tr = s.parentNode;
      if (tr.previousElementSibling.children[0].nodeName == "TH") {
        s.classList.remove("selected");
        attackTable.children[0].children[8].children[0].classList.add("selected");
        return;
      }
      var sdp = tr.previousElementSibling;
      if (sdp == null) {
        s.classList.remove("selected");
        attackTable.children[0].children[8].children[0].classList.add("selected");
        return;
      }
      var sd = sdp.children[0];
      s.classList.remove("selected");
      sd.classList.add("selected");
    }
    if (e.key == "Enter") {
      e.preventDefault();
      var selected = qs(".selected");
      var id = selected.id;
      if (id === "") return;
      var type = id.split("|")[0];
      var attack = player2.moves[type][id.split("|")[1]];
      var dmg = attack.dmg;
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
      if (dmg === undefined && attack.special === "heal") {
        player2.addHp(attack.heal);
        player2.turn = false;
        player2.update();
        enemy2.turn = true;
        enemy2.update();
        attack_bar(attack.name);
        document.onkeydown = null;
        return;
      }
      var normal = enemy2.stats.weak !== type
        && enemy2.stats.null !== type
        && enemy2.stats.resist !== type
        && enemy2.stats.drain !== type;
      //end normal
      const stat = (textClass, text) => {
        statText.classList.add(textClass);
        statText.classList.remove("stat");
        statText.innerHTML = text;
        setTimeout(() => {
          statText.classList.forEach(__class => {
            statText.classList.remove(__class + "");
          })
          statText.classList.add("stat");
          statText.innerHTML = "";
        }, 1000);
      }
      attack_bar(attack.name);
      if (enemy2.stats.weak === type) {
        stat("weak", "Weak!")
      } else if (enemy2.stats.null === type) {
        stat("null", "Null!");
      } else if (enemy2.stats.resist === type) {
        stat("resist", "Resist")
      } else if (enemy2.stats.drain === type) {
        stat("drain", "Drain!")
      } else if (enemy2.stats.repel === type) {
        stat("repel", "Repel!");
      }
      setTimeout(() => {
        if (enemy2.stats.weak === type) {
          enemy2.loseHp(dmg.weak)
          document.onkeydown = null;
        } else if (enemy2.stats.null === type) {
          enemy2.loseHp(dmg.null);
          document.onkeydown = null;
        } else if (enemy2.stats.resist === type) {
          enemy2.loseHp(dmg.resist);
          document.onkeydown = null;
        } else if (enemy2.stats.drain === type) {
          enemy2.addHp(dmg.normal, false)
          document.onkeydown = null;
        } else if (enemy2.stats.repel === type) {
          player2.loseHp(dmg.normal);
          document.onkeydown = null;
        } else if (normal) {
          enemy2.loseHp(dmg.normal);
          document.onkeydown = null;
        }
      }, 250)
      player2.turn = false;
      player2.update();
      enemy2.turn = true;
      enemy2.update();
    }
  }
}
function eventHandlers() {
  document.onkeydown = keyEvents;
}
function playerWin() {
  var win = qs(".playerWinScreen");
  if (win) {
    setTimeout(() => {
      win.classList.remove("hide");
      document.onkeydown = null;
    }, 2000)
  }
}
function enemyWin() {
  var win = qs(".enemyWinScreen");
  if (win) {
    setTimeout(() => {
      win.classList.remove("hide");
      document.onkeydown = null;
    }, 2000)
  }
}