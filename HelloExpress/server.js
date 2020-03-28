// In our server.js file we need to import the express module using JavaScript's require() statement, and then invoke express.
// the code below ensures th ability to create routes and send data.
const express = require("express");
const app = express();
const cors = require("cors");



// you can use this code below also to declare the port you want the server for the app to run 
const port = 8000;
app.listen(port, () => console.log(`Server is locked and loaded on port ${port}`));






// In order to be able to access POST data, we need to be able to pull it out of the request object. To do this, we first have to add a new setting to our server.js file like the code below
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(cors());
// The above codes are Express middleware functions. They are responsible for providing and parsing the request.body data.




//  you can use this code below for testing  the server on the port 
app.get("/test", (req, res) => res.json({msg:"it's working right"}));

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express API server is now sending this over to the Browser");
});




// after fufilling the above code go to the package.json file here in our VS CODE, and change "start": "node server.js" to "start":"nodemon server.js"
// When we run the server by default using node server.js we will have to restart the server manually every time we update our code; otherwise, the running app will not reflect the changes. 
// "nodemon server.js"  instead of the regular "node server.js"



// EXAMPLE OF GET data below
app.get("/api/users", (req, res) => {
  const users = [
    { firstName: "Ben", lastName: "Oyewo", email: "benoyewo@blabla.com" },
    { firstName: "Naa", lastName: "Mcgruder", email: "naamcgruder@blabla.com" },
    { firstName: "Ava", lastName: "Tobi", email: "avatobio@blabla.com" },
    { firstName: "Wale", lastName: "Joshua", email: "walejoshua@blabla.com" },
    { firstName: "Jack", lastName: "Jill", email: "jackjill@blabla.com" },
  ];
  return res.json({ alltheUsers: users});
});


// EXAMPLE OF POST data below only after including the middleware, and then get form data
app.post("/api/users/new", (req, res) => {
  console.log(req.body);
  // req.body will have any form context sent from React 
  // we would use req.body to insert a new uer in the database
  const newUser = req.body;
  // then return the new user after creation 
  return res.status(201).json({ newUser: newUser })
});


// EXAMPLE OF Getting Data from a url data below
// if we wanted to retrive a user with a specific specific ID, we would use the following syntax in our url string 
app.get("/api/users/:whateverIWanted", (req, res) => {
  // whatever you typed after the colon in the url 
  // will become the "KEY" in the req.params object 
  console.log(req.params.whateverIWanted);
  // we can also choose to deconstruct the param object like below 
  const { whateverIWanted } = req.params;
  console.log(whateverIWanted);
});


// EXAMPLE OF UPDATE data below
app.put("/api/users/update/:id", (req, res) => {
  // here we would update the user using the id from the params object 
  // and the data from the req.body ogject
  console.log(req.params.id);
  console.log(req.body);
  /////// Update User here/////////
});


// EXAMPLE OF DELETE data below
app.delete("/api/users/delete/:id", (req, res) => {
  // here we would delete the user using the id from th params object 
  console.log(req.params.id);
});