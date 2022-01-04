import { Request, Response, NextFunction } from "express";
// import { maxAgeSec, createToken } from "../middlewares/tokenCreation"
import User from "../../models/UserModel";

export async function postUser(req: Request, res: Response, next: NextFunction) {


    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save()
        res.json(savedUser);
        // const token = createToken(savedUser._id);

        // res.status(201)
        //     .cookie("authToken", token, { maxAge: maxAgeSec * 1000 })
        //     .send({ message: "signed up successfully", username: savedUser.username });

    }
    catch (e) {
        next(e)
        console.log({e})
    }

}


