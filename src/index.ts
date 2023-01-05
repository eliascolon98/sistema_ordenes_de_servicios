import "reflect-metadata";
import app from './app';
import { AppDataSource  } from "./database/bd";


const main = async() =>{
    try {
        await AppDataSource.initialize();
        console.log("Conected to database");
        app.listen(3000);
        console.log("Server is listening on", 3000);
    } catch (error) {
        console.log("Error to conected ", error)
    }
   
}

main();