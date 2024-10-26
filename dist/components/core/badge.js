'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var colorClasses = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    error: 'bg-destructive text-destructive-foreground',
    info: 'bg-info text-info-foreground',
    success: 'bg-success text-success-foreground',
    warning: 'bg-warning text-warning-foreground',
};
var Badge = function (_a) {
    var children = _a.children, badgeContent = _a.badgeContent, _b = _a.variant, variant = _b === void 0 ? 'standard' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, _d = _a.max, max = _d === void 0 ? 99 : _d, _e = _a.showZero, showZero = _e === void 0 ? false : _e, _f = _a.invisible, invisible = _f === void 0 ? false : _f, className = _a.className, badgeClassName = _a.badgeClassName;
    var badgeValue = typeof badgeContent === 'number' && badgeContent > max
        ? "".concat(max, "+")
        : badgeContent;
    var shouldShow = !invisible && (showZero || badgeContent !== 0);
    var badgeClasses = (0, frontend_shadcn_1.cn)('absolute -top-2 -right-2 flex items-center justify-center', variant === 'standard'
        ? 'min-w-[20px] h-5 px-1 rounded-full text-xs font-bold'
        : 'w-3 h-3 rounded-full', colorClasses[color], !shouldShow && 'opacity-0', badgeClassName);
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('relative inline-flex', className) },
        children,
        shouldShow && (react_1.default.createElement("span", { className: badgeClasses }, variant === 'standard' && badgeValue))));
};
exports.Badge = Badge;
