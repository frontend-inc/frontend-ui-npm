'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
function Loader(_a) {
    var loading = _a.loading;
    if (!loading)
        return null;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col items-center justify-center', 'w-full h-full min-h-[200px]') },
        react_1.default.createElement(lucide_react_1.Loader2, { className: "text-foreground w-12 h-12 animate-spin text-primary" })));
}
exports.default = Loader;
