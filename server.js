import sqlite3 from "sqlite3";
import { open } from "sqlite";
import express from "express";


const app = express();// para inciar as funções do framework express
const PORT = 3000;//porta da rede local para criar o servidor

//Middleware (comunicação do banco com o front, intermedia a comunicação)
app.use(express.json());
app.use(express.static('public/'));//acessa os arquivos estáticas (HTML, CSS e JS)

//inicia  o database de SQLife
let db;

//função async para definir ordem de execução com await
async function initDB() {
 db = await open({
    filename:'/banco.db',
    driver: sqlite3.Database,
 });
 
   await db.run(`CREATE TABLE IF NOT EXISTS tasks(
     id INTERGER PRIMARY KEY AUTOINCREMENT, 
     description TEXT NOT NULL<
     completed INTEGER DEFAULT 0
    )`);
}
