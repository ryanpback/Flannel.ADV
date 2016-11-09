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
var book = new Item("book", 5);
var fixiebike = new Item("Fixie-bike", 5);
var nitrocoldbrew = new Item("Nitro Coldbrew", 30);
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
vegangirl.inventory.push(book, nonItem, nonItem);
aholebouncer.inventory.push(book, fiftyShades, nonItem);


/////////Populate inventory for character///////////

Character.prototype.addItem = function(item) {
	if (item === "book") {
		this.inventory.push(book);
	}
	else if (item === "Fixie-bike") {
		this.inventory.push(fixiebike);
	}
	else if (item === "Nitro Coldbrew") {
		this.inventory.push(nitrocoldbrew);
	}
	else if (item === "nothing") {
		this.inventory.push("");
	}
}

// ================= Fight Prototypes ======================

Character.prototype.attack = function() {
	if (this.inventory[0].itemName === "") {
		return (Math.round(Math.random() * 5) + this.strength);
	}
	else if (this.inventory[0].itemName === "book") {
		return ((Math.round(Math.random() * 5) + this.strength) + this.inventory[0].itemStrength) -5;
	}
}

Character.prototype.enemyAttack = function() {
	if (this.inventory[0].itemName === "") {
		return ((Math.round(Math.random() * 8) + this.strength));
	}
	else if (this.inventory[0].itemName === "book") {
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

// ================= Front End ======================
$(function() {
// ================= Variables ======================
	var insertItem;

// ================= Create Character ======================
	var protag = {};

	$("form#userName").submit(function(event) {
		event.preventDefault();
		var playerName = $("input#playerName").val();
		protag = new Character(playerName, 30, 30, 6);
		protag.inventory.push(nonItem, nonItem);
	});

// ================= Riddle: Puzzle 1 ======================
	$("#puzzleOneSubmit").click(function(event) {
		event.preventDefault();

		var puzzleAnswer1 = "C";
		var riddleAnswer = $("input:radio[name=firstPuzzle]:checked").val();

		if(riddleAnswer === puzzleAnswer1) {
			insertItem = "book"
			protag.addItem(insertItem);
			$("#puzzleOneOutput").text("You are correct");
		}
		else {
			insertItem = "nothing";
			protag.addItem(insertItem);
			$("#puzzleOneOutput").text("You suck!");
		}
	});

// ================= Meaning of Life: Puzzle 2 ======================
	$("#puzzleTwoSubmit").click(function(event) {
		event.preventDefault();

		var puzzleAnswer2 = "B";
		var meaningOflife = $("input:radio[name=secondPuzzle]:checked").val();

		if(meaningOflife === puzzleAnswer2) {
			insertItem = "Fixie-bike"
			protag.addItem(insertItem);
			$("#puzzleTwoOutput").text("You dont know the meaning of life. You are correct.");
		}
		else {
			insertItem = "nothing";
			protag.addItem(insertItem);
			$("#puzzleTwoOutput").text("You think you know the question to the meaning of life, therefore you are wrong.");
		}
	});


// ================= HangMan Puzzle: Puzzle 3 ======================
var winCount = 0;
var loseCount = 0;
var outCome = "";
var pictureCycle = 1;

	$("form#letterPuzzle").submit(function(event) {
		event.preventDefault();
		var letterGuess = $("input#playerGuess").val().toUpperCase();

		var guessResult = guessLetter(letterGuess);
		for (var idx = 0; idx < 4; idx++) {
			if (guessResult === idx) {
				winCount++;
				if(guessResult === 2) {
					$(".correct-answers span3").text(letterGuess);
				}
				$(".correct-answers span" + idx).text(letterGuess);
				$("input#playerGuess").val("");
			}
		}
		if(winCount === 3) {
			outCome = "win";
		}
		if (guessResult === "Incorrect") {
			loseCount ++;
			$("#incorrect-answers span" + idx).append(letterGuess);
			$("#bodyPart" + pictureCycle).fadeIn(2000);
			pictureCycle++;
			$("input#playerGuess").val("");
		}
		if(loseCount === 6) {
			outCome = "lose";
		}
		if(outCome === "win") {
			insertItem = "Nitro Coldbrew";
			protag.addItem(insertItem);
		}
		else if(outCome === "lose" ) {
			insertItem === "nothing";
			protag.addItem(insertItem);
		}
	});

// ================= Fight! ======================
	var index = 0;

	$('#fightButton').click(function(){
		console.log(enemies[index]);
		var result = protag.fight(enemies[index]);
		if (result === "win") {
			index++;
		}
		else if (result === "die") {
		}
	});
}); //End jQuery function
