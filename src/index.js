import app from "./app";
import mongoose from "mongoose";
import "./database";
const dotenv = require("dotenv"); //require dotenv package
dotenv.config({ path: "./config.env" }); //import config.env fil

app.listen(3000);

console.log("Server listen on port ", 3000);
