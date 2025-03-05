import dotenv from "dotenv";``
import express, { Request, Response } from "express";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Default port

// Middleware
app.use(express.json()); // Allow JSON body parsing
app.use(
  cors({
    origin: "http://10.0.0.12:19006", 
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// API Route
app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from TypeScript Express server!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
