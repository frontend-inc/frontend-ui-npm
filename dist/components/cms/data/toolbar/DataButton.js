"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var DataButton = function (props) {
    var _a = props || {}, button = _a.button, _b = _a.selected, selected = _b === void 0 ? [] : _b;
    var _c = button || {}, onClick = _c.onClick, _d = _c.variant, variant = _d === void 0 ? 'contained' : _d, _e = _c.label, label = _e === void 0 ? 'Click me' : _e, _f = _c.color, color = _f === void 0 ? 'primary' : _f;
    return (react_1.default.createElement(material_1.Button, { variant: variant, color: color, onClick: selected ? function () { return onClick(selected); } : undefined }, label));
};
exports.default = DataButton;
