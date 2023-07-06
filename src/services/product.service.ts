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

export{
    insertProduct,
    getAllProducts,
    getProductById,
    removeProductById
}