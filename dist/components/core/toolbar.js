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
exports.Toolbar = void 0;
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var Toolbar = function (_a) {
    var children = _a.children, _b = _a.disableGutters, disableGutters = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? 'regular' : _c, className = _a.className, props = __rest(_a, ["children", "disableGutters", "variant", "className"]);
    return (react_1.default.createElement("div", __assign({ className: (0, frontend_shadcn_1.cn)('flex items-center', variant === 'regular' ? 'min-h-[64px]' : 'min-h-[48px]', !disableGutters && 'px-4', className) }, props), children));
};
exports.Toolbar = Toolbar;
