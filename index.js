const http = require("http");
const express = require("express");
require("dotenv").config();

//DB Config
 require('./database/config').dbConnection();
// App express
const path = require('path');
const app = express();

// Lectura y parseo del body

app.use(express.json());

// path publico
const publicPath = path.resolve( __dirname, 'public');
app.use(express.static(publicPath));

// Mis Rutas
require('./routes/index')(app);
// Node server
const server = http.createServer(app);
server.listen(process.env.PORT);

server.on("listening", onListening);
    
const io = require("socket.io")(server);

require("./socket/socket")(io, app);

function onListening() {
  console.log("Listening on "+process.env.PORT );
}
