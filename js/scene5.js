$(function() {
  $('#scene5').show();
  $('.riddle2Top').hide();
  timer = 0;
  name = "josh";
  character = "josh";
  $('#scene4').delay(timer).fadeIn(1000);
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
  $('.scene5Top').delay(timer).fadeOut(1000);
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
  timer+=1000
  $('.riddle2Top').delay(timer).fadeIn(1000);
  //$('#scene5').delay(timer).fadeOut(1000);
});
