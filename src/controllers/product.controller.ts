//la unica funcion del controlador es gestionar las acciones 

import { Request, Response }  from "express";
import { getAllProducts, getProductById, insertProduct, removeProductById, updateProductById } from "../services/product.service";

async function getProducts( req: Request, res:Response ){
    try {
      const 
      response = await getAllProducts(),
      data = response ? response : 'NOT_FOUND' // pendiente
      

      console.log(data);

      res.json (data);
      
    } catch (error) {
        console.log(`Error en la extraccion del listado de productos`);
        res.json({
            msg:'ERROR_PRODUCT_LIST'
        });
    }

}
async function getProduct ( req: Request, res:Response ){
    
    const productId = req.params.id;

    try {
        

        const response = await getProductById ( productId );

        console.log(res);
        res.json({ response });

    } catch (error) {
        console.log(`Error en la extraccion del producto con id : ${productId}`);

         res.json({
            msg:'ERROR_GET-PRODUCT_BY_ID'
         })
    }
    
}
async function createProduct ( req: Request, res:Response ){


try {
    const data = await insertProduct(req.body);

console.log( data );
res.json ( data );

} catch (error) {
console.log( `error en la insercion del producto` );
res.json({
    msg:'ERROR_INSERT_PRODUCT'
});

}

}
async function updateProduct ( req: Request, res:Response ){
    const {params :{ id }} = req;   // si no se entiende hacerlo de la forma convencional
     const {body} = req;
     
    try {
        const response = await updateProductById ( id, body );
        res.json(response)
    } catch (error) {
        console.log( `error en la actualizacion del producto con Id` );
    res.json ({
    msg:'ERROR_UPDATE_PRODUCT_BY_ID'
    });
}}
async function deleteProduct ( req: Request, res:Response ){

    const productId = req.params.id;

    try {
         const response = await removeProductById(productId);

         console.log( response);
         res.json( response)
         
    } catch (error) {

     console.log( `error en la eliminacion del producto con id: ${productId} ` );
     res.json({
                msg:'ERROR_DELETE_PRODUCT_BY_ID'
     });
    }
}
export{
    getProducts,


    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};