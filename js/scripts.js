
// ================= Front End ======================
$(function() {
	var introText = "<p>Hipster: the embodiment of postmodernism as a spent force, revealing what happens when pastiche and irony exhaust themselves as aesthetics.</p><br>";
	var name = "";
	var wakeUpText = "<p>You wake up...^1000 mattress on the floor...^1000 exhausted from a long night of cross stitching and updating your etsy account.^1000<br> You can feel the slight hangover from the mix of PBR and brown sugar maple whiskey you drank last night.^1000<br> The phone rings.^1000 It's your friend Harlow.</p>";
	var phoneText = "<p>Harlow: Hey, are you going to the show tonight?^1000<br> You've probably never heard of them,^1000 but it's an indie synth band from Iceland.^1000<br> Starts at 7:30 at 'Club Foot.'^1000 See you there!</p>"
	var timer = 0;
	var character = "";
	// ========================== Start menu ===============================
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
			$('.'+character+"Normal").delay(timer-9000).queue(function(next){
	      $(this).addClass(character+"Phone");
	      $(this).removeClass(character+"Normal");
	      next();
	    }).delay(timer-15000).queue(function(next){
	      $(this).addClass(character+"Normal");
	      $(this).removeClass(character+"Phone");
	      next();
	    });
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
			timer+=19000;
			// ========================== Scene 3 ===============================
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
		  $('.'+character+"Normal").delay(timer).queue(function(next){
		    $(this).addClass(character+"Bike");
		    $(this).removeClass(character+"Normal");
		    next();
		  }).delay(2000).queue(function(next){
		    $(this).addClass(character+"Normal");
		    $(this).removeClass(character+"Bike");
		    next();
		  });
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
		  $('.ai').delay(timer).queue(function(next){
		    $(this).addClass('aiConfused');
		    next();
		  });
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
	      strings: ["You are correct"],
	        typeSpeed: 20,
	        showCursor: false
	      });
			}
			else {
				insertItem = "nothing";
				// protag.addItem(insertItem);
	      $('#puzzleOneOutput').typed({
	      strings: ["You are incorrect"],
	        typeSpeed: 20,
	        showCursor: false
			  });
		   };
	   });
		});
	});
});
