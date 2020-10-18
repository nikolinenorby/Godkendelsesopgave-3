//opretter classes for appens funktioner

class match {
    constructor(match){
        this.match = match;
    }
};
module.exports = match;


class interests {
    constructor(hobbies, sexuality) {
        this.hobbies = hobbies;
        this.sexuality = sexuality;
    }
};
module.exports = interests;


class image {
    constructor(fileName, fileUpload, size) {
        this.fileName = fileName;
        this.fileUpload = fileUpload;
        this.size = size;
    }
};
module.exports = image;