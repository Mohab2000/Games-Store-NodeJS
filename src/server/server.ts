import express from "express";


export function setupServer(
    initMiddlewares: (app: express.Express) => void,
    initRoutes: (app: express.Express) => void
) {

    const app = express();

    initMiddlewares(app);
    initRoutes(app);

    return app;
}
