// ================= Characters ======================
function Character(name, turn, maxHealth, health, strength, inventory) {
	this.name = name;
	this.turn = turn;
  this.maxHealth = maxHealth;
	this.health = health;
  this.strength = strength;
  this.inventory = [];
}


var potion = new Item(potion, 30);
var potion = new Item(blank)

this.inventory.push("", 0);

console.log(this.inventory);


// character.inventory["sword"] = 5;
var goblin = new Character("Goblin", 15, 15, 4);

// ================= Items ======================
function Weapon(damage) {
  this.damage = damage;
}

function Shield(defense) {
  this.defense = defense;
}

function Item(name, value) {
	this.name = name;
	this.value = value;
}

var sword = new Item(sword, 5);
var buckler = new Item(buckler, 5);
var potion = new Item(potion, 30);

protag.inventory.push(sword);
goblin.inventory.push(sword);
protag.inventory.push(buckler);

// ================= Fight Functions ======================

Character.prototype.attack = function() {
	if (this.inventory[0] === "")
	return ((Math.round(Math.random() * 5) + this.strength) + this.inventory[0].damage) -5;
}
else if (this. inventory[0] === 5) {

}

Character.prototype.enemyAttack = function() {
	return ((Math.round(Math.random() * 8) + this.strength) + this.inventory[0].damage) -8;
}

// Make prototype
Character.prototype.defense = function() {
	return this.inventory[1].defense;
}

// Make prototype
Character.prototype.fight = function(enemy) {
	enemy.health = attack(this) - defense(enemy);
	if(enemy.health < 1) {
    return "win";
	}
	this.health = enemyAttack(enemy) - defense(this);
	if(enemy.health < 1) {
    return "die";
	}
}


		// fight(goblin, this);
  	// var damage = attack(this) - defense(enemy);

//   else {
//   	var damage = attack(this);
//   }
// 	if(damage > 0) {
//   	enemy.health[1] = enemy.health[1] - damage;
//   }
// 	else if(damage <= 0) {
// 		damage = 0;
// 	}
// 	return damage;
// }

// Character.protoype.loseHealth = function(hp) {
// 	return (hp / character.health[0]);
// }


// Make prototype
Character.prototype.instance = function(enemy) {
	while(this.health[1] > 0 && enemy.health[1] > 0){
  	fight(this, enemy);
    if(enemy.health[1] < 1) {
      return "win";
    }
    fight(enemy, this);
    if(this.health[1] < 1) {
      return "die";
    }
    console.log(this.name + ": " + this.health[1]);
    console.log(enemy.name + ": " + enemy.health[1])
  }
}

// ================= Front End ======================
$(function() {
	$('#protagButton').click(function(){
		var damage = fight(protag, goblin);
		$('.enemyHealth').width($('.enemyHealth').width() - loseHealth(damage, goblin)*100);
	})

	var protag = new Character("Kaeric", 30, 30, 6);

	$('#enemyButton').click(function(){
		var damage = fight(goblin, protag);
		$('.protagHealth').width($('.protagHealth').width() - loseHealth(damage, protag)*100);
	})
});
