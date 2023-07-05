import { Product } from "../interfaces/product.interface";
import productsModel from "../models/products.model";

const insertProduct = async ( product: Product) => {
const response = await productsModel.create( product );

 return response;
 
}

export{
    insertProduct
}