import express from "express"
// this importation only for read a file HTML
import path from 'path';
import {fileURLToPath} from 'url';


// this ligne of code just for read and make the correct path to file with HTML

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const _retfile = path.join(__dirname, 'index.html');
const Contact = path.join(__dirname, 'Contact.html');
const Serveces = path.join(__dirname, 'Serveces.html');

// end
// cutomer midleware
const timeWork = (req, res, next) =>{
    const date = new Date("01-19-2024 14:00");
    const day = date.getDay()
    const hours = date.getHours()
    if(day>0 && day<6 && hours>=9 && hours<=17 ){
       return next();
    }
    else( res.send("<h1>7anout msaker</h1>") )
}
//end


const app = express()
app.use(timeWork)
app.use(express.static(__dirname));

app.get("/", (req, res)=>{
    res.sendFile(_retfile)
})
app.get("/Contact", (req, res)=>{
    res.sendFile(Contact)
})
app.get("/Serveces", (req, res)=>{
    res.sendFile(Serveces)
})



app.listen(3000, (err)=>{
    if (err) throw err;
    console.log("Server is running on 3000")
})