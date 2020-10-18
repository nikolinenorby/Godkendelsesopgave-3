//laver nedarvning fra User.js

const User = require('./user');

class paymentUser extends User {
    constructor (email, firstName, lastName, age, interest, match, image, gender, password, creditCardNumber, cdExpDate, cdCVC) {
        super (email, firstName, lastName, age, interest, match, image, gender, password)
        this.creditCardNumber = creditCardNumber
        this.cdExpDate = cdExpDate
        this.cdCVC = cdCVC
    }
};

//exporterer den nye class
module.exports = paymentUser;