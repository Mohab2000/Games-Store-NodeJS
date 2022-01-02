import { Router } from "express";
import { getAll, add } from "./GamesController";

const router = Router();

router.post("/", add);

// router.put("/:postId", .updatePost);

// router.patch("/:postId", .interactToPost)

// router.delete("/:postId", .deletePost);

router.get("/", getAll);

// router.get("/:postId", GamesController.getGame);

export default router;
