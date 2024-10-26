'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
function AdminLayoutCenter(_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('bg-background w-full h-screen overflow-hidden', 'flex flex-col justify-between') },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col justify-start', 'h-full overflow-y-hidden') }, children)));
}
exports.default = AdminLayoutCenter;
