import express from 'express';
import { compile } from 'joi';
import Game from '../../models/GamesModel';
import User from '../../models/UserModel';



export async function getById(request: any, response: express.Response, next: express.NextFunction) {
    try {
        const id = request.userId;

        const user = await User.findById(id);
        response.json(user?.cart ?? []);
    }
    catch (e) {
        next(e);
    }
}



export async function add(request: any, response: express.Response, next: express.NextFunction) {

    try {


        const updatedCart =  await User.updateOne({ _id: request.userId }, { $push: { cart: request.body } });
        
        console.log({ id: request.userId, cart: request.body });
        response.json(updatedCart);

    }
    catch (e) {
        next(e);
    }
}

export async function patch(request: any, response: express.Response, next: express.NextFunction) {

    try {


        const updatedCart = await User.updateOne({ _id: request.userId }, { cart: [] } );

        response.json(updatedCart);

    }
    catch (e) {
        next(e);
    }
}
