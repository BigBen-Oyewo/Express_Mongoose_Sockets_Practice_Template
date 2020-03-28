const UserController = require("../controllers/user.controller");

module.exports = app => {
  app.get("/api/users/", UserController.findAllUsers);
  app.get("/api/users/:id", UserController.findOneSingleUser);
  app.put("/api/users/update/:id", UserController.updateExistingUser);
  app.post("/api/users/new", UserController.createNewUser); //returns validation errors if post request fails
  app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
};