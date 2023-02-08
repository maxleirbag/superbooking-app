import express from "express";
import { login, register } from "../controllers/auth.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/auth/verifyToken.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// router.get("/authorize/:id", verifyUser);
// router.get("/authenticate", //verifyToken);

// router.get("/isAdmin/:id", verifyAdmin);

export default router;
