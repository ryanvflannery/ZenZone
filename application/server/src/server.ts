import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000; // defualt port

// Defining an API route with proper types
app.get("/api", (req: Request, res: Response) => {
    res.json({ message: "Hello from TypeScript Express server!!!" });
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});