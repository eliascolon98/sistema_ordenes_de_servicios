import "reflect-metadata"
import app from './app';

const main = async () =>{
    try {
        app.listen(3000);
        console.log('listening on port 3000');
    } catch (error) {
        console.log(error)
    }
}

main();