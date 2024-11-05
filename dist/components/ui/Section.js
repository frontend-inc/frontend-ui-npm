'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var maxWidthClasses = {
    sm: 'container mx-auto max-w-screen-sm',
    md: 'container mx-auto max-w-screen-md',
    lg: 'container mx-auto max-w-screen-lg',
    xl: 'container mx-auto max-w-screen-xl',
};
var Section = function (props) {
    var _a = props.requireAuth, requireAuth = _a === void 0 ? false : _a, _b = props.requirePaid, requirePaid = _b === void 0 ? false : _b, children = props.children, bgColor = props.bgColor, mode = props.mode, maxWidth = props.maxWidth, _c = props.py, py = _c === void 0 ? 12 : _c, _d = props.px, px = _d === void 0 ? 6 : _d;
    return (react_1.default.createElement("section", { className: (0, frontend_shadcn_1.cn)(mode == 'dark' && 'dark', 'w-full bg-background', py > 0 && 'py-[60px]', px && "px-".concat(px)), style: { backgroundColor: bgColor } },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(maxWidth && maxWidthClasses[maxWidth], 'w-full mx-auto min-h-[60px] flex flex-row justify-center items-center') },
            react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full overflow-x-hidden', 'transition-all duration-300 ease-in-out') },
                react_1.default.createElement(components_1.AuthGuard, { requireAuth: requireAuth, requirePaid: requirePaid }, children)))));
};
exports.default = Section;
