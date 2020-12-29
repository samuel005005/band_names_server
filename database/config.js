const mongoose = require('mongoose');
require("dotenv").config();
const dbConnection = async() => {
    try {
        console.log(process.env.DB_CNN);
        await mongoose.connect(process.env.DB_CNN, {
           useNewUrlParser: true, 
           useUnifiedTopology: true,
           useCreateIndex : true
        });
       console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos - Hable con el admin');
    }
}

module.exports = {
    dbConnection
}