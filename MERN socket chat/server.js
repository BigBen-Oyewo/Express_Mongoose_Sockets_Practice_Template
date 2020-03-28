const express = require ("express");
const app = express();
const cors = require('cors')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const server = app.listen( 8000, () => { console.log("Server is locked and loaded on port 8000"); } )



// MAKE SURE YOU INSTALL THE FOLLOWING PACKAGES npm install
// jsonwebtoken
// bcrypt
// mongoose 
// express 
// cors
// cookie-parser
// --save mongoose-unique-validator
//socket.io



// to utilize the socket we need to pass invoke a new instance of socket.io and pass it our express server 
const io = require("socket.io")(server);

io.on( "connection", socket => {
        
    console.log(socket.id);

    socket.broadcast.emit("hello", "hello from the server");
    socket.on("join", data => {
        socket.broadcast.emit("newUser", data);
    });

    socket.on("sentMessage", data => {
        socket.broadcast.emit("receiveMessage", data);
    });
    
});







