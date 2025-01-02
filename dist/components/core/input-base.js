'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputBase = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@nextui-org/react");
var InputBase = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, _b = _a.type, type = _b === void 0 ? 'text' : _b, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, props = __rest(_a, ["className", "type", "startAdornment", "endAdornment", "fullWidth"]);
    var inputClasses = (0, react_2.cn)('bg-background text-foreground', 'border border-input', 'focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring', 'disabled:cursor-not-allowed disabled:opacity-50', 'rounded-md', 'px-3 py-2', 'text-sm', fullWidth ? 'w-full' : 'w-auto', startAdornment && 'pl-10', endAdornment && 'pr-10', className);
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('relative inline-flex items-center', fullWidth && 'w-full') },
        startAdornment && (react_1.default.createElement("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2" }, startAdornment)),
        react_1.default.createElement("input", __assign({ type: type, className: inputClasses, ref: ref }, props)),
        endAdornment && (react_1.default.createElement("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2" }, endAdornment))));
});
exports.InputBase = InputBase;
InputBase.displayName = 'InputBase';
