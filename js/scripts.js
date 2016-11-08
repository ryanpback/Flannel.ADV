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
var fixiebike = new Item("Fixie-bike", 5);
var nitrocoldbrew = new Item("Nitro coldbrew", 30);
var fiftyShades = new Item("Fifty Shades of Grey Book", 5)
var homelessdude = new Character("Homeless Dude", 20, 20, 4);
var vegangirl = new Character("Wannabe Vegan Girl", 25, 25, 6);
var aholebouncer = new Character("Asshole Bouncer", 60, 60, 7);
var hangman = ["J", "A", "Z", "Z"];

////////////Populate enemies and thier inventory/////////////
enemies.push(homelessdude);
enemies.push(vegangirl);
enemies.push(aholebouncer);
homelessdude.inventory.push(nonItem, nonItem, nonItem);
vegangirl.inventory.push(sword, nonItem, nonItem);
aholebouncer.inventory.push(sword, fiftyShades, nonItem);

/////////Populate inventory for character///////////
///////Remove addBlanks after ui/back-end merge///////////
addBlanks = function(character) {
	character.inventory.push(nonItem);
	character.inventory.push(nonItem);
	character.inventory.push(nonItem);
}
//make prototype
addItem = function(character, item) {
	if (item === "sword") {
		charcter.inventory.push(sword);
	}
	else if (item === "Fixie-bike") {
		charcter.inventory.push(fixiebike);
	}
	else if (item === "Nitro coldbrew") {
		charcter.inventory.push(nitrocoldbrew);
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
	else if (this.inventory[1].itemName === "Fixie-bike") {
		return this.inventory[1].itemStrength;
	}
	else if (this.inventory[1].itemName === "Fifty Shades of Grey Book") {
		return this.inventory[1].itemStrength;
	}
}

Character.prototype.fight = function(enemy) {
	enemy.health -= this.attack() + enemy.defense();
	console.log("Enemy health: " + enemy.health);
	if(enemy.health < 1) {
		this.health = this.maxHealth;
   return "win";
	}
	this.health -= enemy.enemyAttack() + this.defense();
	console.log("Protag health: " + this.health);
	if(this.health < 1) {
    return "die";
	}
}

///==================Puzzle Functions===============

guessLetter	= function(letters) {
	for(var index = 0; index < hangman.length; index++) {
 		if(letters === hangman[index]) {
	 		return index;
 		}
	}
		return "Incorrect"
};

// var head = document.getElementById("#hangman-images#head");
// head.style.left = x + "4360px";
// head.style.top = y + "43500px";
//
// var body = document.getElementById("body");
// body.style.left = x + "60px";
// body.style.top = y + "300px";
//
// var leftLeg = document.getElementById("leftLeg");
// leftLeg.style.left = x + "60px";
// leftLeg.style.top = y + "300px";
//
// var rightLeg = document.getElementById("rightLeg");
// rightLeg.style.left = x + "60px";
// rightLeg.style.top = y + "300px";
//
// var leftArm = document.getElementById("leftArm");
// leftArm.style.left = x + "60px";
// leftArm.style.top = y + "300px";
//
// var rightArm = document.getElementById("rightArm");
// rightArm.style.left = x + "60px";
// rightArm.style.top = y + "300px";



// ================= Front End ======================
$(function() {
	var protag = {};
	var index = 0;
	$("form#userName").submit(function(event) {
		event.preventDefault();
		var playerName = $("input#playerName").val();
		protag = new Character(playerName, 30, 30, 6);
		addBlanks(protag);
		console.log(protag);
	});

	$("form#letterPuzzle").submit(function(event) {
		event.preventDefault();
		var letterGuess = $("input#playerGuess").val().toUpperCase();

		var guessResult = guessLetter(letterGuess);
		for (var idx = 0; idx < 4; idx++) {
			if (guessResult === idx) {
				if(guessResult === 2) {
					$(".correct-answers span3").text(letterGuess);
				}
				$(".correct-answers span" + idx).text(letterGuess);
				$("input#playerGuess").val("");
			}
		}
		if (guessResult === "Incorrect") {
			$("#incorrect-answers span" + idx).append(letterGuess);
		}
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
