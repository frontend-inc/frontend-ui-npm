'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@remixicon/react");
var react_3 = require("@nextui-org/react");
function IconLoading(props) {
    var _a = props.size, size = _a === void 0 ? 20 : _a, _b = props.color, color = _b === void 0 ? 'text-secondary' : _b, className = props.className;
    return (react_1.default.createElement(react_2.RiLoader4Line, { className: (0, react_3.cn)('animate-spin', color, className), size: size }));
}
exports.default = IconLoading;
