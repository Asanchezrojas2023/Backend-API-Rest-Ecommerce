
import 'dotenv/config';

import express, {Request, Response} from 'express';

import routeMain from './routes/index.route';
import db from "./config/mongo.config";


const app = express ();
const PORT = process.env.PORT
//**routing: enrutamiento */
//http://localhost:3000/

app.get( '/', ( req : Request, res: Response ) => {
 const message: String ='Bienvenido a la API de Ecommerce';
   
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
//implementando middlewares a Express
app.use (express.json());
/**Middleware */
//http://localhost:3000/api/
app.use ('/api', routeMain )

db()
    .then( () => console.log(`MongoDB se conecto correctamente`))
    .catch( () => console.error (`MongoDB sufre un problema de conexion`));

// lanza el servidor web
app.listen(PORT, () => {
    console.log(`servidor en http://localhost:${PORT}`);
    
});