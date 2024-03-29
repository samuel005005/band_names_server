const { comprobarJWT } = require('../helpers/jwt');
const { usuarioConectado , usuarioDesconectado } = require('../controllers/socket');

module.exports = (io, app) => {

  io.on("connection", client => {

    const [valid , uid] =  comprobarJWT(client.handshake.headers['x-token']);

    if(!valid) { return client.disconnect(); }

    usuarioConectado(uid);

    //Ingresar al usuario a una sala en particular
    //sala global , client.id , uid sala

    require('./events')(io,client,uid);

    console.info(`Cliente Conectado ${uid}`);
    // Call onDisconnect.
    client.on("disconnect", function() {
      usuarioDesconectado(uid);
      console.info(`Cliente desconectado ${uid}`);
    });

  });

  // Register client.io in a global variable
  app.locals.io = io;
};
