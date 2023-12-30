import app from "./app";
import { config } from "dotenv";

config();

const port = process.env.PORT || 6000;

app.listen(port, () =>
  console.log(`Servidor rodando: http://localhost:${port}`)
);
