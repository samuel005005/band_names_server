const Bands = require( "../models/bands");
const Band = require( "../models/band");

const bands = new Bands();

bands.addBand(new Band('Tercer Cielo'));
bands.addBand(new Band('Barak'));
bands.addBand(new Band('Aposento Alto'));
bands.addBand(new Band('Redimi2'));
bands.addBand(new Band('Ariel Kelly'));

console.log('init Server');

module.exports = (io, app) => {

  io.on("connection", socket => {
    socket.address =
      socket.handshake.address !== null
        ? socket.handshake.address
        : process.env.DOMAIN;

    socket.connectedAt = new Date();

    console.info(`[%s] Cliente Conectado ${socket.id}`, socket.address);
    // Call onDisconnect.
    socket.on("disconnect", function() {
      console.info("Perdimos conexion con el cliente", socket.address);
    });

    require("./events")(io,socket, bands);

  });

  // Register socket.io in a global variable
  app.locals.io = io;
};
