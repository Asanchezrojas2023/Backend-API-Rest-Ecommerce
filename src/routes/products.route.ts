/** Archivo central de enrutamiento*/

import {Router, Request, Response} from "express";

import { createProduct, deleteProduct, getProducts, getProduct, updateProduct, partialUpdateProduct } from "../controllers/product.controller";
import {autheticationUser} from "../middlewares/authentication.middleware";

const router = Router ();
//http://localhost:3000/api/products/
router.get ('/', getProducts );  //obtiene lista de todos los productos
router.get('/:id', getProduct ); // obtine producto pr ID 
router.post ('/', autheticationUser, createProduct ); // crea producto
router.put ('/:id', autheticationUser, updateProduct ); // actualiza TODOS los campos del producto
router.patch ('/:id',autheticationUser, partialUpdateProduct ); //Actualiza algunos campos del producto
router.delete ('/:id',autheticationUser, deleteProduct ); // Elimina el producto
router.get('/user/:id', autheticationUser, ( req: Request, res: Response) => {
    res.json ({
        msg: 'TODO: Obtener todos los productos por usuario'
    });
});
export default router;