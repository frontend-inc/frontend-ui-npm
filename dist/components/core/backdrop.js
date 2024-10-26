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
exports.Backdrop = void 0;
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var Backdrop = function (_a) {
    var children = _a.children, open = _a.open, onClick = _a.onClick, className = _a.className, props = __rest(_a, ["children", "open", "onClick", "className"]);
    if (!open)
        return null;
    return (react_1.default.createElement("div", __assign({ onClick: onClick ? onClick : undefined, className: (0, frontend_shadcn_1.cn)('bg-black fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out', open ? 'opacity-60' : 'opacity-0 pointer-events-none', className) }, props), children));
};
exports.Backdrop = Backdrop;
