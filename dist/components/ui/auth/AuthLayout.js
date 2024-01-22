"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var AuthLayout = function (props) {
  var children = props.children;
  return react_1.default.createElement(
    material_1.Box,
    { sx: sx.root },
    children
  );
};
exports.default = AuthLayout;
var sx = {
  root: {
    height: "100vh",
    bgcolor: "background.default",
  },
};
