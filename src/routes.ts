import express from "express";
import watchController from "./controllers/watchController";

const router = express.Router();

router.get("/watches", watchController.index);
router.get("/watches/:id", watchController.one);

export default router;
