import { Callback } from 'mongoose';
import { setupServer } from "./server";
import express from 'express'
import GamesRouter from "../routers/games/GamesRouter";
import GenresRouter from "../routers/genres/genresRouter";

import cors from "cors";

function initMiddlewares(app: express.Express) {
    app.use(cors());
    app.use(express.json());
    app.use((req, res, next) => {
        console.log(`body: ${JSON.stringify(req.body)}`);
        next();
    })
}

function initRouters(app: express.Express) {
    app.use("/games", GamesRouter);
    app.use("/genres", GenresRouter);
}

const app = setupServer(
    initMiddlewares,
    initRouters,
    );
    

function startServer(port: number, Callback: () => void) {
    app.listen(port, Callback);
}
export default { startServer, }

