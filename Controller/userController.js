//henter User model
const User = require('../Model/user');

//controller
function userController(req, res) {
    res.end(JSON.stringify(User1))
}

//eksporter controlleren
module.exports = userController;

