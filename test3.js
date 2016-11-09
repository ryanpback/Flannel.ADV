$(function() {
  scene8();
});

function scene8() {
    $('#scene8').show();
    timer = 0;
    $('.scene8Text').typed({
      strings: ['Bouncer: Sorry, we\'re sold out of tickets.<br>^1000 You: But I know the bar guy!<br>^1000 Bouncer: Fine. If you can solve the hardest game of hang-man, I\'ll let you in.'],
      typeSpeed: 50,
      startDelay: timer,
      showCursor: false
    });
    timer+=5000;
    var character = "josh";
    var name = "Sherman"
    $('.josh').delay(1000).fadeIn(1000);
    $('.bouncer').fadeIn(1000);
    timer+=14000;
    $('.scene8Text').delay(timer).fadeOut(1000);
    $('.bouncer').delay(timer).fadeOut(1000);
    timer+=5000;
    $('.finalShow').typed({
      strings: ['You got in to \'Club Foot\'!<br>^1000 Peering through the sea of plaid and well manicured beards,^500 the lights dim,^500 and you see the band come onstage...'],
      typeSpeed: 50,
      startDelay: timer,
      showCursor: false
    });
    timer+=18000;
    $('.finalShow').delay(timer).fadeOut(1000);
  };
