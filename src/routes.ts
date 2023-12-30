import express from "express";

const router = express.Router();

router.get("/watch", (req, res) => {
  res.send("Rélogios");
});

export default router;
