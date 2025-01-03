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
exports.Button = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@nextui-org/react");
var Button = (0, react_1.forwardRef)(function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.variant, variant = _c === void 0 ? 'ghost' : _c, fullWidth = _a.fullWidth, className = _a.className, children = _a.children, startIcon = _a.startIcon, endIcon = _a.endIcon, _d = _a.loading, loading = _d === void 0 ? false : _d, disabled = _a.disabled, displayAlertWarning = _a.displayAlertWarning, props = __rest(_a, ["size", "variant", "fullWidth", "className", "children", "startIcon", "endIcon", "loading", "disabled", "displayAlertWarning"]);
    return (react_1.default.createElement(react_2.Button, __assign({ ref: ref, size: size, variant: variant, fullWidth: fullWidth, className: className, disabled: disabled || loading, isLoading: loading, startContent: startIcon, endContent: endIcon }, props), children));
});
exports.Button = Button;
Button.displayName = 'Button';
