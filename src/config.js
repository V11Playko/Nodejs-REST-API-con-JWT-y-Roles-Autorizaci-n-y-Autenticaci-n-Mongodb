import { config } from "dotenv";
import "./.env";

config();

export default {
  MONGODB_URI: process.env.DATABASE,
  PORT: process.env.PORT || 4000,
  SECRET: "products-api",
};
