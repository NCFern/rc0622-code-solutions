var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', taskManager);

function taskManager(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var $closestTaskItem = event.target.closest('.task-list-item');
    console.log('closest .task-list-item: ', $closestTaskItem);
    $closestTaskItem.remove();
  }
}
