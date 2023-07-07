/** Archivo central de enrutamiento*/

import {Router, Request, Response} from "express";
import { login, register } from "../controllers/auth.controller";

const router = Router ();
//http://localhost:3000/api/products/
router.post ('/register', register);
//http://localhost:3000/api/api/auth/login

router.post('/login', login);
 

export default router;