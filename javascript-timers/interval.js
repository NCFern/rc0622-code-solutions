
var getMessage = document.querySelector('.countdown-display');
var finalCountdown = 4;

function timeCode() {
  finalCountdown--;
  if (finalCountdown > 0) {
    getMessage.textContent = finalCountdown;
  } else {
    getMessage.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}

var interval = setInterval(timeCode, 1000);
