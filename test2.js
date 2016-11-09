$(function() {
  scene7();
});

function scene7() {
    $('#scene7').show();
    timer = 0;
    $('.scene7Text').typed({
      strings: ['Correcting people is exhausting! Finally time to head to the show...^1000 You hop on your fixie and bike through the city.'],
      typeSpeed: 50,
      startDelay: timer,
      showCursor: false
    });
    timer+=5000;
    var character = "josh";
    var name = "Sherman"
    $('.josh').delay(timer).fadeIn(1000);
    timer+=8000;
    $('.scene7Text').delay(timer).fadeOut(1000);
    timer+=1000;
    $('.harlow').delay(timer).fadeIn(1000);
    $('.meetHarlow').typed({
      strings: ['On the way to the venue, you run into your friend Harlow!<br>^1000 Harlow: Did you get your ticket yet? I bought mine ages ago...<br>^1200 You don\'t have a ticket yet so hopefully it won\'t be too hard to get one at the door!'],
      typeSpeed: 50,
      startDelay: timer,
      showCursor: false
    }).delay(timer+22000).queue(function(next) {
      scene8();
      next();
    });
};

function scene8() {
    timer = 2000;
    $('#scene7').fadeOut(1000);
    $('#scene8').delay(timer).fadeIn(1000);
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
