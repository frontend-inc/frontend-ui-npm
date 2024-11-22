'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var hooks_1 = require("../../hooks");
var maxWidthClasses = {
    sm: 'container mx-auto max-w-screen-sm',
    md: 'container mx-auto max-w-screen-md',
    lg: 'container mx-auto max-w-screen-lg',
    xl: 'container mx-auto max-w-screen-xl',
};
var Section = function (props) {
    var theme = (0, hooks_1.useTheme)().theme;
    var _a = props.requireAuth, requireAuth = _a === void 0 ? false : _a, children = props.children, bgColor = props.bgColor, mode = props.mode, maxWidth = props.maxWidth, _b = props.fill, fill = _b === void 0 ? false : _b, border = props.border, _c = props.py, py = _c === void 0 ? 'md' : _c, _d = props.px, px = _d === void 0 ? 'sm' : _d;
    var pyClasses = {
        none: 'py-0',
        sm: 'py-[24px]',
        md: 'py-[48px]',
        lg: 'py-[96px]',
        xl: 'py-[144px]',
    };
    var pxClasses = {
        none: 'px-0',
        sm: 'px-6',
        md: 'px-12',
        lg: 'px-24',
        xl: 'px-48',
    };
    return (react_1.default.createElement("section", { className: (0, frontend_shadcn_1.cn)(mode, theme, 'w-full bg-background', pyClasses[py], pxClasses[px]), style: { backgroundColor: bgColor } },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(border && 'p-8 border-2 border-border rounded-xl', fill && 'p-8 rounded-xl bg-muted/60', maxWidth && maxWidthClasses[maxWidth], 'w-full mx-auto min-h-[60px] flex flex-row justify-center items-center') },
            react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full overflow-x-hidden', 'transition-all duration-300 ease-in-out') },
                react_1.default.createElement(components_1.AuthGuard, { requireAuth: requireAuth }, children)))));
};
exports.default = Section;
