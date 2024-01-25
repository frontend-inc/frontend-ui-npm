"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var LineItem = function (props) {
    var label = props.label, value = props.value;
    return (react_1.default.createElement(material_1.ListItem, null,
        react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body2" }, label), secondary: react_1.default.createElement(material_1.Typography, { variant: "body1", mt: 1 }, value ? value : '-') })));
};
exports.default = LineItem;
