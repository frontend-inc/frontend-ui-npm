"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var lodash_1 = require("lodash");
var dynamic_1 = __importDefault(require("next/dynamic"));
var dynamicIconImports_1 = __importDefault(require("lucide-react/dynamicIconImports"));
function toKebabCase(text) {
    return text === null || text === void 0 ? void 0 : text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
var LucideIcon = function (props) {
    var name = props.name, _a = props.color, color = _a === void 0 ? 'text.primary' : _a, _b = props.size, size = _b === void 0 ? 24 : _b;
    var theme = (0, material_1.useTheme)();
    var LucideIcon = (0, dynamic_1.default)(dynamicIconImports_1.default[toKebabCase(name)]);
    return (
    //@ts-ignore
    react_1.default.createElement(LucideIcon, { color: (0, lodash_1.get)(theme.palette, color), size: size }));
};
exports.default = LucideIcon;
