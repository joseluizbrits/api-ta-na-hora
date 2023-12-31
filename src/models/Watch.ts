import mongoose from "mongoose";

const schema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  box: {
    type: String,
    required: true,
  },
  bracelet: {
    type: String,
    required: true,
  },
  identifier: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Watch", schema);
