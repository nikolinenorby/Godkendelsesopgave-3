//laver nedarvning fra User.js

const User = require('./user');
class freeUser extends User {
    constructor (email, firstName, lastName, age, interest, match, image, gender, password) {
        super (email, firstName, lastName, age, interest, match, image, gender, password)
    }
};

//exporterer den nye class
module.exports = freeUser;