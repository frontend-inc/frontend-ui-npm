'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var frontend_shadcn_3 = require("frontend-shadcn");
var Slider = react_1.default.forwardRef(function (_a, ref) {
    var name = _a.name, value = _a.value, handleChange = _a.handleChange, errors = _a.errors, label = _a.label, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 100 : _c, _d = _a.step, step = _d === void 0 ? 1 : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, className = _a.className;
    return (react_1.default.createElement("div", { ref: ref, className: (0, frontend_shadcn_3.cn)('space-y-2', className) },
        label && (react_1.default.createElement(frontend_shadcn_2.Label, { htmlFor: name, className: "text-sm font-medium text-foreground" }, label)),
        react_1.default.createElement(frontend_shadcn_1.Slider, { id: name, name: name, min: min, max: max, step: step, value: value, onValueChange: handleChange, disabled: disabled, className: (0, frontend_shadcn_3.cn)('w-full', disabled && 'opacity-50 cursor-not-allowed') }),
        errors && react_1.default.createElement("p", { className: "text-sm text-destructive mt-1" }, errors)));
});
exports.Slider = Slider;
Slider.displayName = 'Slider';
