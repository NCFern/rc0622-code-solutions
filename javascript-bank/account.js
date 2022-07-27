/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (typeof amount !== 'number' || amount <= 0 || !Number.isInteger(amount) || isNaN(amount)) {
    return false;
  }
  var newTransaction = new Transaction('deposit', amount);
  this.transactions.push(newTransaction);
  return true;

};

Account.prototype.withdraw = function (amount) {
  if (typeof amount !== 'number' || amount <= 0 || !Number.isInteger(amount) || isNaN(amount)) {
    return false;
  }
  var newTransaction = new Transaction('withdrawal', amount);
  this.transactions.push(newTransaction);
  return true;
};

Account.prototype.getBalance = function () {
  var totalDeposits = 0;
  var totalWithdrawals = 0;

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      totalDeposits += this.transactions[i].amount;
    } else {
      totalWithdrawals += this.transactions[i].amount;
    }
  }
  return totalDeposits - totalWithdrawals;

};
