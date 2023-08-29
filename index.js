import express from "express";
import dotenv from "dotenv";
import Client from "./backend/routes/clientRoutes.js";
import Product from "./backend/routes/productRoutes.js";
import connectDB from "./backend/config/connectDB.js";
import errorHandler from "./backend/middleware/errorHandler.js";

// var allowCrossDomain = function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// };

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(allowCrossDomain);

const PORT = process.env.PORT || 8000;

connectDB();

app.use("/products", Product);
app.use("/clients", Client);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server on " + PORT);
});
