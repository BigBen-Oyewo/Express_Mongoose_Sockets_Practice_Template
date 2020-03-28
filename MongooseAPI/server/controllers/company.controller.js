// THIS CODE BELOW FOR USING MONGOOSE AS A CONTROLLER 
const mongoose = require("mongoose");

const Company = require("../models/company.model");


class CompanyController {

  // this code to get all companys 
  getAll(req, res) {
    Company.find({})
      .then( companys => res.json(companys))
      .catch( err => res.json(err));
  }
  // this code below to get new users
  create(req, res) {
    let newCompany = new Company(req.body);
    newCompany.save()
      .then( () => res.json({msg: "Company added"}) )
      .catch( err => res.json(err) );
  }
  // this code below to delete company
  delete(req, res) {
    Company.findByIdAndDelete({_id: req.params._id})
      .then(res.json({msg: "Company deleted"}))
      .catch( err => res.json(err));
  }
  // this code below to select random company
  random (req, res) {
    Company.find({})
      .then( companys => { 
        let rI = Math.floor(Math.random()*companys.length);
        res.json({company: companys[rI]});
      }) 
      .catch( err => res.json(err));
  }
  
}

module.exports = new CompanyController();
