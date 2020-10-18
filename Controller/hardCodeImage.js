const image = require ('../model/image');

let imgArray = []
let img1 = new image ('image23.png', '04/11/2019', 'fullsize');
let img2 = new image ('img266.png', '09/01/2020', '345x345');
let img3 = new image ('user3.png', '30/06/2018', 'fullsize');
let img4 = new image ('imgForDatingApp.png', '27/10/2020', '750x690');

imgArray = [img1, img2, img3, img4];

module.exports = imgArray