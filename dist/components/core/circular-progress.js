'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularProgress = void 0;
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var lucide_react_1 = require("lucide-react");
var sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
};
var colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    error: 'text-destructive',
    warning: 'text-warning',
    info: 'text-info',
};
var CircularProgress = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, _d = _a.thickness, thickness = _d === void 0 ? 4 : _d, _e = _a.value, value = _e === void 0 ? 0 : _e, _f = _a.variant, variant = _f === void 0 ? 'indeterminate' : _f, className = _a.className;
    var sizeClass = sizeClasses[size];
    var colorClass = colorClasses[color];
    if (variant === 'indeterminate') {
        return (react_1.default.createElement(lucide_react_1.Loader2, { className: (0, frontend_shadcn_1.cn)('animate-spin', sizeClass, colorClass, className) }));
    }
    var circumference = 2 * Math.PI * 16; // Assuming a default SVG size of 32x32 with a radius of 16
    var strokeDasharray = circumference;
    var strokeDashoffset = circumference - (value / 100) * circumference;
    return (react_1.default.createElement("svg", { className: (0, frontend_shadcn_1.cn)(sizeClass, colorClass, className), viewBox: "0 0 32 32" },
        react_1.default.createElement("circle", { className: "opacity-25", cx: "16", cy: "16", r: "14", fill: "none", stroke: "currentColor", strokeWidth: thickness }),
        react_1.default.createElement("circle", { className: "opacity-75", cx: "16", cy: "16", r: "14", fill: "none", stroke: "currentColor", strokeWidth: thickness, strokeDasharray: strokeDasharray, strokeDashoffset: strokeDashoffset, transform: "rotate(-90 16 16)" })));
};
exports.CircularProgress = CircularProgress;
