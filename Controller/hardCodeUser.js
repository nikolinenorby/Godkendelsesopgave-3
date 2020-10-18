const freeUser = require ('../model/freeUser');
const paymentUser = require ('../model/paymentUser');
const MatchArray = require ('./hardCodeMatch');
const imgArray = require ('./hardCodeImg');
const interestsArray = require ('./hardCodeInterests');

let userArray = []
let Mickey = new freeUser ('Mickey', 'Mouse', 30, 'male', interestsArray[0], imgArray[0], MatchArray[0],'Pluto1234');
let Anders = new freeUser ('Anders', 'And', 35, 'male', interestsArray[1], imgArray[1], MatchArray[1],'RipRapRup');
let Joakim = new paymentUser ('Joakim', 'Von And', 70, 'male', interestsArray[2], imgArray[2], MatchArray[2],'JegElskerPenge1000');
let Mini = new paymentUser ('Mini', 'Mouse', 31, 'female', interestsArray[3], imgArray[3], MatchArray[3],'lyserødSløjfe246');

userArray = [Mickey, Anders, Joakim, Mini];

module.exports = userArray

console.log (userArray);