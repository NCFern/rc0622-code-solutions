var musicBox = [
  'images/OHW-IMeltWithYou.jpeg',
  'images/OHW-HeyMickey.jpeg',
  'images/OHW-MamboNo5.jpeg',
  'images/OHW-MexicanRadio.jpeg',
  'images/OHW-Mmmbop.jpeg'
];
var $leftArrow = document.querySelector('#left');
var $rightArrow = document.querySelector('#right');
var $circle = document.querySelectorAll('.fa-circle');
var $picture = document.querySelector('.picture');
var $circleContainer = document.querySelector('.circle-container');

var count = 0;
var timer = setInterval(swapRight, 3 * 1000);

$rightArrow.addEventListener('click', swapRight);

function swapRight(event) {
  for (var i = 0; i < musicBox.length; i++) {
    $circle[count].className = 'fa-regular fa-circle';
    if ($picture.src.includes(musicBox[i])) {
      $picture.setAttribute('src', musicBox[i + 1]);
      $circle[count + 1].className = 'fa-solid fa-circle';
      count++;
      break;
    } else if ($picture.src.includes(musicBox[4])) {
      $picture.setAttribute('src', musicBox[0]);
      count = 0;
      $circle[count].className = 'fa-solid fa-circle';
      break;
    }
  }
  clearInterval(timer);
  timer = setInterval(swapRight, 3 * 1000);
}

$leftArrow.addEventListener('click', swapLeft);

function swapLeft(event) {
  for (var i = musicBox.length; i >= 0; i--) {
    $circle[count].className = 'fa-regular fa-circle';
    if ($picture.src.includes(musicBox[0])) {
      $picture.setAttribute('src', musicBox[4]);
      $circle[4].className = 'fa-solid fa-circle';
      count = 4;
      break;
    } else if ($picture.src.includes(musicBox[i])) {
      $picture.setAttribute('src', musicBox[i - 1]);
      $circle[count - 1].className = 'fa-solid fa-circle';
      count--;
      break;
    }
  }
  clearInterval(timer);
  timer = setInterval(swapRight, 3 * 1000);
}

$circleContainer.addEventListener('click', circleSelect);

function circleSelect(event) {
  if (event.target.tagName === 'I') {
    count = parseInt(event.target.getAttribute('id'));
    for (var i = 0; i < $circle.length; i++) {
      $circle[i].className = 'fa-regular fa-circle';
      if (i === parseInt(event.target.getAttribute('id'))) {
        $circle[i].className = 'fa-solid fa-circle';
        $picture.setAttribute('src', musicBox[i]);
      }
    }
  }
  clearInterval(timer);
  timer = setInterval(swapRight, 3 * 1000);

}
