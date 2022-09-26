import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

dotenv.config();

const app = express();
const portNumber = 8800;

app.listen(portNumber, () => {
	connectMongoose();
	console.log('server OK: ' + portNumber);
})
app.use(express.json())
app.use('/auth', authRoute)
app.use('/hotels', hotelsRoute)
app.use('/rooms', roomsRoute);
app.use('/users', usersRoute)

const connectMongoose = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log('mongoDB OK')
	} catch (e) {
		console.error(e);
		throw e;
	}
}

mongoose.connection.on('disconnected', () => {
	console.log('mongoDB OFF')
})
