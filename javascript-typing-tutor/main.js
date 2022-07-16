// keydown event- checks if a certain is pressed //
// query select all span elements //
// underline shows what next key to press (.underline) //
// if correct key is pressed, turns green (.correct) //
// if incorect key is pressed, turns red (.incorrect) //
// underline turns red too (.underline-red) //

var $letters = document.querySelectorAll('span');
var i = 0;

document.addEventListener('keydown', checkKeys);

function checkKeys(event) {
  var letter = $letters[i].innerHTML;
  $letters[i].className = 'underline';

  if (event.key === letter) {
    $letters[i].className = 'correct';
    $letters[i + 1].className = 'underline';
    i++;
  } else {
    $letters[i].className = 'incorrect underline-red';
  }
}
