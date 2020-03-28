const mongoose = require ("mongoose");


// THE CODE BELOW IS USING MONGOOSE TO CREATE SCHEMAS WITH VALIDATIONS 

const UserSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: [true, "User's must have a first name"],
       
        minlength: [3, "User's first name must be 3 characters or more"]
    },
    lastName: {
        type: String,
        required: [true, "User's must have a last name"],
        minlength: [3, "User's last name must be 3 characters or more"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "User's must have a phone number"],
        minlength: [10, "User's phone number must be 10 characters"]
    }, 
    email: {
        type: String,
        required: [true, "User's email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    }, 
    password: {
        type: String,
        required: [true, "Users's password is required"],
        minlength: [8, "User's password must be 8 characters or longer"] 
    }
}, {timestamps: true});

module.exports = mongoose.model( 'User', UserSchema);






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



 
