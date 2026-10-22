import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.js";

const app = express();
app.use(cors());
app.use(express.json());

// CHALLENGE TODO: mount the product router at an appropriate path.

app.get("/health", (_req, res) => res.json({ ok: true }));
app.listen(3001, () => console.log("API listening on http://localhost:3001"));
