import "reflect-metadata";
import app from './app';
import { AppDataSource  } from "./database/bd";

// se declara una función asíncrona llamada "main"
const main = async() =>{ 
    try {
        // se espera a que se inicialice el objeto "AppDataSource"
        await AppDataSource.initialize(); 
        // se muestra un mensaje en la consola
        console.log("Conected to database"); 
        app.listen(process.env.PORT || 3000); // se hace que la aplicación escuche en el puerto 3000
         // se muestra un mensaje en la consola
        console.log("Server is listening on", process.env.PORT || 3000);
    } catch (error) { 
        // se maneja cualquier error que ocurra
        console.log("Error to conected ", error) // se muestra un mensaje en la consola
    }
   
}
// se ejecuta la función "main"
main(); 