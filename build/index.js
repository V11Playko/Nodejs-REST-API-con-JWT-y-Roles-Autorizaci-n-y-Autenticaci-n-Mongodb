"use strict";

var _app = _interopRequireDefault(require("./app"));

var _mongoose = _interopRequireDefault(require("mongoose"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dotenv = require("dotenv"); //require dotenv package


dotenv.config({
  path: "./config.env"
}); //import config.env fil

_app["default"].listen(3000);

console.log("Server listen on port ", 3000);