import express from "express";
import { createUser, removeUser, retrieveUserById, retrieveUsers, updateUser } from "../controllers/user.js";
import { verifyToken } from "../utils/auth/verifyToken.js";

const router = express.Router();

router.use(verifyToken)

router.post('/create', createUser)

router.get('/', retrieveUsers);
router.get('/:id', retrieveUserById)

router.patch('/:id', updateUser);

router.delete('/:id', removeUser)


export default router;