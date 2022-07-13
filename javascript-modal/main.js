// when blue-modal-button is clicked, modal screen pops up //
// modal-start -> modal-clicked //
// when red-no-button is clicked, modal screen goes away //
// modal clicked -> modal start //

var $blueButton = document.querySelector('.blue-modal-button');
var $redButton = document.querySelector('.red-no-button');
var $modal = document.querySelector('.modal-start');

$blueButton.addEventListener('click', openModal);
$redButton.addEventListener('click', closeModal);

function openModal(event) {
  $modal.className = 'modal-clicked';
}

function closeModal(event) {
  $modal.className = 'modal-start';
}
