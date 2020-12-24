const http = require("http");
const express = require("express");
require("dotenv").config();
const path = require('path');
const app = express();
// path publico
const publicPath = path.resolve( __dirname, 'public');

app.use(express.static(publicPath));

const server = http.createServer(app);

server.listen(process.env.PORT);

server.on("listening", onListening);

const io = require("socket.io")(server);

require("./socket/socket")(io, app);

function onListening() {
  console.log("Listening on "+process.env.PORT );
}
