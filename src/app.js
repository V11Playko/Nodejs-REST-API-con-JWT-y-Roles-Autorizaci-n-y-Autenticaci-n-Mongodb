import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

// Se importan los roles de libs/initialSetup
import { createRoles } from "./libs/initialSetup.js";

import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/user.routes";

// Se inicia el servidor para luego mostrar los roles
const app = express();
createRoles();

app.set("pkg", pkg);

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);

export default app;
