// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors");
import express from "express";
import routes from "./routes";
import connection from "./database";

connection();

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

export default app;
