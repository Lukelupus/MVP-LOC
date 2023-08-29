import express from "express";
import {
  registerClient,
  logInClient,
} from "../controllers/registrationController.js";

const router = express.Router();

// Rota para Clientes

router.route("/").post(registerClient);
router.route("/login").post(logInClient);

export default router;
