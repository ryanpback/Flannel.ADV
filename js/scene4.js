$(function() {
  $('#scene4').show();
  timer = 0;
  //$('#scene4').delay(timer).fadeIn(1000);
  $('.scene4Text').typed({
    strings: ['You start heading to the local, community-run bike co-op to pick up your fixie that you left to be repaired.^1000 While you get off a bum starts to approach you.'],
    typeSpeed: 50,
    startDelay: timer,
    showCursor: false
  });
  timer+=17000;
  $('.bum').delay(timer).fadeIn(1000);
  $('.scene4Text').delay(timer).fadeOut(1000);
  timer+=2000;
  $('.bumText').typed({
    strings: ['Bum: Hey man, you got a smoke?<br>^1000You: Sorry, I only smoke organic homegrown tobacco out of my vintage, corn-cob pipe.<br><br>^1000The nicotine-fiend gets angry and starts to attack.'],
    typeSpeed: 50,
    startDelay: timer,
    showCursor: false
  });
  timer+=17000;
  //$('#scene4').delay(timer).fadeOut(1000);
});
