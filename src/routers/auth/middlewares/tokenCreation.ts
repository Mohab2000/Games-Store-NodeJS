import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, MAX_AGE_SEC } from "../../../constants";


export function createToken(id: any) {

    const payload = {
        id: id
    }
    
    return jwt.sign(
        payload,
        ACCESS_TOKEN_SECRET,
        {
            expiresIn: MAX_AGE_SEC
        }
    );
    
}