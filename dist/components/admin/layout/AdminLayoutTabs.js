'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
function AdminLayoutTabs(_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: "w-[60px] h-screen bg-background" },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full h-full flex flex-col items-center justify-between', 'xs:gap-[5px] sm:gap-0') }, children)));
}
exports.default = AdminLayoutTabs;
