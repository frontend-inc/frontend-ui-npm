'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
var react_1 = __importStar(require("react"));
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
var sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-8 h-8',
};
function Rating(_a) {
    var name = _a.name, value = _a.value, onChange = _a.onChange, _b = _a.max, max = _b === void 0 ? 5 : _b, _c = _a.precision, precision = _c === void 0 ? 1 : _c, _d = _a.size, size = _d === void 0 ? 'md' : _d, _e = _a.readOnly, readOnly = _e === void 0 ? false : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, className = _a.className;
    var _g = (0, react_1.useState)(null), hoverValue = _g[0], setHoverValue = _g[1];
    var handleMouseMove = function (event, index) {
        if (readOnly || disabled)
            return;
        var rect = event.currentTarget.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var percent = x / rect.width;
        if (precision === 0.5) {
            setHoverValue(percent > 0.5 ? index + 1 : index + 0.5);
        }
        else {
            setHoverValue(percent > 0.5 ? index + 1 : index);
        }
    };
    var handleMouseLeave = function () {
        setHoverValue(null);
    };
    var handleClick = function (index) {
        if (readOnly || disabled)
            return;
        onChange(hoverValue || index + 1);
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('inline-flex', disabled && 'opacity-50 cursor-not-allowed', className) }, __spreadArray([], Array(max), true).map(function (_, index) {
        var filled = (hoverValue !== null ? hoverValue : value) > index;
        var halfFilled = precision === 0.5 &&
            (hoverValue !== null ? hoverValue : value) === index + 0.5;
        return (react_1.default.createElement("div", { key: index, className: (0, frontend_shadcn_1.cn)('relative cursor-pointer', sizeClasses[size], readOnly && 'cursor-default', disabled && 'cursor-not-allowed'), onMouseMove: function (e) { return handleMouseMove(e, index); }, onMouseLeave: handleMouseLeave, onClick: function () { return handleClick(index); } },
            react_1.default.createElement("input", { type: "radio", name: name, value: index + 1, className: "sr-only", disabled: disabled || readOnly, checked: value === index + 1, onChange: function () { } }),
            halfFilled ? (react_1.default.createElement(lucide_react_1.StarHalf, { className: (0, frontend_shadcn_1.cn)('text-primary', sizeClasses[size]) })) : (react_1.default.createElement(lucide_react_1.Star, { className: (0, frontend_shadcn_1.cn)(filled ? 'text-primary' : 'text-muted-foreground', sizeClasses[size]), fill: filled ? 'currentColor' : 'none' }))));
    })));
}
exports.Rating = Rating;
