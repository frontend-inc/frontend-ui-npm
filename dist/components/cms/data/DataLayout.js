'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
function DataLayout(_a) {
    var loading = _a.loading, _b = _a.grid, grid = _b === void 0 ? false : _b, children = _a.children;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full', grid
            ? 'grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pb-1'
            : 'flex flex-col space-y-4', loading && 'opacity-50') }, children));
}
exports.default = DataLayout;
