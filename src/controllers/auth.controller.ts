
import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";



const register = async ( req: Request, res: Response ) => {
    const user = req.body;
// TODO Encriptar contrasenia
    try {
        const response = await registerNewUser ( user );
// TODO No enviar la propiedad de contraseñia al cliente
        res.json(response);

    } catch (error) {
        console.log( `error en el registro del usuario` );
    res.json ({
    msg:'ERROR_REGISTER_USER'
    });
  }
  
}
    
const login = async ( req: Request, res: Response ) => {
    const user = req.body;
    
    try {
        const response = await loginUser( user );
        console.log( response );
        

    } catch (error) {
        console.log( `error en el acceso del usuario al sistema` );
        res.json ({
        msg:'ERROR_LOGIN_USER'
        }); 
    }
}

export {
    register, login
};