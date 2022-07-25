/* exported student */

var student = {
  firstName: 'Haruhi',
  lastName: 'Suzumiya',
  subject: 'aliens, time travelers, and espers',

  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },

  getIntroduction: function () {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }

};
