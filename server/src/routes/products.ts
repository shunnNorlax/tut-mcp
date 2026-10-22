import { Router } from "express";
import { searchCatalogue } from "../services/catalogue.js";
const router = Router();

router.get("/search", (req, res) => {
  const query = String(req.query.q ?? "");
  // CHALLENGE TODO: call the service and send a JSON response.
  res.status(501).json({ error: "Route not connected" });
});
export default router;
