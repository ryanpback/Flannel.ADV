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
	var introText = "<p>Hipster: the embodiment of postmodernism as a spent force, revealing what happens when pastiche and irony exhaust themselves as aesthetics.</p><br>";
	var name = "";
	var wakeUpText = "<p>You wake up,^1000 mattress on the floor,^1000 exhausted from a long night of cross stitching and updating your etsy account.^1000<br> You can feel the slight hangover from the mix of PBR and brown sugar maple whiskey you drank last night. The phone rings.^1000 It's your friend Harlow on the line.</p>";
	var phoneText = "<p>Harlow: Hey, are you going to the show tonight?^1000 You've probably never heard of them, but it's an indie synth band from Iceland. Starts at 7:30 at 'Club Foot.'^1000 Hope to see you there!</p>"
	$('#nameStart').fadeIn(2000);
	$('#clickStart').delay(1000).fadeIn(2000);

	$('body').click(function(){
		$('#start').fadeOut(1000);
		$('#story').delay(1000).fadeIn(1000);
		$("#storyText").typed({
			strings: [introText],
			typeSpeed: 50,
			startDelay: 1500
		});
		$('body').off('click');
		$('#story').delay(14000).fadeOut(2000);
		$('#characterSelect').delay(18000).fadeIn(1000);
	});
	$('body').on('submit', 'form',function(event) {
		event.preventDefault();
		name = $('input#name').val();
		$('#characterSelect').fadeOut(1000);
		$('#maleFemale').delay(1000).fadeIn(1000);
		$("#genderText").typed({
			strings: ["Hello, " + name, "^1000Are you male or female?"],
			typeSpeed: 50,
			startDelay: 1500
		});
		$('#genderImages').delay(4000).fadeIn(1000);
		$("#male").typed({
			strings: ["male"],
			typeSpeed: 50,
			startDelay: 7500,
			showCursor: false
		});
		$("#female").typed({
			strings: ["female"],
			typeSpeed: 50,
			startDelay: 8400,
			showCursor: false
		});
		$('body').on('click', '.outline', function() {
			$('#maleFemale').fadeOut(1000);
			$('#spectrum').delay(2000).fadeIn(1000);
			$(".spectrumText").typed({
				strings: ["<p>Don't you know that gender is a spectrum?</p>^500", ""],
				typeSpeed: 50,
				startDelay: 2200,
				showCursor: false
			});
			$('#spectrum').delay(6500).hide();
			$('#wakeUp').delay(10000).fadeIn(1000);
			$('.wakeUpText').typed({
		    strings: [wakeUpText],
		    typeSpeed: 50,
				startDelay: 10100,
		    showCursor: false
		  });
	// 	  $('.wakeUpText').delay(21000).fadeOut(1000);
	// 	  $('.phoneText').typed({
	// 	    strings: [phoneText],
	// 	    typeSpeed: 50,
	// 	    startDelay: 22500,
	// 			showCursor: false
	// 	  });
		});
	});
});
