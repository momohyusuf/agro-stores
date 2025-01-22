import "dotenv/config";
import express from "express";
import cors from "cors";

import ordersRoute from "./routes/ordersRoutes.js";
import mongoose from "mongoose";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      "http://localhost:5173/",
      "http://localhost:5173",
      "https://agro-stores-two.vercel.app/",
      "https://agro-stores-two.vercel.app",
    ],
  })
);
app.use(express.json());

app.use("/api/v1/order", ordersRoute);

app.get("/server-health", (req, res) => {
  res.status(200).json({ message: "System is running successfully" });
});

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Database connection successful");
  } catch (error) {
    console.log(error);
    return;
  }
}

app.listen(PORT, async () => {
  await connectToDB();
  console.log("Server is listen on port:" + PORT);
});
