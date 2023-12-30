import mongoose from "mongoose";
import { config } from "dotenv";

config();

const uri = process.env.MONGODB_URI as string;

async function main() {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log("Ocorreu um erro ao se conectar ao banco de dados: " + error);
  }
}

export default main;
