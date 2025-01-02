'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var react_2 = require("@nextui-org/react");
function DividerInput(_a) {
    var label = _a.label, className = _a.className;
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('flex flex-col space-y-1.5', className) },
        react_1.default.createElement("h6", { className: "text-sm font-medium text-foreground/70" }, label),
        react_1.default.createElement(frontend_shadcn_1.Separator, { className: "mt-2 mb-1" })));
}
exports.default = DividerInput;
