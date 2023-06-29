import express, {Request, Response} from 'express';

const app = express ();
//**routing: enrutamiento */
//http://localhost:3000/

app.get( '/', ( req : Request, res: Response ) => {
 const message = 'Bienvenido a la API de Ecommerce';
   
 console.log(message);// mensaje a la terminal
 
 res.send(`<h1>${message}</h1>`); // mensaje al navegador
});
//http://localhost:3000/Home (EndPoint)
app.get('/home',(req : Request, res: Response) => {
 const namePage: string = 'Home';


 console.log(namePage);
 res.send(`<h1>${namePage}</h1>`)
 
});

app.listen(3000, () => {
    console.log('servidor lanzado en el puerto 3000');
    
});