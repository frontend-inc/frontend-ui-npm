'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var SliderInput = function (props) {
    var _a = props.value, value = _a === void 0 ? [] : _a, name = props.name, handleChange = props.handleChange, _b = props.min, min = _b === void 0 ? 0 : _b, _c = props.max, max = _c === void 0 ? 10 : _c, _d = props.stepSize, stepSize = _d === void 0 ? 1 : _d, className = props.className;
    return (react_1.default.createElement(frontend_shadcn_1.Slider, { name: name, defaultValue: value, onValueChange: handleChange, step: stepSize, min: min, max: max, value: value, className: (0, frontend_shadcn_2.cn)('w-full', className) }));
};
exports.default = SliderInput;
