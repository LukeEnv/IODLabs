import { Router } from "express";

const router = Router();

// Define user-related routes here
router.get("/", (req, res) => {
  res.send("User routes");
});

export default router;
