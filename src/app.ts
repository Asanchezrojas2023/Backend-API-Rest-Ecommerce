import express from 'express';

const app = express ();
//**routing: enrutamiento */
//http://localhost:3000/

app.get( '/', ( req, res ) => {
 const message = 'Bienvenido a la API de Ecommerce';
   
 console.log(message);// mensaje a la terminal
 
 res.send(`<h1>${message}</h1>`); // mensaje al navegador
});
//http://localhost:3000/Home
app.get('/home',(req, res) => {
 const namePage = 'Home';


 console.log(namePage);
 res.send(`<h1>${namePage}</h1>`)
 
});

app.listen(3000, () => {
    console.log('servidor lanzado en el puerto 3000');
    
});