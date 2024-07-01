import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "User Service Running" });
  } catch (error) {
    res.status(500).json({ error, message: "User service Crashed" });
  }
});
const port: number = Number(process.env.PORT) || 5000;
app.listen(port, () => {
  console.log(`User Service Running On ${port}`);
});
