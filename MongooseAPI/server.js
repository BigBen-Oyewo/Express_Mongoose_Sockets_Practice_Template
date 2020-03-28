// this below imports "express" into this server.js file
const express = require("express");
const app = express();
const cors = require("cors");

// both code below are express middleware functions. They are responsible for providing and parsing the request.body data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// this below imports "faker" into this server.js file
const faker = require("faker");

// you can use this code below also to declare the port you want the server for the app to run 
const port = 8000;

const db_name = "user_companydb";


app.listen(port, () => console.log(`Server is locked and loaded on port ${port}`));

 
// after fufilling the above code go to the package.json file here in our VS CODE, and change "start": "node server.js" to "start":"nodemon server.js"
// When we run the server by default using node server.js we will have to restart the server manually every time we update our code; otherwise, the running app will not reflect the changes. 
// "nodemon server.js"  instead of the regular "node server.js"



// REQUIRING ROUTES BELOW
require("./server/config/mongoose")(db_name);
require("./server/routes/user.route")(app);
require("./server/routes/company.route")(app);





// req is short for request
// res is short for response

//  you can use the codes below for testing  the server on the port 
app.get("/test", (req, res) => res.json({msg:"it's working right"}));

app.get("/api", (req, res) => {
  res.send("Our express API server is now sending this over to the Browser");
});












