const mongoose = require("mongoose");
// ONE TO ONE RELATIONSHIPS BELOW
// A super simple example of a User schema that can have many friends might look like this below 
const UserSchema = new mongoose.Schema({
	fName: String,
  lName: String,
  friends: [UserSchema]
});

// Nesting documents can look super simple but we need to take caution because it can become real easy to store duplicated in our database. 

// ONE TO MANY RELATIONSHIPS BELOW
// Let's run through a little more complex example. Say we are creating a Bank account application. Our User schema would like something like this below. THIS BELOW WIL BE IN THE ".models/user.model.js" file
const UserSchema = new mongoose.Schema(
  {
    fName: String,
    lName: String,
    email: String,
    password: String,
    bankAccounts: [BankAccountSchema]
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;

// Since one user can have many bank accounts, we determine that relationship by nesting the BankAccountSchema into an array. This basically means the field bankAccounts will be an array of nothing but BankAccount objects.

// MANY TO MANY RELATIONSHIPS BELOW
// Since each bank account can have many transactions, we can nest a TransactionSchema into our BankAccountSchema.  THIS BELOW WIL BE IN THE ".models/bank.model.js" file

const TransactionSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    vender: { type: String, required: true }
  },
  { timestamps: { createdAt: true } }
);

const BankAccountSchema = new mongoose.Schema(
  {
    accountType: { type: String, required: true },
    balance: { type: Number, default: 0 },
    transactions: [TranscationSchema]
  },
  { timestamps: true }
);


