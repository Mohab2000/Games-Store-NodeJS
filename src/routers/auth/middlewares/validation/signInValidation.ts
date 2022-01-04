import { Request, Response, NextFunction } from "express"
import joi from "joi"
import bcrypt from "bcrypt"
import User from "../../../../models/UserModel"
import { RequestError } from "../../../../models/Error";
import { RequestMessages } from "../../../../models/requestMessages";

function noWhiteSpaces(value: string, helpers: any) {

    if (value.includes(" ")) {
        return helpers.error("Invalid entry.");
    }

    return value;
};

function signInSchema(data: any) {
    const schema = joi.object({
        email: joi.string().min(5).max(30).required().trim().default(noWhiteSpaces),
        password: joi.string().min(8).max(30).required().trim().default(noWhiteSpaces)
    });

    return schema.validate(data).error;
}

export default async function signInValidation(req: any, res: Response, next: NextFunction) {

    try {
        const schemaError = signInSchema(req.body);
        if (schemaError) {
            next(schemaError)
            return
        }

        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            const WrongUsernameError = new RequestError(RequestMessages.WrongEmail)
            next(WrongUsernameError)
            return
        }


        const passwordCompare = await bcrypt.compare(req.body.password, user.password)
        if (!passwordCompare) {
            const wrongPasswordError = new RequestError(RequestMessages.WrongPassword)
            next(wrongPasswordError)
            return
        }

        req.userId = user._id
        req.email = user.email
        next()

    } catch (err) {
        next(err)
    }
}
