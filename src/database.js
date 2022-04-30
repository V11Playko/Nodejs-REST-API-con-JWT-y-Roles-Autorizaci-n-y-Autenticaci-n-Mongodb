import { connect } from "mongoose";
import config from "./config";

(async () => {
  try {
    const db = await connect();
    // Direccion de la base de datos "Direccion que me da mongo atlas"
    console.log("Db connectect to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
