var $container = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$container.addEventListener('click', viewSwap);

function viewSwap(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else if ($tab[i] !== event.target) {
        $tab[i].className = 'tab';
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    for (var j = 0; j < $view.length; j++) {
      if ($view[j].getAttribute('data-view') === $dataView) {
        $view[j].className = 'view';
      } else if ($view[j].getAttribute('data-view') !== $dataView) {
        $view[j].className = 'view hidden';
      }
    }
  }
}
