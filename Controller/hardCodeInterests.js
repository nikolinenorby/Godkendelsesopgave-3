const interests = require ('../module/intersts');

let interestsArray = [];
let interests1 = new interests (['Pluto', 'sailing' , 'cooking'], 'heterosexual');
let interests2 = new interests (['Rip Rap & Rup', 'dancing' , 'painting'], 'heterosexual');
let interests3 = new interests (['Money', 'Swimming in money' , ''], 'heterosexual');
let interests4 = new interests (['Shoes', 'Butterflies' , 'reading'], 'bisexual');

interestsArray = [interests1, interests2, interests3, interests4];

module.exports = interestsArray