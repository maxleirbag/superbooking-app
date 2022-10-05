import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
	const newHotel = new Hotel(req.body);
	try {
		const savedHotel = await newHotel.save();
		res.status(200).json(savedHotel)
	} catch (err) {
		next(createError(401, 'Error creating hotel info.'));
	}
}

export const updateHotel = async (req, res, next) => {
	try {
		const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
		res.status(200).json(updatedHotel)
	} catch (err) {
		next(createError(401, 'Error updating hotel info.'))
	}
}

export const removeHotel = async (req, res, next) => {
	try {
		const updatedHotel = await Hotel.findByIdAndDelete(req.params.id);
		res.status(200).json(updatedHotel)
	} catch (err) {
		next(createError(401, 'Failed to remove hotel'))
	}
}

export const retrieveHotelById = async (req, res, next) => {
	try {
		const hotel = await Hotel.findById(req.params.id)
		res.status(200).json(hotel)
	} catch (err) {
		next(createError(401, 'Failed to find especific hotel'))
	}
}

export const retrieveHotels = async (req, res, next) => {
	try {
		const hotels = await Hotel.find();
		res.status(200).json(hotels)
	} catch (err) {
		next(createError(401, 'Failed to find hotels'))
	}
}