import express from "express";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Tudo ok!");
});

export default app;
