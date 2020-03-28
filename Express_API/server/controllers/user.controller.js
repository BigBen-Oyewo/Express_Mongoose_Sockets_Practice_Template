// THIS CODE BELOW FOR USING EXPRESS AS A CONTROLLER
const User = require("../models/class.model");

const users = [
    new User("Ben", "Oyewo", "12345678", "benoyewo@blabla.com", "qwerty"),
    new User("Naa", "Mcgruder", "28956738", "naamcgruder@blabla.com", "shjfiw"),
    new User("Ava", "Tobi", "08466686", "avatobio@blabla.com", "hdklkl"),
    new User("Wale", "Joshua", "29845638", "walejoshua@blabla.com", "ufisfo"),
    new User("Jack", "Jill", "34567867", "jackjill@blabla.com", "hfnbgl")
];


class UserController {

  // this code below to get all users 
  getAll(req, res) {
    res.json(users);
  }
  // this code below to get new users
  create(req, res) {
    let newUser = new User(req.body.firstName, req.body.lastName, req.body.phoneNumber, req.body.email, req.body.password);
    users.push(newUser);
    res.json({msg: "User added"});
  }

}

module.exports = new UserController();











