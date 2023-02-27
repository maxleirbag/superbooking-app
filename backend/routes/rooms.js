import express from "express";
import {
  createRoom,
  deleteRoom,
  retrieveRoom,
  retrieveRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
// import { verifyAdmin } from "../utils/auth/verifyToken.js";

const router = express.Router();

router.get("/", retrieveRooms);
router.get("/:id", retrieveRoom);

router.patch("/:id", updateRoom); //verifyAdmin
router.patch("/availability/:id", updateRoomAvailability);

router.delete("/:id/:hotelId", deleteRoom);

router.post("/:hotelId", createRoom); //verifyAdmin

export default router;
