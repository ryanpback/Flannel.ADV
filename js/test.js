$(function() {
  var wakeUpText = "<p>You wake up...^1000 mattress on the floor...^1000 exhausted from a long night of cross stitching and updating your etsy account.^1000<br> You can feel the slight hangover from the mix of PBR and brown sugar maple whiskey you drank last night.^1000<br> The phone rings.^1000 It's your friend Harlow on the line.</p>";
	var phoneText = "<p>Harlow: Hey, are you going to the show tonight?^1000<br> You've probably never heard of them,^1000 but it's an indie synth band from Iceland.^1000<br> Starts at 7:30 at 'Club Foot.'^1000 Hope to see you there!</p>"
  $('.wakeUpText').typed({
    strings: [wakeUpText],
    typeSpeed: 50,
    showCursor: false
  });
  $('.wakeUpText').delay(32000).fadeOut(1000);
  $('.phoneText').typed({
    strings: [phoneText],
    typeSpeed: 50,
    startDelay: 33000
  });
  $('.outsideText').typed({
    strings: ["<p>Normcore tattooed tumblr activated charcoal, quinoa humblebrag umami hammock tofu cardigan next level farm-to-table kombucha. Roof party unicorn wolf slow-carb swag, semiotics aesthetic bushwick bicycle rights. Single-origin coffee asymmetrical edison bulb man bun tbh. Four dollar toast bespoke wolf, bushwick</p>"],
    typeSpeed: 50,
  });
})
