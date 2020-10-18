//definerer model-klasse for User og opretter relevante atributter til 'user'

class User {
    constructor(email, firstName, lastName, age, interest, match, image, gender, password) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.interest = interest;
        this.match = match;
        this.image = image;
        this.gender = gender;
        this.password = password;
    }
};
    

//eksporter user
module.exports = User;
