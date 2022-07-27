setTimeout(timeCode, 2 * 1000);

var getMessage = document.querySelector('.message');

function timeCode() {
  getMessage.textContent = 'Hello There';
}
