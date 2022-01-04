import { Router } from "express";
import signInValidation from "./middlewares/validation/signInValidation";
import { postSignIn, deleteToken, } from "./signInController";

const router = Router();

router.post("/", signInValidation, postSignIn);

router.delete("/", deleteToken);  

export default router;
