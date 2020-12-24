const Band = require( "../models/band");

module.exports = (io , socket , bands) => {

    socket.emit('active-bands', {bands: bands.getBands()});
    
    socket.on("message", (payload) => {
        socket.broadcast.emit("message", payload);
        console.log('Received message',payload);
    });
    socket.on("vote-band", (payload) => {
        bands.voteBand(payload['id']);
        io.emit('active-bands', {bands: bands.getBands()});
    }); 

    socket.on("add-band", (payload) => {
        console.log('add-band',payload);
        bands.addBand(new Band(payload['name']));
        io.emit('active-bands', {bands: bands.getBands()});
    });

    socket.on("delete-band", (payload) => {
        console.log('add-band',payload);
        bands.deleteBand(payload['id']);
        io.emit('active-bands', {bands: bands.getBands()});
    });
}