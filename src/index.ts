import dotenv from "dotenv";
import database from './database';
import server from "./server/index";
import axios from "axios";
import Game from "./models/GamesModel";
import Genre from "./models/GenreModel";


const uri = "mongodb+srv://hazem:hazem123@initial.roxge.mongodb.net/GamesDatabase?retryWrites=true&w=majority";

database.buildDatabase(uri);
server.startServer(
    4000,
    () => console.log("Server started on port ", 4000),
);


// function generate a random number between 10 and 60

