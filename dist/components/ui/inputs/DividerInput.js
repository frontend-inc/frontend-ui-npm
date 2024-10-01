"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var DividerInput = function (props) {
    var label = props.label;
    return (react_1.default.createElement(material_1.Stack, { direction: "column" },
        react_1.default.createElement(material_1.Typography, { variant: "h6", color: "text.secondary", sx: sx.divider }, label)));
};
exports.default = DividerInput;
var sx = {
    divider: {
        borderBottom: '1px solid',
        borderColor: 'divider',
        mt: 2,
        mb: 1,
        pb: 1,
    },
};
