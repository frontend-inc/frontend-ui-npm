"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var helpers_1 = require("../../../helpers");
var CellString = function (props) {
    var value = props.value, _a = props.variant, variant = _a === void 0 ? "caption" : _a;
    return (react_1.default.createElement(material_1.Typography, { sx: sx.text, variant: variant }, (0, helpers_1.truncate)(value, 15)));
};
exports.default = CellString;
var sx = {
    text: {
        whiteSpace: "nowrap",
    },
};
