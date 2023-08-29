import asyncHandler from "express-async-handler";
import Client from "../models/registrationModel.js";
import bcrypt from "bcrypt";

const registerClient = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Por favor preencha todos os campos.");
  }

  const registrationExists = await Client.findOne({ email });

  if (registrationExists) {
    res.status(400);
    throw new Error("Email já cadastrado");
  }

  // Create hashed password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Criar novo Usuário

  const client = await Client.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  if (client) {
    res.status(200).json(client);
  } else {
    res.status(400);
    throw new Error("Dados de cliente inválidos");
  }
});

const logInClient = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // checar o email

  const client = await Client.findOne({ email });

  if (client && (await bcrypt.compare(password, client.password))) {
    res.json({
      _id: client.id,
      name: client.name,
      email: client.email,
    });
  } else {
    res.status(400);
    throw new Error("Eita... Não encontramos ninguém aqui com esses dados!");
  }

  res.json({ message: "Usuário logado com sucesso!" });
});
// route privada para usuário

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.client);
});

export { registerClient, logInClient, getMe };
