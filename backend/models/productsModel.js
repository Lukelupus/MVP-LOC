import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      ref: "Product",
    },
    img: {
      type: String,
      required: [true, "Por favor adicione uma imagem para o produto"],
    },
    description: {
      type: String,
      required: [true, "Por favor adicione uma descrição para o produto"],
    },
    info: {
      type: String,
      required: [true, "Por favor adicione uma imagem para o produto"],
    },
    dailyPrice: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, "Por favor adicione um preço diário para o produto"],
    },
    weeklyPrice: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, "Por favor adicione um preço semanal para o produto"],
    },
    fortNightPrice: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, "Por favor adicione um preço quinzenal para o produto"],
    },
    monthlyPrice: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, "Por favor adicione um preço mensal para o produto"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productsSchema);
