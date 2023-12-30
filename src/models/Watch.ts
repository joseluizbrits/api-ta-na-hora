import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  description: String,
  img: String,
});

export default mongoose.model("Watch", schema);
