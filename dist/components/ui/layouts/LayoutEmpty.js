"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var LayoutEmpty = function (props) {
    var _a = props || {}, icon = _a.icon, color = _a.color, title = _a.title, description = _a.description;
    return (react_1.default.createElement(material_1.Box, { sx: sx.placeholder },
        react_1.default.createElement(components_1.Placeholder, { icon: icon, color: color, title: title, description: description })));
};
exports.default = LayoutEmpty;
var sx = {
    icon: {
        color: 'text.primary',
    },
    placeholder: {
        px: 2,
        height: '400px',
    },
};
