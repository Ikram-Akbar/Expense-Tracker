import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
// import Transaction from "./models/Transaction.js";

import Blog from "./models/Trans.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://ikramakbar:pppp0000@akbar-aws.frkmxdq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB is Connected Successfully");
  })
  .catch((err) => {
    console.log("find error form : ", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/transaction", async (req, res) => {
  const { amount, description, date } = req.body;
  const blog = new Blog({
    amount: amount,
    description: description,
    date:date,
  })
  await blog.save()
  res.json({ message: "success!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
