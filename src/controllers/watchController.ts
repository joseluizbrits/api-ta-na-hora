import express from "express";
import Watch from "../models/Watch";

async function index(req: express.Request, res: express.Response) {
  try {
    const watchs = await Watch.find();

    return res.status(200).json(watchs);
  } catch (err) {
    console.error(err);

    return res.status(500).json({ error: "Internal server error" });
  }
}

export default { index };
