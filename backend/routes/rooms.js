import express from "express";
import { createRoom, retrieveRooms } from "../controllers/room.js";
import { verifyAdmin } from "../utils/auth///verifyToken.js";

const router = express.Router();

router.get("/", retrieveRooms);

router.post("/:hotelId", createRoom);

export default router;
