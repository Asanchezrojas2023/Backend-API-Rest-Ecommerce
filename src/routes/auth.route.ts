/** Archivo central de enrutamiento*/

import {Router, Request, Response} from "express";

import { createProduct, deleteProduct, getProducts, getProduct, updateProduct } from "../controllers/product.controller";

const router = Router ();
//http://localhost:3000/api/products/
router.post ('/register', ( req: Request, res:Response) => {


    console.log('Registra usuario');
    res.send (' Registra usuario')
    
});

router.post('/login', (req: Request, res: Response) => {
    console.log('login usuario');
    res.send('login usuario');
    
});
 

export default router;