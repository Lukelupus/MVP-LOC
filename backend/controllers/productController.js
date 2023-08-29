import asyncHandler from "express-async-handler";
import Product from "../models/productsModel.js";

// GET Method for all products

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// GET Method for single product

const getProductId = asyncHandler(async (req, res) => {
  const product = await Product.find({
    id: req.query.id,
  });
  if (!product) {
    res.status(400);
    throw new Error("Produto não encontrado");
  }

  res.status(201).json(product);
});

// POST Method to help me populate the DB

const postProduct = asyncHandler(async (req, res) => {
  const {
    name,
    img,
    description,
    info,
    dailyPrice,
    weeklyPrice,
    fortNightPrice,
    monthlyPrice,
  } = req.body;

  // Check if all fields are present. This is mostly for me as I am just using it to populate the DB

  if (
    !name ||
    !img ||
    !description ||
    !info ||
    !dailyPrice ||
    !weeklyPrice ||
    !fortNightPrice ||
    !monthlyPrice
  ) {
    res.status(400);
    throw new Error("Por favor preencha todos os campos.");
  }

  // Check if I already added the product

  const productExists = await Product.findOne({ name });

  if (productExists) {
    res.status(400);
    throw new Error("Produto já encontra-se em nosso banco de dados!");
  }
  const product = await Product.create({
    name: name,
    img: img,
    description: description,
    info: info,
    dailyPrice: dailyPrice,
    weeklyPrice: weeklyPrice,
    fortNightPrice: fortNightPrice,
    monthlyPrice: monthlyPrice,
  });
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(400);
    throw new Error("Dados Inválidos!");
  }
});

export { getProducts, getProductId, postProduct };
