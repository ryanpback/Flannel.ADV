$(function() {
  scene6();
});

function scene6() {
    $('#scene6').show();
    timer = 0;
    $('.scene6Text').typed({
      strings: ['Outside the bike shop you notice a girl holding Peta signs, eating what you recognize to be a hemp flavored honey stick from your local farmers market.^1000 You can\'t help but point out that she\'s contradicting her morals and supporting bee slavery.'],
      typeSpeed: 50,
      startDelay: timer,
      showCursor: false
    });
    timer+=5000;
    var character = "josh";
    var name = "Sherman"
    $('.bikeGuy').fadeOut(1000);
    $('.veganPoser').delay(timer).fadeIn(1000);
    timer+=20000;
    $('.scene6Text').delay(timer).fadeOut(1000);
    timer+=1000;
    $('.veganText').typed({
      strings: ['Vegan Poser: ^1000 I have my own backyard bees that are loved and cared for; they are definitely not slaves!'],
      typeSpeed: 50,
      startDelay: timer,
      showCursor: false
    });
};
