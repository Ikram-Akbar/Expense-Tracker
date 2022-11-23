import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  amount: String,
  description: String,
  date: { type: Date, default: Date.now },
  createAt: { type: Date, default: Date.now },
});
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
