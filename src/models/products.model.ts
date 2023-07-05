// las estructura que de finamos se vera reflejada en nuestra base de datos 

import {Schema, model} from "mongoose";
// define estructura de datos en la base de datos requerida por mongoose
const productSchema = new Schema(
    // objeto pricipal definira los valores o atributos de ese modelo
    {
        name: {
            type: String,
            required: true
        },

        price : {
            type: Number,
            required: false
        },
        description:{
            type: String
        }
    },
    // segundo objeto definira configuraciones que se pueden aplicar en mogoose para ese objeto
    {
        timestamps: true
    }
);

// define el modelo a partir de unas estructura requerida por mongoose
const ProductModel= model ('Products', productSchema);

export default ProductModel;