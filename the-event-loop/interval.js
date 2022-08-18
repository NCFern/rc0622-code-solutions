let currentCount = 3;
const finalCountdown = setInterval(
  () => {
    if (currentCount === 0) {
      clearInterval(finalCountdown);
      console.log('Lets Jam!');
    } else {
      console.log(currentCount);
      currentCount--;
    }
  },
  1 * 1000
);
