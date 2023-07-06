import { getProduct } from "../controllers/product.controller";
import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/products.model";
import productsModel from "../models/products.model";

const insertProduct = async ( product: Product) => {
const response = await productsModel.create( product );

 return response;
 
}

const getAllProducts = async () => {
    return await ProductModel.find ({});
}

const getProductById = async ( productId: string ) => {
   return await ProductModel.findOne ({ _id: productId});
}

const  removeProductById = async ( productId: string) => {
    return await ProductModel.findOneAndRemove({_id:productId});
    
}

const updateProductById = async (productId: string, updateProduct: Product) => {
return await ProductModel.findOneAndUpdate(
    { _id: productId}, // Id del documento que deseammos actualizar
    updateProduct,       // el documento poor elk que vamos a actualizar
    { new: true} // configuracion para el comando Update
    );
}

export{
    insertProduct,
    getAllProducts,
    getProductById,
    removeProductById,
    updateProductById
}