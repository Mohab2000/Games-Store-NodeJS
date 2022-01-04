import { Router } from "express";
import { postUser} from "./usersController";

const usersRouter = Router();

usersRouter.post("/", postUser)

export default usersRouter;