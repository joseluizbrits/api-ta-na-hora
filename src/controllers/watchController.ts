import express from "express";
import Watch from "../models/Watch";

async function index(req: express.Request, res: express.Response) {
  try {
    const watches = await Watch.find();

    return res.status(200).json(watches);
  } catch (err) {
    console.error(err);

    return res.status(500).json({ error: "Internal server error" });
  }
}

async function one(req: express.Request, res: express.Response) {
  try {
    const { id } = req.params;

    const watches = await Watch.findOne({ _id: id });

    return res.status(200).json(watches);
  } catch (err) {
    console.error(err);

    return res.status(500).json({ error: "Internal server error" });
  }
}

export default { index, one };
