"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var input = _readlineSync["default"].question("What's your name?: ");

console.log(_chalk["default"].magenta.bold.underline(input));