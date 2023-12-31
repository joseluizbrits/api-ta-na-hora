import express from "express";
import watchController from "./controllers/watchController";

const router = express.Router();

router.get("/watch", watchController.index);

export default router;
