/*
 path : api/users
*/

const { Router} = require('express');
const { getUsers } = require('../controllers/users');
const router = Router();

const { validarJWT } = require('../middlewares/validar-JWT');

 router.get('/', validarJWT, getUsers);

module.exports = router;