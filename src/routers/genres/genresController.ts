import express from 'express';
import Genre from '../../models/GenreModel';

export async function getAll(request: express.Request, response: express.Response, next: express.NextFunction) {
    try {
        const genres = await Genre.find();
        response.json(genres);
    }
    catch (e) {
        next(e);
    }
}

