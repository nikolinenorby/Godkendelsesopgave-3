const match = require ('./hardCodeMatch');

function matchController(req,res) {
    res.end(JSON.stringify(match))
};

module.exports=matchController;
