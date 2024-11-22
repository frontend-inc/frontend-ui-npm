"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var Container = function (props) {
    var maxWidth = props.maxWidth, className = props.className, children = props.children;
    if (!maxWidth)
        return children;
    return (react_1.default.createElement("div", { className: "w-full flex items-center" },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('container mx-auto', maxWidth && "max-w-screen-".concat(maxWidth), className) }, children)));
};
exports.default = Container;
