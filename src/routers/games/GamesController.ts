import express from 'express';
import Game from '../../models/GamesModel';

export async function getAll(request: express.Request, response: express.Response, next: express.NextFunction) {


    try {
        const params: any = request.query;
        console.log({ params })

        let quries: { name?: any } = {};

        if (params.search) quries.name = new RegExp('^' + params.search, 'i');

        const games = await Game.find(quries)
        response.json(games);
    }
    catch (e) {
        next(e);
    }
}

export async function getById(request: express.Request, response: express.Response, next: express.NextFunction) {
    try {
        const id = request.params.id;


        const game = await Game.findById(id);
        response.json(game);
    }
    catch (e) {
        next(e);
    }
}

export async function getFeatured(request: express.Request, response: express.Response, next: express.NextFunction) {

    try {

        const size = +(request.query.size || 7);

        const games = {
            featured: await Game.aggregate([{ $sample: { size: 4 } }]),
            mostPopular: {
                name: 'Most Popular',
                games: await Game.aggregate([{ $sample: { size } }]),
            },
            newReleases: {
                name: 'New Releases',
                games: await Game.aggregate([{ $sample: { size } }]),
            }
        }

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
