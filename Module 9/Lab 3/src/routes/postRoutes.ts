import { Router } from "express";

const router = Router();

// Define post-related routes here
router.get("/", (req, res) => {
  res.send("Post routes");
});

export default router;
