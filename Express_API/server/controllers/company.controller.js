// / THIS CODE BELOW FOR USING EXPRESS AS A CONTROLLER
const Company = require("../models/class.model");

const companys = [
    new Company("MTN", "1000", "5 Red lane", "Columbia", "Maryland", "21044", "USA"),
    new Company("TMobile", "5000", "3 Orange hill", "Vienna", "Virgina", "54837", "USA"),
    new Company("GLO", "3000", "8 Pink path", "SilverSpring", "Califonia", "56492", "USA"),
    new Company("Airtel", "1800", "2 Green cresent", "Baltimore", "Iowa", "67399", "USA"),
    new Company("Verison", "4000", "4 Blue road", "Laurel", "Tennesse", "38973", "USA")
];


class CompanyController {

  // to get all companys 
  getAll(req, res) {
    res.json(companys);
  }
  // this code below to get new users
  create(req, res) {
    let newCompany = new Company(req.body.name, req.body.worth, req.body.street, req.body.city, req.body.state, req.body.zipCode, req.body.country);
    companys.push(newCompany);
    res.json({msg: "Company added"});
  }
  
}

module.exports = new CompanyController();












