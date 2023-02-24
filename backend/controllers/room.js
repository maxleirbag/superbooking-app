import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error/errorHandler.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } });
    } catch (error) {
      next(createError("Failed to link room to hotel."));
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(createError("Failed to create room."));
  }
};

export const retrieveRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(createError(401, "Failed to find rooms."));
  }
};

export const retrieveRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    next(createError(401, "Failed to find room."));
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findOneAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(createError(401, "Failed to update room information."));
  }
};

export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      { $push: { "roomNumbers.$.unavailableDates": req.body.dates } }
    );
    res.status(200).json("Room availability status updated.");
  } catch (error) {
    next(createError(401, "Failed to update room availability."));
  }
};

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } });
    } catch (error) {
      next(createError(401, "Failed to undo hotel-room relationship."));
    }
    res.status(200).json("Room has been deleted.");
  } catch (error) {
    next(createError(401, "Failed to delete room."));
  }
};
