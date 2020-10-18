const interests = require('./hardCodeInterests');

function interestsController(req,res) {
    res.end(JSON.stringify(interests))
};

module.exports = interestsController;