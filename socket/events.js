const { saveMessage } =  require('../controllers/socket');

const events = (io , client , uid) => {

    client.join(uid); /// Crea una sala

    client.on('mensaje-personal', async (payload) => {  
        // To == Envia a una Sala
        await saveMessage( payload );
        io.to(payload.To).emit('mensaje-personal',payload);
    });
}

module.exports = events;