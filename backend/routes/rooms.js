import express from 'express';

// import{createRoom, deleteRoom, retrieveRoom, retrieveRooms, updateRoom, updateRoomAvailability} from '../controllers/room.js'

const router = express.Router();

router.post('/:hotelId', verifyAdmin, createRoom)