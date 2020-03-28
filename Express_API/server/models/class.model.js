// const faker = require("faker");

// USING "FAKER" below as a javascript library to populate random data in the database for testing

// class User {
//     constructor() {
//         this._id = faker.random.number();
//         this.firstName = faker.name.firstName();
//         this.lastName = faker.name.lastName();
//         this.phoneNumber = faker.phone.phoneNumber();
//         this.email = faker.internet.email();
//         this.password = faker.internet.password();
//     }
// }
// console.log(new User());

// class Company {
//     constructor() {
//         this._id = faker.random.number();
//         this.name = faker.company.companyName();
//         this.worth = `$${faker.finance.amount()}`;
//         this.address = [faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.address.country()];
//     }
// }
// console.log(new Company());



// TTHE CODE BELOW IS USING EXPRESS TO FILL IN THE INFORMATION MANUALLY INTO THE DATABASE

class User {
    constructor(firstName, lastName, phoneNumber, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }
}
module.exports = User;

class Company {
    constructor(name, worth, street, city, state, zipCode, country) {
        this.name = name;
        this.worth = worth;
        this.street = street; 
        this.city = city;
        this.state = state; 
        this.zipCode = zipCode; 
        this.country = country;
    }
}
module.exports = Company;



