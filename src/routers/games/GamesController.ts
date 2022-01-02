import express from 'express';
import Game from '../../models/GamesModel';

export async function getAll(request: express.Request, response: express.Response, next: express.NextFunction) {


    try {
        const params: any = request.query;
        console.log({ params })

        let quries: {name?: any} = { };

        if (params.search) quries.name = new RegExp('^' + params.search, 'i');

        const games = await Game.find(quries)
        response.json(games);
    }
    catch (e) {
        next(e);
    }
}

export async function add(request: express.Request, response: express.Response, next: express.NextFunction) {

    try {


        const newGame = new Game(request.body);
        const result = await newGame.save();
        response.json(result);

    }
    catch (e) {
        next(e);
    }
}
