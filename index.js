import express from 'express'; // inkluderer express framework. Express pakken eksporterer sit top level API som en funktion. Den kan nu kaldes ind i en variabel.
import http from 'http';
import { router as GlobalRouter} from './Routes/global.router.js';
import { router as ArtistRouter} from './Routes/artist.router.js';
import { router as SongRouter} from './Routes/song.router.js';

const app = express(); // kalder express funktion ind i en variabel.
const port = process.env.PORT || 4242;

app.listen(4242, () => { // Kører metoden "listen" på server app objekt. Sætter også en server op - og giver den et navn, i dette tilfælde port 4242.
    console.log(`Express server kører på ${port}...`);
});

// app.get("/", (req, res) => { // Bruger metoden "get", til at bestemme hvad man kan og må se. Den sætter en router op.
//     res.send('Hej verden!');
// })

// app.get("/about", (req, res) => {
//     res.send('Om os')
// })

// app.get("/contact", (req, res) => {
//     res.send('Kontakt os')
// })

// ALT OVER ER BLEVET UDKOMMENTERET FORDI AT DET NU PGA ROUTER IMPORT KAN GØRES KORTERE MED HVAD DER STÅR HERUNDER! DET ER BLEVET SMIDT IND I SONG.ROUTER.JS

app.use(GlobalRouter);
app.use(ArtistRouter);
app.use(SongRouter);

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello World! and a test!');
    response.end();
    // console.log('Fellow Pearled!');
}).listen(4000)

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/html;Charset=utf8'});
//     res.end('Davs davs - så virker det');
//     });
    
    
    
//     server.listen(4000, () => {
//     console.log("Server is running...");
//     });