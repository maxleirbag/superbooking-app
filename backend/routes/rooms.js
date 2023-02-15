import express from "express";
import { createRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/auth///verifyToken.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("endpoint de rooms existe");
});

router.post("/:hotelId", verifyAdmin, createRoom);

export default router;
