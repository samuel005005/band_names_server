/*
 path : api/messages
*/

const { Router} = require('express');
const { getMessages } = require('../controllers/message');
const router = Router();

const { validarJWT } = require('../middlewares/validar-JWT');

 router.get('/:from', validarJWT, getMessages);

module.exports = router;