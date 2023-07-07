// las estructura que de finamos se vera reflejada en nuestra base de datos 

import {Schema, model} from "mongoose";
// define estructura de datos en la base de datos requerida por mongoose
const authSchema = new Schema(
    // objeto pricipal definira los valores o atributos de ese modelo
    {
        nombre: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            required: true,
            default: 'registered'
        },
        email:{
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        }
        

    },
    // segundo objeto definira configuraciones que se pueden aplicar en mogoose para ese objeto
    {
        timestamps: true
    }
);

// define el modelo a partir de unas estructura requerida por mongoose
const AuthModel = model ('Users', authSchema);

export default AuthModel;