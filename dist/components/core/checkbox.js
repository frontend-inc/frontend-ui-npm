'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var Checkbox = function (_a) {
    var name = _a.name, _b = _a.value, value = _b === void 0 ? false : _b, handleChange = _a.handleChange, label = _a.label, className = _a.className;
    var handleClick = function () {
        handleChange({
            target: {
                name: name,
                value: !value,
            },
        });
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_2.cn)('flex items-center space-x-2', className) },
        react_1.default.createElement(frontend_shadcn_1.Checkbox, { id: name, name: name, checked: value, onClick: handleClick }),
        label && (react_1.default.createElement("label", { htmlFor: name, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" }, label))));
};
exports.Checkbox = Checkbox;
