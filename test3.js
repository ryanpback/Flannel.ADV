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
    //timer+=1000;
    console.log(timer);
    $('.meetHarlow').typed({
      strings: ['On the way to the venue, you run into your friend Harlow!<br>^1000 Harlow: Did you get your ticket yet? I bought mine ages ago...<br>^1200 You don\'t have a ticket yet so hopefully it won\'t be too hard to get one at the door!'],
      typeSpeed: 50,
      startDelay: timer,
      showCursor: false
    });
};
