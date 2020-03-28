const Users = require("../controllers/user.controller");

module.exports = app => {
    // "/api/users" route returns all users 
    app.get("/api/users", Users.getAll);

    // "/api/users/new" route returns new user
    app.post("/api/users/new", Users.create);

}


// "/api/user/company" route that returns both a new user and a new company?



const Companys = require("../controllers/company.controller");

module.exports = app => {
    // "/api/companys" route returns all companys 
    app.get("/api/companys", Companys.getAll);

    // "/api/companys/new" route returns new company
    app.post("/api/companys/new", Companys.create);

}




