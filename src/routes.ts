import express from "express";
import watchController from "./controllers/watchController";

const router = express.Router();

router.get("/watch", watchController.index);
router.get("/watch/:number", watchController.limit);

export default router;
