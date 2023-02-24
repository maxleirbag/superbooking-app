import express from "express";
import {
  createHotel,
  getHotelCountByCategory,
  getHotelCountByCity,
  removeHotel,
  retrieveFeaturedHotels,
  retrieveHotelById,
  retrieveHotelRooms,
  retrieveHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyToken } from "../utils/auth/verifyToken.js";

const router = express.Router();

router.post("/", createHotel);

router.get("/", retrieveHotels);
router.get("/hotel/:id", retrieveHotelById);

router.patch("/:id", updateHotel);

router.delete("/:id", removeHotel);

router.get("/countByCity", getHotelCountByCity);
router.get("/countByCategory", getHotelCountByCategory);
router.get("/featured", retrieveFeaturedHotels);
router.get("/rooms/:id", retrieveHotelRooms);

export default router;
