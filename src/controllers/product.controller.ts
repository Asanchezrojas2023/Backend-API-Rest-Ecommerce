
import { Request, Response }  from "express";

function getProducts( req: Request, res:Response ){
console.log('Obtiene todos los productos');
}
function getProduct ( req: Request, res:Response ){
console.log('Obtiene un producto por ID');
}
function createProduct ( req: Request, res:Response ){
console.log('crea un producto');
}
function updateProduct ( req: Request, res:Response ){
console.log('Actualiza un producto por ID');
}
function deleteProduct ( req: Request, res:Response ){
console.log( 'Elimina un producto por ID');
}
export{
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}