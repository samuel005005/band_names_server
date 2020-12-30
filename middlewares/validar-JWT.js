const { comprobarJWT } = require('../helpers/jwt');

const validarJWT = (req , res, next) => {
    const token =  req.header('x-token'); 

    if(!token) {
      return  res.status(401).json({
            ok:false,
            msg : 'No hay token en la peticion'
        })
    }
    const [valid , uid] =  comprobarJWT(token);

    if(valid){
        req.uid = uid;
        next();
    }else{
        return res.status(401).json({
            ok:false,
            msg:'Token no valido'
        });
    }
}

module.exports = {
    validarJWT
}