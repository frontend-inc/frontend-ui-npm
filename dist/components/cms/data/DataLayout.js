'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
function DataLayout(_a) {
    var loading = _a.loading, _b = _a.layout, layout = _b === void 0 ? 'grid' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, children = _a.children;
    var gridSize = {
        sm: 'grid-cols-[repeat(auto-fill,minmax(250px,1fr))]',
        md: 'grid-cols-[repeat(auto-fill,minmax(300px,1fr))]',
        lg: 'grid-cols-[repeat(auto-fill,minmax(350px,1fr))]',
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_2.cn)('w-full', loading && 'opacity-50') },
        layout == 'grid' && (react_1.default.createElement("div", { className: (0, frontend_shadcn_2.cn)('w-full gap-4 pb-1 grid', gridSize[size]) }, children)),
        layout == 'list' && (react_1.default.createElement("div", { className: "w-full flex flex-col space-y-4" }, children)),
        layout == 'slider' && (react_1.default.createElement(frontend_shadcn_1.ScrollArea, { className: (0, frontend_shadcn_2.cn)('w-full whitespace-nowrap pb-4', loading && 'opacity-50') },
            react_1.default.createElement("div", { className: "flex flex-row w-full space-x-4" }, children)))));
}
exports.default = DataLayout;
