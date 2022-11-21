import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

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
app.post("/transaction", (req, res) => {
  // console.log(req.body);
  const { amount, description, date } = req.body;
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
