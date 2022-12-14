import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
// import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

// enviroment, process.env
dotenv.config();

// server
const app = express();
const portNumber = 8800;
app.listen(portNumber, () => {
	connectMongoose();
	console.log('server OK: ' + portNumber);
})

// middlewares
app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use((err, req, res, next) => {
	const httpErrorStatus = err.status || 500;
	const errorMessage = err.message || 'An unpredicted error has occurred.';
	const localErrorLog = err.stack;

	return res.status(httpErrorStatus)
		.json({
			sucessfullRequest: false,
			statusCode: httpErrorStatus,
			description: errorMessage,
			stack: localErrorLog
		})
})

// endpoints
app.use('/auth', authRoute)
app.use('/hotels', hotelsRoute)
// app.use('/rooms', roomsRoute);
app.use('/users', usersRoute)

// database
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
