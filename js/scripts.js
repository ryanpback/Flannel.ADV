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
//   }
// }

// ================= Front End ======================
$(function() {
	var introText = "<p>Hipster: the embodiment of postmodernism as a spent force, revealing what happens when pastiche and irony exhaust themselves as aesthetics.</p><br>";
	var name = "";
	var wakeUpText = "<p>You wake up...^1000 mattress on the floor...^1000 exhausted from a long night of cross stitching and updating your etsy account.^1000<br> You can feel the slight hangover from the mix of PBR and brown sugar maple whiskey you drank last night.^1000<br> The phone rings.^1000 It's your friend Harlow.</p>";
	var phoneText = "<p>Harlow: Hey, are you going to the show tonight?^1000<br> You've probably never heard of them,^1000 but it's an indie synth band from Iceland.^1000<br> Starts at 7:30 at 'Club Foot.'^1000 See you there!</p>"
	var timer = 0;
	var character = "";
	// ========================== Start menu ===============================
	timer = 1000;
	$('#nameStart').fadeIn(2000);
	$('#clickStart').delay(timer).fadeIn(2000);
	$('body').click(function(){
		$('#start').fadeOut(1000);
		// ========================== Intro Text ===============================
		$('#story').delay(timer).fadeIn(1000);
		timer+=500;
		$("#storyText").typed({
			strings: [introText],
			typeSpeed: 0, //50
			startDelay: timer
		});
		timer+=4000 //14000
		$('body').off('click');
		$('#story').delay(timer).fadeOut(2000);
		// ========================== Name ===============================
		timer+=4000;
		$('#characterSelect').delay(timer).fadeIn(1000);
	});
	$('body').on('submit', 'form',function(event) {
		timer = 0;
		event.preventDefault();
		name = $('input#name').val();
		$('#characterSelect').fadeOut(1000);
		// ========================== Gender Select ===============================
		timer+=1000;
		$('#maleFemale').delay(timer).fadeIn(1000);
		timer+=500;
		$("#genderText").typed({
			strings: ["Hello, " + name, "^1000Are you male or female?"],
			typeSpeed: 50,
			startDelay: timer
		});
		timer+=2500;
		$('#genderImages').delay(timer).fadeIn(1000);
		timer+=3500;
		$("#male").typed({
			strings: ["male"],
			typeSpeed: 50,
			startDelay: timer,
			showCursor: false
		});
		timer+=900;
		$("#female").typed({
			strings: ["female"],
			typeSpeed: 50,
			startDelay: timer,
			showCursor: false
		});
		$('body').on('click', '.outline-josh', function() {
			character = "josh";
		});
		$('body').on('click', '.outline-misaki', function() {
			character = "misaki";
		});
		$('body').on('click', '.outline', function() {
			timer = 0;
			$('#maleFemale').fadeOut(1000);
			timer+=1000;
			$('#spectrum').delay(timer).fadeIn(1000);
			timer+=200;
			$(".spectrumText").typed({
				strings: ["<p>Don't you know that gender is a spectrum?</p>^500", ""],
				typeSpeed: 50,
				startDelay: timer,
				showCursor: false
			});
			timer+=4300;
			$('#spectrum').delay(timer).hide();
			// ========================== Scene 1 ===============================
			timer+=3500;
			$('.'+character).delay(timer).fadeIn(1000);
			$('#wakeUp').delay(timer).fadeIn(1000);
			$('.wakeUpText').typed({
		    strings: [wakeUpText],
		    typeSpeed: 50,
				startDelay: timer,
		    showCursor: false
		  });
			timer+=32000;
			$('.'+character+"Normal").delay(timer-10000).queue(function(next){
	      $(this).addClass(character+"Phone");
	      $(this).removeClass(character+"Normal");
	      next();
	    }).delay(timer-15000).queue(function(next){
	      $(this).addClass(character+"Normal");
	      $(this).removeClass(character+"Phone");
	      next();
	    });;
			timer+=1000;
			$('.harlow').delay(timer).fadeIn(1000);
		  $('.wakeUpText').delay(timer).fadeOut(1000);
			timer+=1000;
		  $('.phoneText').typed({
		    strings: [phoneText],
		    typeSpeed: 50,
		    startDelay: timer,
				showCursor: false
		  });
			$('.harlow').delay(23000).fadeOut(1000);
			timer+=25000;
			$('#wakeUp').delay(timer).fadeOut(1000);
			$('.phoneText').delay(timer+2000).fadeOut(1000);
			// ========================== Scene 2 ===============================
			timer+=3000;
			$('#scene2').delay(timer).fadeIn(1000);
			$('.trainText').typed({
		    strings: ['While on the train to your favorite sustainable, gluten-free bookstore you think to yourself. "Oh man, I really hope my book on gender roles in medieval poetry came in today."'],
		    typeSpeed: 50,
		    startDelay: timer,
				showCursor: false
		  });
			$('#scene2').delay(17000).fadeOut(1000);
		});
	});
});
