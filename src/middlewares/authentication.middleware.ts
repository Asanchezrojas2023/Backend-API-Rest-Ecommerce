
import { Request, Response, NextFunction, json } from "express"
import { verify } from "jsonwebtoken";
import { RequestExtends } from "../interfaces/RequestExtends.interface";
// 1. Procesando la cadena de autorizacion para extraer el token

const autheticationUser = ( req:RequestExtends, res:Response, next:NextFunction ) => {
    try {
        const bearerToken = req.headers.authorization || ''; // Bearer 99999999999
const arrBearertoken = bearerToken.split( ' ' ); //['Bearer', '99999999999']
const token = arrBearertoken.pop();                     // 999999999

//2. Verificar la autenticidad del token
const payload = verify( `${token}`, `${process.env.JWT_SECRET_KEY}`);

//3.Verificar si NO hay carga util
if (! payload) {
    return res.json({
       msg:'INVALID_TOKEN'
    });
}
//{
//4. Extraer la carga util
// userId: userFound._Id
// rol: userFound.rol,
//name: userFound.nombre
//}

const { userId, rol, name } = payload as { userId: string, rol: string, name: string };
console.log( userId, rol, name );
// Agregamos los valores del token al objeto Request de Express usando una nueva interface (Herencia)
req.authUser = { userId, rol, name }




next();
        
    } catch (error) {
       res.json({
        msg: 'INVALID_AUTENTICATION'
       });
    }

}

export{
    autheticationUser
};