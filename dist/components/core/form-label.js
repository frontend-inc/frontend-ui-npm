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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormLabel = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var FormLabel = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, required = _a.required, error = _a.error, disabled = _a.disabled, props = __rest(_a, ["className", "children", "required", "error", "disabled"]);
    return (react_1.default.createElement("label", __assign({ ref: ref, className: (0, react_2.cn)('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', error && 'text-destructive', disabled && 'opacity-50 cursor-not-allowed', className) }, props),
        children,
        required && react_1.default.createElement("span", { className: "text-destructive ml-1" }, "*")));
});
exports.FormLabel = FormLabel;
FormLabel.displayName = 'FormLabel';
