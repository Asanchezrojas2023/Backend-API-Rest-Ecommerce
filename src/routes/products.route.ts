/** Archivo central de enrutamiento*/

import {Router, Request, Response} from "express";

import { createProduct, deleteProduct, getProducts, getProduct, updateProduct, partialUpdateProduct } from "../controllers/product.controller";
import {autheticationUser} from "../middlewares/authentication.middleware";

const router = Router ();
//http://localhost:3000/api/products/
router.get ('/', autheticationUser, getProducts );  //obtiene lista de todos los productos
router.get('/:id', getProduct ); // obtine producto pr ID 
router.post ('/', createProduct ); // crea producto
router.put ('/:id', updateProduct ); // actualiza TODOS los campos del producto
router.patch ('/:id', partialUpdateProduct ); //Actualiza algunos campos del producto
router.delete ('/:id', deleteProduct ); // Elimina el producto

export default router;