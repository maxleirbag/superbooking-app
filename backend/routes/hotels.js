import express from "express";
import { createHotel, removeHotel, retrieveHotelById, retrieveHotels, updateHotel } from "../controllers/hotel.js";
import { verifyToken } from "../utils/auth/verifyToken.js";

const router = express.Router();

router.use(verifyToken);

router.post('/', createHotel);

router.get('/', retrieveHotels);
router.get('/:id', retrieveHotelById)

router.patch('/:id', updateHotel);

router.delete('/:id', removeHotel)

export default router;