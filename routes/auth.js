/*
 path : api/user
*/

const { Router} = require('express');
const { check } = require('express-validator');
const router = Router();

const {crearUsuario, login,renewToken} = require('../controllers/auth');
const {validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-JWT');

router.post('/new', [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').not().isEmpty(),
    check('password','El password debe ser mayor a dos caracteres').isLength({ min: 3 }),
    check('email','El email es invalido').isEmail(),
    validarCampos
],crearUsuario);

router.post('/login', [
    check('email','El email es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos
], login);

 router.get('/renew', validarJWT,renewToken);

module.exports = router;