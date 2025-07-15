import express from "express";
import { createUserController } from "../controllers/userController";

const router = express.Router();

// Create a new user
router.post("/", createUserController);

export default router;
