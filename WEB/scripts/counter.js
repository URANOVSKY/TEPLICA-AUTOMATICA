//in settings, add jquery for this
var counter = 27.5

$('#counter').html(counter)

$('#minus').click(() => {
  counter = counter - 0.5;
  if (counter < 20) counter = 35;
  $('#counter').html(counter)
});

$('#plus').click(() => {
  counter = counter + 0.5;
  if (counter > 35) counter = 20;
  $('#counter').html(counter)
});


//extra: SPACE to reset counter
//change colors if below or above -10/10 i.e.