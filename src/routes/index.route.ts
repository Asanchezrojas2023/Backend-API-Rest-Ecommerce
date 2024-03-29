/** Archivo central de enrutamiento*/

import {Router, Request, Response} from "express";
import routeUsers from "./users.route";
import routeProducts from "./products.route"
import routeAuth from "./auth.route";

const router = Router ();

/**Archivo de rutas para el endpoint */

router.use('/users',  routeUsers ) // http:localhost:3000/api/users
router.use('/products',  routeProducts ) // http:localhost:3000/api/products
router.use('/auth', routeAuth);

export default router;