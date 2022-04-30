import { config } from "dotenv";

config();

export default {
  MONGODB_URI: process.env.DATABASE,
  PORT: process.env.PORT || 4000,
  SECRET: "products-api",
};
