$(function() {
  $('#scene3').show();
  timer = 0;
  $('.scene3Text').typed({
    strings: ['You arrive to the Better Book Bureau of Bigger Bushwick to find your friend Ai working.'],
    typeSpeed: 50,
    startDelay: timer,
    showCursor: false
  });
  timer+=10000;
  var character = "josh";
  var name = "Sherman"
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
  $('.ai').delay(timer-9000).queue(function(next){
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
  //$('#scene3').delay(30000).fadeOut(1000);
});
