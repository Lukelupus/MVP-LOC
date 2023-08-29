import express from "express";
import {
  registerClient,
  logInClient,
  getMe,
} from "../controllers/registrationController.js";

const router = express.Router();

// Rota para Clientes

router.route("/").post(registerClient);
router.route("/login").post(logInClient);
router.route("/me").get(getMe);

export default router;
