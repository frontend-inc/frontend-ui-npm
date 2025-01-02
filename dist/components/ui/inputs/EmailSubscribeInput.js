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
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../components");
var EmailSubscribeInput = function (props) {
    var _a = props || {}, loading = _a.loading, label = _a.label, name = _a.name, value = _a.value, handleChange = _a.handleChange, _b = _a.placeholder, placeholder = _b === void 0 ? 'Enter your email' : _b, _c = _a.buttonText, buttonText = _c === void 0 ? 'Subscribe' : _c, handleSubmit = _a.handleSubmit, _d = _a.size, size = _d === void 0 ? 'md' : _d, rest = __rest(_a, ["loading", "label", "name", "value", "handleChange", "placeholder", "buttonText", "handleSubmit", "size"]);
    var handleValueChange = function (text) {
        handleChange({
            target: {
                name: name,
                value: text
            }
        });
    };
    return (react_1.default.createElement("div", { className: "flex flex-row space-x-2 items-center w-full max-w-[280px]" },
        react_1.default.createElement(react_2.Input, __assign({ label: label, name: name, placeholder: placeholder, type: "email", size: size, value: value, onValueChange: handleValueChange, startContent: react_1.default.createElement(components_1.RemixIcon, { name: "ri-mail-fill" }), classNames: {
                base: "rounded-r-none text-base",
            } }, rest)),
        react_1.default.createElement(react_2.Button, { size: size, variant: "solid", color: "primary", onPress: handleSubmit, isLoading: loading }, buttonText)));
};
exports.default = EmailSubscribeInput;
