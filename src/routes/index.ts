/** Archivo central de enrutamiento*/

import {Router, Request, Response} from "express";

const router = Router ();

router.get ( '/Users', ( req: Request, res: Response ) => {
    const msg = 'Users';

console.log( msg );
res.send( `<h1> ${ msg } </h1>` )

});


export default router;