$(function() {
  $('#scene6').show();
  timer = 0;
  $('.scene6Text').typed({
    strings: ['Outside the bike shop you notice a girl holding Peta signs, eating what you recognize to be a hemp flavored honey stick from your local farmers market.^1000 You can\'t help but point out that she\'s contradicting her morals and supporting bee slavery.^1000 She gets upset and starts yelling at you.'],
    typeSpeed: 50,
    startDelay: timer,
    showCursor: false
  });
  timer+=5000;
  var character = "josh";
  var name = "Sherman"
  $('.bikeGuy').fadeOut(1000);
  $('.veganPoser').delay(timer).fadeIn(1000);
  timer+=25000;
  $('.scene6Text').delay(timer).fadeOut(1000);
  timer+=2000;
  $('.veganText').typed({
    strings: ['Vegan Poser: Hey ' + name + '!^1000 Your book just came in.^1000 Real quick, while I\'ve got you; I was wondering if you could help me with a problem.'],
    typeSpeed: 50,
    startDelay: timer,
    showCursor: false
  });
  timer+=15000;
  $('.veganText').delay(timer).fadeOut(1000);
  timer+=2000;
  $('.veganPoser').delay(timer-9000).queue(function(next){
    $(this).addClass('aiConfused');
    next();
  });
});
