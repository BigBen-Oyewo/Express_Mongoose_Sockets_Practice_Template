const express = require ("express");
const app = express();
const cors = require('cors')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const server = app.listen( 8000, () => { console.log("Server is locked and loaded on port 8000"); } )



// MAKE SURE YOU INSTALL THE FOLLOWING PACKAGES npm install
// mongoose 
// express 
// cors
//socket.io



// to utilize the socket we need to pass invoke a new instance of socket.io and pass it our express server 
const io = require("socket.io")(server);

// Once initialized, we can now set event listeners and event emitters to help pass data along between the server and client. There is one event listener, named "connection", that is required that we must have before we can create our own event listeners. Like this code below
io.on( "connection", socket => {
    // Note! each client that connects gets a socket id.
    // Using the socket to create event listeners and emitters like below
    socket.on( "event_from_client", data => {
        // socket.broadcast will emit to all clients besides the client who is emitting. This function takes 2 arguments: 1) the event name, 2) any data you want to send. like below
        socket.broadcast.emit("send_data_to_all_other_clients", data);

    }); 

    console.log(socket.id);
    // if this is logged in our node terminal, that means a new client has success in logging and has completed a "handshake"

    // we add all of the additional event listeners inside this function. 

    // NOTE! "conection" is a BUILT IN event listener 
});









