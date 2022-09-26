import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

router.post('/', async (req, res) => {

	const newHotel = new Hotel(req.body);
	try {
		const savedHotel = await newHotel.save();
		res.status(200).json(savedHotel)
	} catch (e) {
		res.status(500).json(e)
		console.error(e)
	}
})

router.patch('/:id', async (req, res) => {
	try {
		const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
		res.status(200).json(updatedHotel)
	} catch (e) {
		res.status(500).json(e)
		console.error(e)
	}
})

router.delete('/:id', async (req, res) => {
	try {
		const updatedHotel = await Hotel.findByIdAndDelete(req.params.id);
		res.status(200).json(updatedHotel)
	} catch (e) {
		res.status(500).json(e)
		console.error(e)
	}
})

router.get('/:id', async (req, res) => {
	try {
		const hotel = await Hotel.findById(req.params.id)
		res.status(200).json(hotel)
	} catch (e) {
		console.error(e);
		res.status(500).json(e)
	}
})
router.get('/', async (req, res) => {
	try {
		const hotels = await Hotel.find();
		res.status(200).json(hotels)
	} catch (e) {
		console.error(e);
		res.status(500).json(e)
	}
})

export default router;