const mongoose = require ("mongoose");


// THE CODE BELOW IS USING MONGOOSE TO CREATE SCHEMAS WITH VALIDATIONS 

const CompanySchema = new mongoose.Schema ({
    name: String,
    worth: Number,
    street: String,
    city: String,
    state: String,
    zipCode: {
        type: Number,
        required: [true, "Company address must have a zip code"],
        max: [5, "Company address zipcode must be in the correct format of 5 characters"]
    },
    country: String
}, {timestamps: true});

module.exports = mongoose.model( 'Company', CompanySchema);






// THE CODE BELOW IS USING MONGOOSE TO CREATE SCHEMAS WITHOUT VALIDATIONS 

// const CompanySchema = new mongoose.Schema ({
//     name: String,
//     worth: Number,
//     street: String,
//     city: String,
//     state: String,
//     zipCode: Number,
//     country: String
// }, {timestamps: true});

// module.exports = mongoose.model( "Company", CompanySchema);



