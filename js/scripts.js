// ================= Characters ======================
function Character(name, health, strength, inventory) {
	this.name = name;
  this.health = [health, health];
  this.strength = strength;
  this.inventory = [];
}

var protag = new Character("Kaeric", 30, 6);
var goblin = new Character("Goblin", 15, 4);

// ================= Items ======================
function Weapon(type, damage) {
	this.type = type;
  this.damage = damage;
}

function Shield(type, defense) {
	this.type = type;
  this.defense = defense;
}

var sword = new Weapon("sword", 5);
var buckler = new Shield("buckler", 5);

protag.inventory.push(sword);
goblin.inventory.push(sword);
protag.inventory.push(buckler);

// ================= Fight Functions ======================
function attack(character) {
	return ((Math.round(Math.random() * 6) + character.strength) + character.inventory[0].damage) -6;
}

function defense(character) {
	return character.inventory[1].defense;
}

function fight(character, enemy) {
	if(enemy.inventory[1]) {
  	var damage = attack(character) - defense(enemy);
  }
  else {
  	var damage = attack(character);
  }
	if(damage > 0) {
  	enemy.health[1] = enemy.health[1] - damage;
  }
	else if(damage <= 0) {
		damage = 0;
	}
	return damage;
}

function loseHealth(hp, character) {
	return (hp / character.health[0]);
}

// function instance(character, enemy) {
// 	while(character.health[1] > 0 && enemy.health[1] > 0){
//   	fight(character, enemy);
//     if(enemy.health[1] < 1) {
//       return "win";
//     }
//     fight(enemy, character);
//     if(character.health[1] < 1) {
//       return "die";
//     }
//     console.log(character.name + ": " + character.health[1]);
//     console.log(enemy.name + ": " + enemy.health[1])
//   }
// }

// ================= Front End ======================
$(function() {
	var introText = "<p>Enamel pin humblebrag occupy, locavore af asymmetrical letterpress PBR&amp;B.</p><br><br><p>Will you help? <br><span class='yes'>yes</span><span class='no'>no</span></p>";
	var name = "";
	$('#nameStart').fadeIn(2000);
	$('#clickStart').delay(1000).fadeIn(2000);

	$('body').click(function(){
		$('#start').fadeOut(1000);
		$('#story').delay(1000).fadeIn(2000);
		$("#storyText").typed({
			strings: [introText],
			typeSpeed: 0,
			startDelay: 1500
		});
		$('body').off('click');
		$('body').on('click', '.yes', function(){
			$('#story').fadeOut(1000);
			$('#characterSelect').delay(1000).fadeIn(1000);
		});
		$('body').on('click', '.no', function(){
			$('#story').fadeOut(1000);
			$('#youSuck').delay(1000).fadeIn(1000);
		});
	});
	$('body').on('submit', 'form',function(event) {
		event.preventDefault();
		name = $('input#name').val();
		$('#characterSelect').fadeOut(1000);
		$('#maleFemale').delay(1000).fadeIn(1000);
		$("#genderText").typed({
			strings: ["Hello, " + name, "^1000Are you male or female?"],
			typeSpeed: 0,
			startDelay: 1500
		});
		$('#genderImages').delay(2000).fadeIn(1000);
		$("#male").typed({
			strings: ["male"],
			typeSpeed: 0,
			startDelay: 5500,
			showCursor: false
		});
		$("#female").typed({
			strings: ["female"],
			typeSpeed: 0,
			startDelay: 6000,
			showCursor: false
		});
	});
});
