
var counter = 27.5

$('#counter').html(counter+"°С")

$('#minus').click(() => {
  counter = counter - 0.5;
  if (counter < 20) counter = 35;
  $('#counter').html(counter+"°С")
});

$('#plus').click(() => {
  counter = counter + 0.5;
  if (counter > 35) counter = 20;
  $('#counter').html(counter+"°С")
});
