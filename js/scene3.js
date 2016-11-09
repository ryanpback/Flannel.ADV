$(function(){
  var timer =0;
  var character = "josh";
  var name = "ryan";
  $('.riddle1Top').hide();
  $('#scene3').delay(timer).fadeIn(1000);
  // $('.scene3Text').typed({
  //   strings: ['You arrive to the Better Book Bureau of Bigger Bushwick to find your friend Ai working.'],
  //   typeSpeed: 50,
  //   startDelay: timer,
  //   showCursor: false
  // });
  // timer+=10000;
  // $('.ai').delay(timer).fadeIn(1000);
  // timer+=2000;
  // $('.'+character+"Normal").delay(timer).queue(function(next){
  //   $(this).addClass(character+"Bike");
  //   $(this).removeClass(character+"Normal");
  //   next();
  // }).delay(2000).queue(function(next){
  //   $(this).addClass(character+"Normal");
  //   $(this).removeClass(character+"Bike");
  //   next();
  // });
  // $('.scene3Text').delay(timer).fadeOut(1000);
  // timer+=2000;
  // $('.aiText').typed({
  //   strings: ['Ai: Hey ' + name + '!^1000 Your book just came in.^1000 Real quick, while I\'ve got you; I was wondering if you could help me with a problem.'],
  //   typeSpeed: 50,
  //   startDelay: timer,
  //   showCursor: false
  // });
  // timer+=15000;
  // $('.aiText').delay(timer).fadeOut(1000);
  // timer+=2000;
  // $('.ai').delay(timer).queue(function(next){
  //   $(this).addClass('aiConfused');
  //   next();
  // });
  $('.riddle1Text').typed({
    strings: ['Michael, John, Tanya and Robert are putting together a synth-based indie band. They need a singer, a keyboard player, another keyboard player and someone to operate the drum machine. Tanya can play the keyboard and sing, Michael can sing and hit buttons, Robert can also hit buttons and play the keyboard, and John can kinda play keyboards. How do you arrange everyone for this to make any sense?'],
    typeSpeed: 0,
    startDelay: timer,
    showCursor: false
  });
  timer+=10000;
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

  function scene4() {
    timer= 1000;
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
    $('.scene4Text').delay(timer).fadeOut(1000);
    timer+=2000;
    $('.bumText').typed({
      strings: ['Bum: Hey man, you got a smoke?<br>^1000You: Sorry, I only smoke organic homegrown tobacco out of my vintage, corn-cob pipe.<br><br>^1000The nicotine-fiend gets angry.'],
      typeSpeed: 50,
      startDelay: timer,
      showCursor: false
    });
    timer+=17000;
    $('#scene4').delay(timer).fadeOut(1000);
  }
});
