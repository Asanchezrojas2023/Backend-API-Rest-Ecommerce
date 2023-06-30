import 'dotenv/config';

import express, {Request, Response} from 'express';

import routeMain from './routes';


const app = express ();
const PORT = process.env.PORT
//**routing: enrutamiento */
//http://localhost:3000/

app.get( '/', ( req : Request, res: Response ) => {
 const message = 'Bienvenido a la API de Ecommerce';
   
 console.log(message);// mensaje a la terminal
 
 res.send(`<h1>${message}</h1>`); // mensaje al navegador
});
//http://localhost:3000/Home (EndPoint)
app.get( '/home',(req : Request, res: Response ) => {
 const namePage: string = 'Home' ;


 console.log(namePage);
 res.send( `<h1>${namePage}</h1>` );
 
});

;
/**Middleware */
//http://localhost:3000/api/
app.use ('/api', routeMain )

app.listen(PORT, () => {
    console.log('servidor en http://localhost:${PORT}');
    
});