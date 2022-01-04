import { Response, NextFunction } from "express";
import { COOKIE_AUTH_NAME, MAX_AGE_SEC } from "../../constants";
import { createToken } from "./middlewares/tokenCreation"

export function postSignIn(req: any, res: Response, next: NextFunction) {

    const userId = req.userId

    const accessToken = createToken(userId)
    res.status(200)
        .cookie(COOKIE_AUTH_NAME, accessToken, { maxAge: MAX_AGE_SEC * 1000 })
        .send({ message: "Signed in successfully", email: req.username, accessToken });

    
}


export function deleteToken(req: any, res: Response, next: NextFunction) {
    try {
        res.cookie(COOKIE_AUTH_NAME, "", { maxAge: 0 });
        res.send({ message: "LoggedOut" })

    }
    catch (e) {
        console.log(e)
        next(e);
    }
}