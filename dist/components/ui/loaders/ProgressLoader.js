'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
function ProgressLoader() {
    return (react_1.default.createElement("div", { className: "p-6 flex justify-center items-center" },
        react_1.default.createElement("div", { className: "relative" },
            react_1.default.createElement(frontend_shadcn_1.Progress, { className: "h-1 w-[220px] bg-transparent rounded", value: 100 }))));
}
exports.default = ProgressLoader;
