'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
function CustomTableCell(_a) {
    var children = _a.children, _b = _a.header, header = _b === void 0 ? false : _b, _c = _a.sticky, sticky = _c === void 0 ? false : _c, _d = _a.small, small = _d === void 0 ? false : _d, _e = _a.variant, variant = _e === void 0 ? 'body' : _e;
    var cellClasses = (0, frontend_shadcn_2.cn)('px-1 min-w-[100px] bg-background overflow-x-auto whitespace-nowrap max-w-[240px] scrollbar-hide', small && 'min-w-[40px] w-[40px]', sticky && 'sticky left-0 z-20');
    if (variant === 'head' || header) {
        return react_1.default.createElement(frontend_shadcn_1.TableHead, { className: cellClasses }, children);
    }
    return react_1.default.createElement(frontend_shadcn_1.TableCell, { className: cellClasses }, children);
}
exports.default = CustomTableCell;
