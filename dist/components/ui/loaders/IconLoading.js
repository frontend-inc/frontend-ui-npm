'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
function IconLoading(_a) {
    var _b = _a.size, size = _b === void 0 ? 20 : _b, _c = _a.color, color = _c === void 0 ? 'text-secondary' : _c, className = _a.className;
    return (react_1.default.createElement(lucide_react_1.Loader2, { className: (0, frontend_shadcn_1.cn)('animate-spin', color, className), size: size }));
}
exports.default = IconLoading;
