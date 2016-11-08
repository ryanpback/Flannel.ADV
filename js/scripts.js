// ================= Constructors ======================
function Character(charName, maxHealth, health, strength) {
	this.charName = charName;
  this.maxHealth = maxHealth;
	this.health = health;
  this.strength = strength;
  this.inventory = [];
}

function Item(itemName, itemStrength) {
	this.itemName = itemName;
	this.itemStrength = itemStrength;
}

///////////Variables/////////////
var enemies = [];
var nonItem = new Item("", 0);
var sword = new Item("sword", 5);
var buckler = new Item("buckler", 5);
var potion = new Item("potion", 30);
var goblin = new Character("Goblin", 15, 15, 4);
var monster = new Character("Monster", 20, 20, 6);
var corgi = new Character("Corgi", 25, 25, 7);

////////////Populate enemies and thier inventory/////////////
enemies.push(goblin);
enemies.push(monster);
enemies.push(corgi);
goblin.inventory.push(nonItem, nonItem, nonItem);
monster.inventory.push(sword, nonItem, nonItem);
corgi.inventory.push(sword, buckler, nonItem);

/////////Populate inventory for character///////////
///////Remove addBlanks after ui/back-end merge///////////
addBlanks = function(character) {
	character.inventory.push(nonItem);
	character.inventory.push(nonItem);
	character.inventory.push(nonItem);
}

addItem = function(character, item) {
	if (item === "sword") {
		charcter.inventory.push(sword);
	}
	else if (item === "buckler") {
		charcter.inventory.push(buckler);
	}
	else if (item === "potion") {
		charcter.inventory.push(potion);
	}
	else if (item === "nothing") {
		charcter.inventory.push("");
	}
}

// ================= Fight Prototypes ======================

Character.prototype.attack = function() {
	if (this.inventory[0].itemName === "") {
		return (Math.round(Math.random() * 5) + this.strength);
	}
	else if (this.inventory[0].itemName === "sword") {
		return ((Math.round(Math.random() * 5) + this.strength) + this.inventory[0].itemStrength) -5;
	}
}

Character.prototype.enemyAttack = function() {
	if (this.inventory[0].itemName === "") {
		return ((Math.round(Math.random() * 8) + this.strength));
	}
	else if (this.inventory[0].itemName === "sword") {
		return ((Math.round(Math.random() * 8) + this.strength) + this.inventory[0].itemStrength) -8;
	}
}

Character.prototype.defense = function() {
	if (this.inventory[1].itemName === ""){
		return 0;
	}
	else if (this.inventory[1].itemName === "buckler") {
		return this.inventory[1].itemStrength;
	}
}

Character.prototype.fight = function(enemy) {
	enemy.health -= this.attack() + enemy.defense();
	console.log("Enemy health: " + enemy.health);
	if(enemy.health < 1) {
		this.health = 15;
   return "win";
	}
	this.health -= enemy.enemyAttack() + this.defense();
	console.log("Protag health: " + this.health);
	if(this.health < 1) {
    return "die";
	}
}

// ================= Front End ======================
$(function() {
	var protag = {};
	var index = 0;
	$("form").submit(function(event) {
		event.preventDefault();
		var playerName = $("input#playerName").val();
		protag = new Character(playerName, 30, 30, 6);
		addBlanks(protag);
		console.log(protag);
	});

	//
	$('#fightButton').click(function(){
		console.log(enemies[index]);
		var result = protag.fight(enemies[index]);
		if (result === "win") {
			index++;
			console.log("player wins");
		}
		else if (result === "die") {
			console.log("you lose");
		}
	});
}); //End jQuery function
// var protag = new Character("Kaeric", 30, 30, 6);
