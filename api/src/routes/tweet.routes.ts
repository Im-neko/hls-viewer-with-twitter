import { Router } from "express";
const router = Router();

import { getTweet } from "../controllers/tweet.controller";


router.get("/:id", getTweet);

router.post("/", getTweet);

export { router };
