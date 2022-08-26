const takeAChance = require('./take-a-chance');

const honeyImStillFree = takeAChance('Nick');
honeyImStillFree
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error.message);
  });
