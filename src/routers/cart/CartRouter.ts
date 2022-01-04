import { Router } from "express";
import { add, getById, patch } from "./CartController";

const router = Router();

router.post("/", add);

router.get("/", getById);

router.patch("/", patch);


export default router;
