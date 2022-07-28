var $leftArrow = document.querySelector('.fa-angle-left');
var $rightArrow = document.querySelector('.fa-angle-right');
// var $section = document.querySelectorAll('.section');

$leftArrow.addEventListener('click', swapLeft);
$rightArrow.addEventListener('click', swapRight);

function swapLeft(event) {

}

function swapRight(event) {

}

//   if (event.target.matches('.fa-angle-right')) {
//     for (var i = 0; i < $section.length; i++) {
//       if ($rightArrow[i] === event.target) {
//         $section[i].className = 'section active';
//       } else if ($section[i] !== event.target) {
//         $section[i].className = 'section hidden';
//       }
//     }
//     var $dataView = event.target.getAttribute('data-view');
//     for (var j = 0; j < $section.length; j++) {
//       if ($section[j].getAttribute('data-view') === $dataView) {
//         $section[j].className = 'view';
//       } else if ($section[j].getAttribute('data-view') !== $dataView) {
//         $section[j].className = 'view hidden';
//       }
//     }
//   }
// }
