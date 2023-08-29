import express from "express";
import {
  getProducts,
  getProductId,
  postProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Rota para Produtos

router.route("/").get(getProducts);
router.route(":id").get(getProductId);
router.route("/create").post(postProduct);

export default router;
