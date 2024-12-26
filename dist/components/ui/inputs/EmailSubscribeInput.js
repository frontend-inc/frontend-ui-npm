// @ts-nocheck
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
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var EmailSubscribeInput = function (props) {
    var _a = props || {}, loading = _a.loading, name = _a.name, _b = _a.placeholder, placeholder = _b === void 0 ? 'Enter your email' : _b, _c = _a.buttonText, buttonText = _c === void 0 ? 'Subscribe' : _c, handleSubmit = _a.handleSubmit, _d = _a.size, size = _d === void 0 ? 'default' : _d, rest = __rest(_a, ["loading", "name", "placeholder", "buttonText", "handleSubmit", "size"]);
    var sizeClasses = {
        sm: 'h-[38px] md:min-w-[160px]',
        default: 'h-[38px] md:min-w-[220px]',
        lg: 'h-[48px] md:min-w-[280px]',
    };
    return (react_1.default.createElement("div", { className: "flex flex-row items-center" },
        react_1.default.createElement("div", { className: "md:max-w-[360px] w-full p-1 flex flex-row justify-center items-center" },
            react_1.default.createElement(__1.InputBase, __assign({ name: name, placeholder: placeholder, type: "email", className: (0, frontend_shadcn_1.cn)("rounded-l-md text-base rounded-r-none border-r-0", sizeClasses[size]) }, rest)),
            react_1.default.createElement(components_1.Button, { size: size, onClick: handleSubmit, className: "rounded-l-none rounded-r-md text-base", loading: loading }, buttonText))));
};
exports.default = EmailSubscribeInput;
