import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const PORT = 4000;
const app = express();
app.use(cors)

await mongoose
  .connect(
    "mongodb+srv://harsh:harsh123@cluster0.85aldur.mongodb.net/?retryWrites=true&w=majority"
  )
  console.log("MongoDB connection is successfull")

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
