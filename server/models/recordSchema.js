import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: [true, "artist is required"],
    unique: true,
    trim: true,
  },
  title: {
    type: String,
    required: [true, "title is required"],
  },
  image_url: {
    type: String,
  },
  genre: {
    type: String,
  },
  price: {
    type: String,
  },
  year: {
    type: Number,
  },
  tags: {
    type: [String],
    default: "NEW",
  },
});

export default mongoose.model("Record", recordSchema);
