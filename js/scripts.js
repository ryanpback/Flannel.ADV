// ================= Characters ======================
function Character(name, maxHealth, health, strength, inventory) {
	this.name = name;
  this.maxHealth = maxHealth;
	this.health = health;
  this.strength = strength;
  this.inventory = [];
}
var protag = new Character("Kaeric", 30, 30, 6);
var enemies = [];




// character.inventory["sword"] = 5;
var goblin = new Character("Goblin", 15, 15, 4);
enemies.push(goblin);

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
	return ((Math.round(Math.random() * 5) + this.strength);
}
	else if (this.inventory[0] === "sword") {
		return ((Math.round(Math.random() * 5) + this.strength) + this.inventory[0].value) -5;
	}
}


Character.prototype.enemyAttack = function() {
	if (this.inventory[0].name === "")
	return ((Math.round(Math.random() * 8) + this.strength);
}
	else if (this.inventory[0].name === "sword") {
		return ((Math.round(Math.random() * 8) + this.strength) + this.inventory[0].value) -8;
	}
}

// Make prototype
Character.prototype.defense = function() {
	if (this.inventory[1].name === ""){
		return 0;
	}
	else if (this.inventory[1].name === "shield") {
		return this.inventory[1].value;
	}
}

// Make prototype
Character.prototype.fight = function(enemy) {
	enemy.health = attack(this) - defense(enemy);
	if(enemy.health < 1) {
		index++;
    return "win";
	}
	this.health = enemyAttack(enemy) - defense(this);
	if(this.health < 1) {
		index++;
    return "die";
	}
	$("#prompt").show();
}

// ================= Front End ======================
$(function() {
	var index = 0;
	$('#fightButton').click(function(){
		fight(protag, enemies[index]);
		$('#prompt').hide();
	})

	$('#runButton').click(function(){
		////Do whatever
	})

	var protag = new Character("Kaeric", 30, 30, 6);

	$('#enemyButton').click(function(){
		var damage = fight(goblin, protag);
		$('.protagHealth').width($('.protagHealth').width() - loseHealth(damage, protag)*100);
	})
});
