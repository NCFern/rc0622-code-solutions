// switch between (bulb-on + background-on) to (bulb-off + background-off) //
// query select bulb and background so they can be changed in the function //
// add event listener for bulb that listens for clicks //
// make a function that when clicked, bulb/background go from on/off //

var $bulb = document.querySelector('.bulb-on');
var $background = document.querySelector('.background-on');
var clicked = true;

$bulb.addEventListener('click', lightSwitch);

function lightSwitch(event) {
  clicked = !clicked;
  if (clicked) {
    $bulb.className = 'bulb-on';
    $background.className = 'background-on';
  } else {
    $bulb.className = 'bulb-off';
    $background.className = 'background-off';
  }
}
