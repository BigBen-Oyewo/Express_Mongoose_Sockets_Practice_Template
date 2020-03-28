const Users = require("../controllers/user.controller");


module.exports = app => {
    // "/api/users" route returns all users 
    app.get("/api/users", Users.getAll);

    // "/api/users/random" route returns a random user USING MONGOOSE
    app.get("/api/users/random", Users.random);

    // "/api/users/new" route returns new user
    app.post("/api/users/new", Users.create);

    // "/api/users/:_id" route deletes a user USING MONGOOSE
    app.delete("/api/users/:_id", Users.delete);
}


