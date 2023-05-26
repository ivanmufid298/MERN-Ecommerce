import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";
//router object
const router = express.Router();

//routing
//register || method POST
router.post("/register", registerController);

//login || POST
router.post("/login", loginController);

export default router;
