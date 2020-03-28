// THIS CODE BELOW FOR USING MONGOOSE AS A CONTROLLER 
const mongoose = require("mongoose");

const User = require("../models/user.model");


class UserController {

  // this code below to get all users 
  getAll(req, res) {
    User.find({})
      .then( users => res.json(users))
      .catch( err => res.json(err));
  }
  // this code below to get new users
  create(req, res) {
    let newUser = new User(req.body);
    newUser.save()
      .then( () => res.json({msg: "User added"}) )
      .catch( err => res.json(err) );
  }
  // this code below to delete users
  delete(req, res) {
    User.findByIdAndDelete({_id: req.params._id})
      .then(res.json({msg: "User deleted"}))
      .catch( err => res.json(err));
  }
  // this code below to select random user
  random (req, res) {
    User.find({})
      .then( users => { 
        let rI = Math.floor(Math.random()*users.length);
        res.json({user: users[rI]});
      }) 
      .catch( err => res.json(err));
  }
  
}

module.exports = new UserController();

