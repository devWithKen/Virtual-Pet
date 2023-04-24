import { writeFile } from 'fs';
import fs from 'fs/promises';
// 1) SET PATH
const path = './database/data.json';

const dbCopy = await readFromDatabase();

//reading from the json file
export async function readFromDatabase() {
    const data = await fs.readFile(path, {
        encoding: 'utf-8'
    });
    const parsedData = JSON.parse(data);
    return parsedData;
}

//writing to the json file
async function writeToDatabase(copyOfDB) {
    await fs.writeFile(path, JSON.stringify(copyOfDB), 'utf-8');
}

//adds the object of the new created pet to the json file
export function insertDoc(id, newPetObj) { 
    dbCopy[id] = newPetObj;
    writeToDatabase(dbCopy);
    return newPetObj;  
}

//deletes a pet from the database
export function deleteDoc(id) {
    const docToDelete = dbCopy[id];
    delete dbCopy[id];
    writeToDatabase(dbCopy);
    return docToDelete;
}

//gets a pet from the data base
export function selectDoc(id) {
    const doc = dbCopy[id];
    return doc;
}

//updates the data of a pet
export function updateDoc(id, petData) {
    const doc = dbCopy[id];
    const updatedDoc = { ...doc, ...petData };
    dbCopy[id] = updatedDoc;
    writeToDatabase(dbCopy);
    return updatedDoc;
}

//selects the whole database
export function selectAll() {
    return dbCopy
}


