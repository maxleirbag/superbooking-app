import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
	res.send('zero bala, ENDPOINT de AUTH')
})

export default router;