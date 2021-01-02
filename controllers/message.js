const {  response } = require('express');
const Message = require('../models/message');

const getMessages = async (req , res = response ) => {
    const myId =  req.uid;
    const messagefrom = req.params.from;

    const desde = Number(req.query.desde) || 0;

    const messages = await Message.find(
        {
            $or:[
                { From:myId,To:messagefrom},
                { From:messagefrom,To:myId}
            ]
        }).sort(
            {createdAt:'desc'}
        ).skip(desde).limit(30);

    res.status(200).json({  
        ok:true,
        messages
    });
}
module.exports = {
    getMessages
}