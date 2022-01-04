import express from "express";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../../../../constants";
import { RequestError } from "../../../../models/Error";
import { RequestMessages } from "../../../../models/requestMessages";

export async function validateToken(req: any, res: express.Response, next: express.NextFunction) {

    try {

        const token = req.cookies.auth_token;
        if (!token) {
            const accessDeinedError = new RequestError(RequestMessages.Unauthorized)
            next(accessDeinedError)
            return
        }

        jwt.verify(token, ACCESS_TOKEN_SECRET,
            (err: any, payload: any) => {
                if (err) {
                
                    next(err)
                    return
                }

                req.userId = payload.id
                next()
            });
    }
    catch (err) {
        next(err)
    }
}

// export async function validateTokenAndUser(req: any, res: express.Response, next: express.NextFunction) {

//     try {
//         const header = req.headers.authorization;
//         const userId = req.params.userId;
//         const token = header && header.split(" ")[1]
//         if (!token) {
//             const accessDeinedError = new Error("Access denied 1");
//             accessDeinedError.status = 401;
//             next(accessDeinedError);
//         }

//         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
//             (err, payload) => {
//                 if (err) {
//                     const accessDeinedError = new Error("Access denied 2");
//                     accessDeinedError.status = 401;
//                     next(accessDeinedError);
//                 }

//                 if(payload.id == userId){
//                     req.userId = payload.id;
//                     next();
//                 }
//                 else {
//                     const accessDeinedError = new Error("Access denied 3");
//                     accessDeinedError.status = 422;
//                     next(accessDeinedError);
//                 }
            
//             });
//     }
//     catch (err) {
//         next(err);
//     }
// }