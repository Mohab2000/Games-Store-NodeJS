import { Router } from "express";
import { getAll, getFeatured, add, getById } from "./GamesController";

const router = Router();

router.post("/", add);

// router.put("/:postId", .updatePost);

// router.patch("/:postId", .interactToPost)

// router.delete("/:postId", .deletePost);

router.get("/", getAll);

router.get("/featured", getFeatured);

router.get("/:id", getById)


export default router;
