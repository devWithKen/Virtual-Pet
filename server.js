import express, { json } from 'express';
import { selectDoc, insertDoc, readFromDatabase } from './database/manager.mjs';


const app = express();
app.use(express.static('client'));
app.use(express.json());


//handles creating a new pet
async function createPet(req, res) {   
    const dbCopy = await readFromDatabase(); 
    if (dbCopy[req.body.ownerNumber] === undefined) {
        const newPet = insertDoc(req.body.ownerNumber, req.body);
        (dbCopy[req.body.petName])
        res.send(JSON.stringify(newPet));
    } else {        
        res.send(JSON.stringify(`Looks like user ${req.body.ownerNumber} already exists`));
    }
}

//handles getting an existing pet
async function getPet(req, res) {   
    const dbCopy = await readFromDatabase(); 
    if (dbCopy[req.body.userNumber] !== undefined) {
        const newPt = selectDoc(req.body.userNumber);       
        res.send(JSON.stringify(newPt));
      
    } else {        
        res.send(JSON.stringify(`Pet ${req.body.userNumber} doesn't exist`));
    }
}


app.post('/pets/number' ,getPet)

app.post('/pets', createPet);
    
app.listen(8080);
