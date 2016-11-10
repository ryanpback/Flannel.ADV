$(function(){
  var timer = 0;
  var character = "josh";
  var name = "";
  var typeFast = 25;
  intro();
  function intro() {
  	$('#nameStart').fadeIn(2000);
  	var timer = 1000;
  	$('#clickStart').delay(timer).fadeIn(2000);
  	$('body').click(function(){
  		$('#start').fadeOut(1000);
  		// ========================== Intro Text ===============================
  		$('#story').delay(timer).fadeIn(1000);
  		timer+=500;
  		$("#storyText").typed({
  			strings: ["<p>Hipster: the embodiment of postmodernism as a spent force, revealing what happens when pastiche and irony exhaust themselves as aesthetics.</p><br>"],
  			typeSpeed: typeFast,
  			startDelay: timer
  		});
  		timer+=9000;
  		$('body').off('click');
  		$('#story').delay(timer).fadeOut(2000);
  		// ========================== Name ===============================
  		timer+=4000;
  		$('#characterSelect').delay(timer).fadeIn(1000);
  	});
  	$('body').on('submit', 'form#genderForm',function(event) {
  		timer = 1000;
  		event.preventDefault();
  		name = $('input#name').val();
  		$('#characterSelect').fadeOut(1000);
  		// ========================== Gender Select ===============================
  		$('#maleFemale').delay(timer).fadeIn(1000);
  		timer+=1500;
  		$("#genderText").typed({
  			strings: ["Hello, " + name, "^500Are you male or female?"],
  			typeSpeed: typeFast,
  			startDelay: timer
  		});
  		timer+=1500;
  		$('#genderImages').delay(timer).fadeIn(1000);
  		timer+=3000;
  		$("#male").typed({
  			strings: ["male"],
  			typeSpeed: typeFast,
  			startDelay: timer,
  			showCursor: false
  		});
  		timer+=900;
  		$("#female").typed({
  			strings: ["female"],
  			typeSpeed: typeFast,
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
  				typeSpeed: typeFast,
  				startDelay: timer,
  				showCursor: false
  			});
  			timer+=2000;
  			$('#spectrum').delay(timer).hide().delay(1000).queue(function(next) {
  				scene1();
  				next();
  			});
  		});
  	});
  }

  function scene1() {
  	var wakeUpText = "<p>You wake up...^1000 mattress on the floor...^1000 exhausted from a long night of cross stitching and updating your Etsy account.^1000<br> You can feel the slight hangover from the mix of PBR and brown sugar maple whiskey you drank last night.^1000<br> The phone rings.^1000 It's your friend Harlow.</p>";
  	var phoneText = "<p>Harlow: " + name +", you're going to the show tonight, right?^1000<br> You've probably never heard of them,^1000 but it's an indie synth band from Iceland.^1000<br> Starts at 7:30 at 'Club Foot.'^1000 See you there!</p>"
  	var timer = 2000;
  	$('.'+character).delay(timer).fadeIn(1000);
  	$('#wakeUp').delay(timer).fadeIn(1000);
  	$('.wakeUpText').typed({
  		strings: [wakeUpText],
  		typeSpeed: typeFast,
  		startDelay: timer,
  		showCursor: false
  	});
  	timer+=18000;
  	$('.'+character+"Normal").delay(timer).queue(function(next){
  		$(this).addClass(character+"Phone");
  		next();
  	}).delay(timer+2000).queue(function(next){
  		$(this).removeClass(character+"Phone");
  		next();
  	});
  	timer+=6000;
  	$('.harlow').delay(timer).fadeIn(1000);
  	$('.wakeUpText').delay(timer).fadeOut(1000);
  	timer+=1000;
  	$('.phoneText').typed({
  		strings: [phoneText],
  		typeSpeed: typeFast,
  		startDelay: timer,
  		showCursor: false
  	});
  	$('.harlow').delay(16000).fadeOut(1000);
  	timer+=18000;
  	$('#wakeUp').delay(timer).fadeOut(1000);
  	$('.phoneText').delay(timer).fadeOut(1000).delay(1000).queue(function(next) {
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
		typeSpeed: typeFast,
		startDelay: timer,
		showCursor: false
	});
	$('#scene2').delay(13000).fadeOut(1000).delay(1000).queue(function(next) {
		scene3();
		next();
	});
}

//==================== Scene Three Function ==================
  function scene3() {
    var timer = 0;
    $('.riddle1Top').hide();
    $('#scene3').delay(timer).fadeIn(1000);
    $('.scene3Text').typed({
      strings: ['You arrive to the Better Book Bureau of Bigger Bushwick to find your friend Ai working.'],
      typeSpeed: typeFast,
      startDelay: timer,
      showCursor: false
    });
    timer+=5000;
    $('.ai').delay(timer).fadeIn(1000);
    timer+=1000;
    $('.'+character+"Normal").delay(timer).queue(function(next){
      $(this).addClass(character+"Bike");
      next();
    }).delay(2000).queue(function(next){
      $(this).removeClass(character+"Bike");
      next();
    });
    $('.scene3Text').delay(timer).fadeOut(1000);
    timer+=1000;
    $('.aiText').typed({
      strings: ['Ai: Hey ' + name + '!^1000 Your book just came in.^1000 <em>On Sexes and Serfdom</em>,^1000 good choice.^1000 Real quick, while I\'ve got you; I was wondering if you could help me with a problem.'],
      typeSpeed: typeFast,
      startDelay: timer,
      showCursor: false
    });
    timer+=16000;
    $('.aiText').delay(timer).fadeOut(1000);
    timer+=2000;
    $('.riddle1Text').typed({
      strings: ['Michael, John, Tanya and Robert are putting together a synth-based indie band. They need a singer, a keyboard player, another keyboard player and someone to operate the drum machine. Tanya can play the keyboard and sing, Michael can sing and hit buttons, Robert can also hit buttons and play the keyboard, and John can kinda play keyboards. How do you arrange everyone for this to make any sense?'],
      typeSpeed: typeFast,
      startDelay: timer,
      showCursor: false
    });
    timer+=27000;
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
      var riddle1 = true;
    }
    else {
      insertItem = "nothing";
      // protag.addItem(insertItem);
			var riddle1 = false;
     }
     if(riddle1) {
       $('.riddle1Top').fadeOut(1000);
       $('.riddle1Text').fadeOut(1000);
       $('.scene3Top').delay(1000).fadeIn(1000);
       $('.riddle1ResponseText').typed({
         strings: ['You\'re so right!!!^1000 I\'ll tell them that! Oh, I heard you were going to \'Club Foot\' tonight!.^1000 Apparently that used to be a huge <em>jazz</em> club.'],
         typeSpeed: typeFast,
         startDelay: 1000,
         showCursor: false
       }).delay(15000).queue(function(next) {
         scene4();
         next();
       });
     }
		 else {
			 $('.riddle1Top').fadeOut(1000);
       $('.riddle1Text').fadeOut(1000);
       $('.scene3Top').delay(1000).fadeIn(1000);
			 $('.ai').delay(2000).queue(function(next){
	       $(this).addClass('aiConfused');
	       next();
	     });
       $('.riddle1ResponseText').typed({
         strings: ['Hmm...^1000 I don\'t know.^1000 That might work. ^1000 I\'ll suggest it to them.'],
         typeSpeed: typeFast,
         startDelay: 1000,
         showCursor: false
       }).delay(11000).queue(function(next) {
         scene4();
         next();
       });
		 }
   });
  }


//==================== Scene Four Function ==================
  function scene4() {
    timer = 2000;
    $('#scene3').fadeOut(1000);
    $('.riddle1ResponseText').fadeOut(1000);
    $('#scene4').delay(timer).fadeIn(1000);
    $('.scene4Top').delay(timer).fadeIn(1000);
    timer+= 1000;
    $('.scene4Text').typed({
      strings: ['You start heading to the local, community-run bike co-op to pick up your fixie that you left to be repaired.^1000 While getting off the train a bum starts to approach you.'],
      typeSpeed: typeFast,
      startDelay: timer,
      showCursor: false
    });
    timer+=12000;
    $('.bum').delay(timer).fadeIn(1000);
    $('.scene4Text').delay(timer).fadeOut(1000);
    timer+=2000;
    $('.bumText').typed({
      strings: ['Bum: Hey man, you got a smoke?<br>^1000You: Sorry, I only smoke organic homegrown tobacco out of my vintage, corn-cob pipe.<br><br>^1000The nicotine-fiend gets angry.'],
      typeSpeed: typeFast,
      startDelay: timer,
      showCursor: false
    });
    timer+=12000;
    $('.bumText').delay(timer).fadeOut(1000);
    timer+=2000;
    $('.scene4Bottom').delay(timer).fadeIn(1000);
		$("#reactButton").click(function(event) {
		event.preventDefault();
		$('.scene4Bottom').fadeOut(1000);
		var reactAnswer = $("input:radio[name=statements]:checked").val();
		var bum = false;
		if(reactAnswer === "A") {
			$('.userResponses').typed({
			strings: [name + "^1000: Get lost dude"],
				typeSpeed: 20,
				startDelay: 2000,
				showCursor: false
			});
				$('.bumResponses').typed({
				strings: ["^1000Bum: You get lost,^1000 you gentrifying punk! <br>"],
					typeSpeed: 20,
					startDelay: 4000,
					showCursor: false
				});
		}
		else if (reactAnswer === "B") {
			$('.userResponses').typed({
			strings: [name + "^1000: *Kicks him in the chin and runs! <br>"],
				typeSpeed: 20,
				startDelay: 2000,
				showCursor: false
			});
			$('.bumResponses').typed({
			strings: ["Bum: Oww!^1000 I'm gonna sue!"],
				typeSpeed: 20,
				startDelay: 7000,
				showCursor: false
			});
		}
		else if (reactAnswer === "C") {
			$('.userResponses').typed({
			strings: [name + ": Here, would you like this brownie I was saving?"],
				typeSpeed: 20,
				startDelay: 2000,
				showCursor: false
			});
			$('.bumResponses').typed({
			strings: ["Bum: Really?^500 thank you<br>^1000"+name+": I was saving it for 'Club Foot' later, but take it.'"],
				typeSpeed: 20,
				startDelay: 7000,
				showCursor: false
			});
			bum = true;
		}
		else if(reactAnswer === "D") {
			$('.userResponses').typed({
			strings: [name + ": *Threatens to pull out a vinyl record and slit his throat. <br>"],
				typeSpeed: 20,
				startDelay: 2000,
				showCursor: false
			});
			$('.bumResponses').typed({
			strings: ["Bum: Whoa, man! Sorry... I didn't know you were packing vinyl."],
				typeSpeed: 20,
				startDelay: 7000,
				showCursor: false
			});
		}
		if(bum) {
			$('.hint').typed({
			strings: ["Bum: Oh, just a heads up. I heard their bouncer has been making people play hang-man with him lately to get in, pretty high stakes if you ask me."],
				typeSpeed: 20,
				startDelay: 15000,
				showCursor: false
			});
			timer+=15000
		}
    $('#scene4').delay(timer-20000).fadeOut(1000).delay(1000).queue(function(next) {
      scene5();
      next();
    });
  });
}

//==================== Scene Five Function ==================================
  function scene5() {
    timer = 1000;
    $('#scene4').fadeOut(1000);
    $('#scene5').delay(timer).fadeIn(1000);
    $('.riddle2Top').hide();
    $('.scene5Text').typed({
      strings: ['You make it to "Oh, Wheelie" local, community-run bike co-op to pick up your fixie from Ryk, the co-op\'s goodwill ambassador.<br>^1000 Ryk: Hey ' + name + '^1000, your bike is all taken care of.^1000 Here you go.^1000 We\'re actually trying a new policy where we don’t accept monetary payments.^1000 You’ll have to solve a riddle in exchange.'],
      typeSpeed: typeFast,
      startDelay: timer,
      showCursor: false
    });
    timer+=10000;
    $('.bikeGuy').delay(timer).fadeIn(1000);
    $('.'+character+"Normal").delay(timer).queue(function(next){
      $(this).addClass(character+"Bike");
      next();
    })
    timer+=17000;
    $('.scene5Text').delay(timer).fadeOut(1000);
    timer+=1000;
    $('.riddle2Text').typed({
      strings: ['The answer to the ultimate question of life, the universe, and everything is 42.^1000 What is the question?'],
      typeSpeed: typeFast,
      startDelay: timer,
      showCursor: false
    });
    timer+=10000;
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
      }
      else {
        insertItem = "nothing";
        // protag.addItem(insertItem);
        var riddle2 = false;
      }
      if(riddle2) {
        $('.riddle2Top').fadeOut(1000);
        $('.riddle2Text').fadeOut(1000);
        $('.scene5Top').delay(1000).fadeIn(1000);
        $('.riddle2ResponseText').typed({
          strings: ['Congratulations!^1000 Yes, unfortunately no one knows the proper question to ask about life, the universe, and everything.^1000 Well, anyways, here\'s your fixie. It really does add to your vintage cred.^500 By the way, Harlow said you guys were going to \'Club Foot\' later. I heard they\'ve been playing a lot of J\'s and Z\'s lately.'],
          typeSpeed: typeFast,
          startDelay: 1000,
          showCursor: false
        }).delay(29000).queue(function(next) {
          scene7();
          next();
        }).delay(1000).queue(function(next){
            $('.'+character).removeClass(character+"Bike");
            next();
        });
      }
			else {
				$('.riddle2Top').fadeOut(1000);
        $('.riddle2Text').fadeOut(1000);
        $('.scene5Top').delay(1000).fadeIn(1000);
        $('.riddle2ResponseText').typed({
          strings: ['No,^1000 unfortunately that\'s not correct.^1000 I\'ll help you out this time and let it slide,^1000 but please try to answer the riddle correctly in the future.'],
          typeSpeed: typeFast,
          startDelay: 1000,
          showCursor: false
        }).delay(15000).queue(function(next) {
          scene7();
          next();
        }).delay(1000).queue(function(next){
            $('.'+character).removeClass(character+"Bike");
            next();
        });
			}
    });
  }

	//==================== Scene Six Function ==================================
    function scene6() {
      timer = 2000;
      $('#scene5').fadeOut(1000);
      $('#scene6').delay(timer).fadeIn(1000);
      $('.bikeGuy').fadeOut(1000);
      $('.scene6Text').typed({
        strings: ['Outside the bike shop you notice a girl holding Peta signs, eating what you recognize to be a hemp flavored honey stick from your local farmers market.^1000 You can\'t help but point out that she\'s contradicting her morals and supporting bee slavery.'],
        typeSpeed: typeFast,
        startDelay: timer,
        showCursor: false
      });
      timer+=5000;
      $('.veganPoser').delay(timer).fadeIn(1000);
      timer+=13000;
      $('.scene6Text').delay(timer).fadeOut(1000);
      timer+=1000;
      $('.veganText').typed({
        strings: ['Vegan Poser: ^1000 I have my own backyard bees that are loved and cared for; they are definitely NOT slaves!'],
        typeSpeed: typeFast,
        startDelay: timer,
        showCursor: false
      }).delay(timer+11000).queue(function(next) {
        scene7();
        next();
      });
    }

//==================== Scene Seven Function ==================================
  function scene7() {
    timer = 2000;
    $('#scene5').fadeOut(1000);
    $('#scene7').delay(timer).fadeIn(1000);
    $('.scene7Text').typed({
      strings: ['Finally time to head to the show...^1000 You hop on your fixie and bike through the city.'],
      typeSpeed: typeFast,
      startDelay: timer,
      showCursor: false
    });
    timer+=7000;
    $('.scene7Text').delay(timer).fadeOut(1000);
    timer+=2000;
    $('.harlowCity').delay(timer).fadeIn(1000);
    $('.meetHarlow').typed({
      strings: ['On the way to the venue, you run into your friend Harlow!<br>^1000 Harlow: Did you get your ticket yet? I bought mine ages ago...<br>^1200 Oh...^1000 you don\'t have a ticket yet. ^1000 Hopefully it won\'t be too hard to get one at the door!'],
      typeSpeed: typeFast,
      startDelay: timer,
      showCursor: false
    }).delay(timer+19000).queue(function(next) {
      scene8();
      next();
    });
  }

//==================== Scene Eight Function ==================================
function scene8() {
    timer = 2000;
    $('#scene7').fadeOut(1000);
    $('#scene8').delay(timer).fadeIn(1000);
		$('.bouncer').delay(timer).fadeIn(1000);
    $('.scene8Text').typed({
      strings: ['Bouncer: Sorry, we\'re sold out of tickets.<br>^1000 You: But I know the bar guy!<br>^1000 Bouncer: Fine. If you can solve the hardest game of hang-man known to man, both hanged and not,^1000 only then will I let you in.'],
      typeSpeed: typeFast,
      startDelay: timer,
      showCursor: false
    });
		timer+=17000;
		$('#scene8').delay(timer).fadeOut(1000);
		timer+=3000;
		$('#hangManPuzzle').delay(timer).fadeIn(1000);
    hangMan();
  }
});

function hangMan() {
	var hangman = ["J", "A", "Z", "Z"];
	guessLetter	= function(letters) {
		for(var index = 0; index < hangman.length; index++) {
	 		if(letters === hangman[index]) {
		 		return index;
	 		}
		}
		return "Incorrect"
	};
  var winCount = 0;
  // var loseCount = 0;
  var outCome = "";
  var pictureCycle = 1;
  var guessesLeft = 6;
  $(".incorrect span4").text(guessesLeft);
  $("form#letterPuzzle").submit(function(event) {
		event.preventDefault();
		var letterGuess =  $("input#playerGuess").val().toUpperCase();
		var guessResult = guessLetter(letterGuess);
		for (var idx = 0; idx < 4; idx++) {
			if (guessResult === idx) {
				winCount++;
        hangman[idx] = "";
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
			guessesLeft--;
			$(".incorrect-answers span5").append(" " + letterGuess + " ");
      $(".incorrect span4").text(guessesLeft);
			$("#bodyPart" + pictureCycle).fadeIn(2000);
			pictureCycle++;
			$("input#playerGuess").val("");
		}
		if(guessesLeft === 0) {
			outCome = "lose";
		}
		if(outCome === "win") {
      timer=2000;
			$("#hangManPuzzle").delay(1000)fadeOut(1000);
			$('#scene8').delay(timer).fadeIn(1000);
			$('.scene8Text').delay(timer).fadeOut(1000);
      timer+=2000;
			$('.finalShow').typed({
				strings: ['You got into \'Club Foot\'!<br>^1000 Peering through the sea of plaid and well manicured beards,^500 the lights dim,^500 and you see the band come onstage...'],
				typeSpeed: 20,//typeFast,
				startDelay: timer,
				showCursor: false
			});
			timer+=10000;
			$('#scene8').delay(timer).fadeOut(1000);
			timer+=4000;
			$('#corgi').delay(timer).fadeIn(1000);
			$('#corgi').queue(function(next){
				return $(this).children()[0].src +="?autoplay=1";
				next();
			});
		}
		else if(outCome === "lose" ) {
      //$("#hangManPuzzle").hide();
			$("#hangManPuzzle").fadeOut(1000);
			$('#scene8').fadeOut(1000);
			$('#suck').fadeIn(1000);
			$('.suck').typed({
				strings: ['You didn\'t make it to the show...<br>^1000 bummer....'],
				typeSpeed: 20,//typeFast,
				startDelay: 3000,//timer,
				showCursor: false
			});
		}
  });
};
