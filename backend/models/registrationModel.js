import mongoose from "mongoose";

const Schema = mongoose.Schema;

const registerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      ref: "Client",
    },
    email: {
      type: String,
      required: [true, "Por favor adicione um email válido"],
    },
    password: {
      type: String,
      required: [true, "Password Incorreto"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Client", registerSchema);
