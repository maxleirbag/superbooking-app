import express from "express";
import { deleteUser, retrieveUserById, retrieveUsers, updateUser } from "../controllers/user.js";
import { verifyToken } from "../utils/auth/verifyToken.js";

const router = express.Router();

// router.use(//verifyToken)

router.get("/", retrieveUsers);
router.get("/:id", retrieveUserById);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
