import { Callback } from 'mongoose';
import { setupServer } from "./server";
import express from 'express'
import GamesRouter from "../routers/games/GamesRouter";
import GenresRouter from "../routers/genres/genresRouter";
import UsersRouter from '../routers/users/usersRoutes';
import SignInRouter from '../routers/auth/signInRouter';
import CartRouter from "../routers/cart/CartRouter";
import cors from "cors";
import { validateToken } from '../routers/auth/middlewares/validation/tokenvalidation';
import cookieParser from 'cookie-parser';

function initMiddlewares(app: express.Express) {
    const corsOptions = {
        origin: 'http://localhost:3000',
        credentials: true,            //access-control-allow-credentials:true
        optionSuccessStatus: 200,
    }

    app.use(cors(corsOptions));
    
    app.use(cookieParser());

    app.use(express.json());
    app.use((req, res, next) => {
        console.log(`body: ${JSON.stringify(req.body)}`);
        next();
    })
}

function initRouters(app: express.Express) {
    app.use("/signIn", SignInRouter);

    app.use("/games", GamesRouter);
    app.use("/genres", GenresRouter);
    app.use("/users", UsersRouter);

    app.use(validateToken)
    app.use("/cart", CartRouter);

}

const app = setupServer(
    initMiddlewares,
    initRouters,
    );
    

function startServer(port: number, Callback: () => void) {
    app.listen(port, Callback);
}
export default { startServer, }

