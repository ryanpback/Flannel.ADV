
// ================= Front End ======================
$(function() {
	var timer = 0;
	var character = "";
	var name = "";
	scene4()


//=============== Intro Function =============================
function intro() {
		var introText = "<p>Hipster: the embodiment of postmodernism as a spent force, revealing what happens when pastiche and irony exhaust themselves as aesthetics.</p><br>";
	$('#nameStart').fadeIn(2000);
	timer+= 1000;
	$('#clickStart').delay(timer).fadeIn(2000);
	$('body').click(function(){
		$('#start').fadeOut(1000);
		// ========================== Intro Text ===============================
		$('#story').delay(timer).fadeIn(1000);
		timer+=500;
		$("#storyText").typed({
			strings: [introText],
			typeSpeed: 50,
			startDelay: timer
		});
		timer+=14000;
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
			$('#spectrum').delay(timer).hide().delay(1000).queue(function(next) {
				scene1();
				next();
			});
		});
	});
}

//================= Scene One Function ======================
function scene1() {
	var wakeUpText = "<p>You wake up...^1000 mattress on the floor...^1000 exhausted from a long night of cross stitching and updating your etsy account.^1000<br> You can feel the slight hangover from the mix of PBR and brown sugar maple whiskey you drank last night.^1000<br> The phone rings.^1000 It's your friend Harlow.</p>";
	var phoneText = "<p>Harlow: Hey, are you going to the show tonight?^1000<br> You've probably never heard of them,^1000 but it's an indie synth band from Iceland.^1000<br> Starts at 7:30 at 'Club Foot.'^1000 See you there!</p>"
	var timer = 3500;
	$('.'+character).delay(timer).fadeIn(1000);
	$('#wakeUp').delay(timer).fadeIn(1000);
	$('.wakeUpText').typed({
		strings: [wakeUpText],
		typeSpeed: 50,
		startDelay: timer,
		showCursor: false
	});
	timer+=32000;
	// $('.'+character+"Normal").delay(timer-9000).queue(function(next){
	// 	$(this).addClass(character+"Phone");
	// 	$(this).removeClass(character+"Normal");
	// 	next();
	// })
	// .delay(timer-15000).queue(function(next){
	// 	$(this).addClass(character+"Normal");
	// 	$(this).removeClass(character+"Phone");
	// 	next();
	// });
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
	$('.phoneText').delay(timer+2000).fadeOut(1000).delay(1000).queue(function(next) {
		scene2();
		next();
	});
}

//==================== Scene Two Function ==================
function scene2() {
	var timer = 3000;
	$('#scene2').delay(timer).fadeIn(1000);
	$('.trainText').typed({
		strings: ['While on the train to your favorite sustainable, gluten-free bookstore you think to yourself. "Oh man, I really hope my book on gender roles in medieval poetry came in today."'],
		typeSpeed: 50,
		startDelay: timer,
		showCursor: false
	});
	$('#scene2').delay(17000).fadeOut(1000).delay(1000).queue(function(next) {
		scene3();
		next();
	});
}

//=================== Scene Three Function ====================
function scene3() {
	var timer = 0;
	$('#scene3').delay(timer).fadeIn(1000);
	$('.scene3Text').typed({
		strings: ['You arrive to the Better Book Bureau of Bigger Bushwick to find your friend Ai working.'],
		typeSpeed: 50,
		startDelay: timer,
		showCursor: false
	});
	timer+=10000;
	$('.ai').delay(timer).fadeIn(1000);
	timer+=2000;
	// $('.'+character+"Normal").delay(timer).queue(function(next){
	// 	$(this).addClass(character+"Bike");
	// 	$(this).removeClass(character+"Normal");
	// 	next();
	// })
	// 	.delay(2000).queue(function(next){
	// 	$(this).addClass(character+"Normal");
	// 	$(this).removeClass(character+"Bike");
	// 	next();
	// });
	$('.scene3Text').delay(timer).fadeOut(1000);
	timer+=2000;
	$('.aiText').typed({
		strings: ['Ai: Hey ' + name + '!^1000 Your book just came in.^1000 Real quick, while I\'ve got you; I was wondering if you could help me with a problem.'],
		typeSpeed: 50,
		startDelay: timer,
		showCursor: false
	});
	timer+=15000;
	$('.aiText').delay(timer).fadeOut(1000);
	timer+=2000;
	// $('.ai').delay(timer).queue(function(next){
	// 	$(this).addClass('aiConfused');
	// 	next();
	// });
	$('.riddle1Text').typed({
		strings: ['Michael, John, Tanya and Robert are putting together a synth-based indie band. They need a singer, a keyboard player, another keyboard player and someone to operate the drum machine. Tanya can play the keyboard and sing, Michael can sing and hit buttons, Robert can also hit buttons and play the keyboard, and John can kinda play keyboards. How do you arrange everyone for this to make any sense?'],
		typeSpeed: 50,
		startDelay: timer,
		showCursor: false
	});
	timer+=38000;
	$('.scene3Top').delay(timer).fadeOut(1000);
	timer+=1000;
	$('.riddle1Top').delay(timer).fadeIn(1000);
	$("#puzzleOneSubmit").click(function(event) {
	event.preventDefault();
	var puzzleAnswer1 = "C";
	var riddleAnswer = $("input:radio[name=firstPuzzle]:checked").val();
	if(riddleAnswer === puzzleAnswer1) {
		insertItem = "book"
		// protag.addItem(insertItem);
		$('#puzzleOneOutput').typed({
		strings: ["You're right!^1000 Synth is great no matter who is playing what!"],
			typeSpeed: 20,
			showCursor: false
		});
		var riddle1 = true;
	}
	else {
		insertItem = "nothing";
		// protag.addItem(insertItem);
		$('#puzzleOneOutput').typed({
		strings: ["I don't think that will work..."],
			typeSpeed: 20,
			showCursor: false
		});
	 }
	 if(riddle1) {
		 scene4();
	 }
	});
}

//================= Scene Four Function ================
function scene4() {
    timer= 0;
    $('.riddle1Top').delay(timer).fadeOut(1000);
    $('.riddle1Text').delay(timer).fadeOut(1000);
    timer+= 1000;
    $('#scene4').delay(timer).fadeIn(1000);
    $('.scene4Top').delay(timer).fadeIn(1000);
    $('.scene4Text').typed({
      strings: ['You start heading to the local, community-run bike co-op to pick up your fixie that you left to be repaired.^1000 While you get off the train a bum starts to approach you.'],
      typeSpeed: 50,
      startDelay: timer,
      showCursor: false
    });
    timer+=17000;
    $('.bum').delay(timer).fadeIn(1000);
		timer+=3000
    $('.scene4Text').delay(timer).fadeOut(1000);
    timer+=2000;
    $('.bumText').typed({
      strings: ['Bum: Hey man, you got a smoke?<br>^1000You: Sorry, I only smoke organic homegrown tobacco out of my vintage, corn-cob pipe.<br><br>^1000The nicotine-fiend gets angry.'],
      typeSpeed: 50,
      startDelay: timer,
      showCursor: false
    });
    timer+=18000;
    $('.bumText').delay(timer).fadeOut(1000);
		$('.scene4Bottom').delay(43000).fadeIn(1000);

		$("#reactButton").click(function(event) {
		event.preventDefault();
		$('.scene4Bottom').fadeOut(1000);
		var reactAnswer = $("input:radio[name=statements]:checked").val();
		if(reactAnswer === "A") {
			$('.userResponses').typed({
			strings: [name + ": Get lost"],
				typeSpeed: 20,
				startDelay: 2000,
				showCursor: false
			});
				$('.bumResponses').typed({
				strings: ["Bum: Get outta here you punk! <br>"],
					typeSpeed: 20,
					startDelay: 4000,
					showCursor: false
				});
		}
		else if (reactAnswer === "B") {
			$('.userResponses').typed({
			strings: [name + ": Kicked him in the chin and ran! <br>"],
				typeSpeed: 20,
				startDelay: 2000,
				showCursor: false
			});
			$('.bumResponses').typed({
			strings: ["Bum: Im gonna sue!"],
				typeSpeed: 20,
				startDelay: 4000,
				showCursor: false
			});
		}
		else if (reactAnswer === "C") {
			$('.userResponses').typed({
			strings: [name + ": Call the cops."],
				typeSpeed: 20,
				startDelay: 2000,
				showCursor: false
			});
				$('.bumResponses').typed({
				strings: ["Bum: Good! I would like to have a bed and a hot meal anyways!"],
					typeSpeed: 20,
					startDelay: 4000,
					showCursor: false
				});
		}
		else if(reactAnswer === "D") {
			$('.userResponses').typed({
			strings: [name + ": Threatens to pull out a vinyl record and slit his throat. <br>"],
				typeSpeed: 20,
				startDelay: 2000,
				showCursor: false
			});
			$('.bumResponses').typed({
			strings: ["Bum: Whoa, man! Sorry.."],
				typeSpeed: 20,
				startDelay: 4000,
				showCursor: false
			});
		}
    $('#scene4').delay(timer).fadeOut(1000).delay(1000).queue(function(next) {
      scene5();
      next();
    });
  });
}

//================== Scene Five Function =====================
  function scene5() {
    $('#scene5').show();
    $('.riddle2Top').hide();
    timer = 0;
    name = "josh";
    character = "josh";
    $('.scene5Text').typed({
      strings: ['You make it to "Oh, Wheelie" local, community-run bike co-op to pick up your fixie from Ryk.<br>^1000 Ryk: Hey ' + name + '^1000, your bike is all taken care of.^1000 Here you go.^1000 We\'re actually trying a new policy where we don’t accept monetary payments.^1000 You’ll have to solve a riddle in exchange.'],
      typeSpeed: 50,
      startDelay: timer,
      showCursor: false
    });
    timer+=10000;
    $('.bikeGuy').delay(timer).fadeIn(1000);
    $('.'+character+"Normal").delay(timer).queue(function(next){
      $(this).addClass(character+"Bike");
      $(this).removeClass(character+"Normal");
      next();
    })
    timer+=23000;
    $('.scene5Text').delay(timer).fadeOut(1000);
    timer+=1000;
    $('.riddle2Text').typed({
      strings: ['The answer to the ultimate question of life, the universe, and everything is 42.^1000 What is the question?'],
      typeSpeed: 50,
      startDelay: timer,
      showCursor: false
    });
    timer+=11000;
    $('.scene5Top').delay(timer).fadeOut(1000);
    timer+=1000;
    $('.riddle2Top').delay(timer).fadeIn(1000);
    $("#puzzleTwoSubmit").click(function(event) {
      event.preventDefault();
      var puzzleAnswer2 = "B";
      var meaningOflife = $("input:radio[name=secondPuzzle]:checked").val();
      if(meaningOflife === puzzleAnswer2) {
        var riddle2 = true;
        insertItem = "Fixie-bike"
        // protag.addItem(insertItem);
        $('#puzzleTwoOutput').typed({
        strings: ["You are correct"],
        typeSpeed: 20,
        showCursor: false
        });
      }
      else {
        insertItem = "nothing";
        // protag.addItem(insertItem);
        $('#puzzleTwoOutput').typed({
        strings: ["You are incorrect"],
        typeSpeed: 20,
        showCursor: false
        });
      }
      if(riddle2) {
        $('#scene5').fadeOut(1000);
        scene6();
      }
    });
  }
});
