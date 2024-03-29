import { hash } from "bcryptjs";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import AuthModel from "../models/auth.models";

const registerNewUser =  async ( newUser: User ) => {
    // 1. Consultar en la BD si existe  el usuario
    const userFound = await AuthModel.findOne({ email: newUser.email});

    // verificar si el usuario existe

    if (userFound) {
        return 'USER_ALREADY_EXISTS';
    }

    const hashPassword = await hash( newUser.password, 9 );
    newUser.password = hashPassword;

    //2. Registra el usuario si no existe
    const response = await AuthModel.create( newUser );

    return response;
} 

const loginUser = async (user: Auth) => {

    console.log( user );
    
    //1.Consultar en la BD si el ususrio no existe
    const userFound = await AuthModel.findOne({email: user.email });
    // verificando si el usuario NO existe
    if ( ! userFound ) {
        return 'USER_NOT_FOUND';
    }

    //2. Verficar si la contrasenia es correcta
    if ( user.password != userFound.password ) {
        return'WRONG_PASSWORD'
    }
        
    
   /* const JWT_SECRET = process.env.JWT_SECRET-KEY || 'otr4-cl4v3-s3cr3t4'
crear token = sign (

)*/

}

export {
    registerNewUser,
    loginUser 
};