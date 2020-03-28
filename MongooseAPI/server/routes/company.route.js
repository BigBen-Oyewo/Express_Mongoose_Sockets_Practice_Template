const Companys = require("../controllers/company.controller");


module.exports = app => {
    // "/api/companys" route returns all companys 
    app.get("/api/companys", Companys.getAll);

    // "/api/users/random" route returns a random company USING MONGOOSE
    app.get("/api/companys/random", Companys.random);

    // "/api/companys/new" route returns new company
    app.post("/api/companys/new", Companys.create);

    // "/api/companys/:_id" route deletes a company USING MONGOOSE
    app.delete("/api/companys/:_id", Companys.delete);
}

    
