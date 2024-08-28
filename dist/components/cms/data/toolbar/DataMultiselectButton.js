"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../../..");
var frontend_js_1 = require("frontend-js");
var DataMultiselectButton = function (props) {
    var selected = (0, frontend_js_1.useResourceContext)().selected;
    var button = (props || {}).button;
    var _a = button || {}, onClick = _a.onClick, _b = _a.variant, variant = _b === void 0 ? 'contained' : _b, _c = _a.label, label = _c === void 0 ? 'Click me' : _c, icon = _a.icon, _d = _a.color, color = _d === void 0 ? 'primary' : _d;
    return (react_1.default.createElement(material_1.Button, { variant: variant, color: color, onClick: selected ? function () { return onClick(selected); } : undefined, startIcon: icon && react_1.default.createElement(__1.Icon, { name: icon, size: 20, color: "text.primary" }) }, label));
};
exports.default = DataMultiselectButton;
