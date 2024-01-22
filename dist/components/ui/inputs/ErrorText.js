"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ErrorText = function (props) {
    var error = props.error;
    if (!error)
        return null;
    return (react_1.default.createElement(material_1.Typography, { variant: "overline", sx: sx.root }, error));
};
exports.default = ErrorText;
var sx = {
    root: {
        color: "error.main",
        fontSize: "0.75rem",
    },
};
