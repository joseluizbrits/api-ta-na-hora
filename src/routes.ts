import express from "express";
import watchController from "./controllers/watchController";

const router = express.Router();

router.get("/watches", watchController.index);
router.get("/watches/:number", watchController.limit);

export default router;
