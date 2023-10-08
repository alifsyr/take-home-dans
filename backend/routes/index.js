import express from "express";
import {getUsers, createUser, loginUser, logoutUser} from "../controllers/User.js";
import {verifyToken} from "../middleware/verifyToken.js";
import {refreshToken} from "../controllers/RefreshToken.js";
import { getJobList, getJobDetail } from "../services/jobList.js";

const router = express.Router();

router.get('/user', verifyToken, getUsers); 
router.post('/user', createUser);
router.post('/login', loginUser);
router.get('/token', refreshToken);
router.delete('/logout', logoutUser);

// Job List
router.get('/jobs', verifyToken,getJobList);
router.get('/jobs/:id', verifyToken,getJobDetail);


export default router;