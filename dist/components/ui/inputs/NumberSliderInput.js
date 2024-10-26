'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
function NumberSliderInput(_a) {
    var _b = _a.value, value = _b === void 0 ? [0] : _b, label = _a.label, info = _a.info, name = _a.name, handleChange = _a.handleChange, min = _a.min, max = _a.max, _c = _a.stepSize, stepSize = _c === void 0 ? 1 : _c;
    var handleInputChange = function (newValue) {
        handleChange({
            target: {
                name: name,
                value: newValue,
            },
        });
    };
    return (react_1.default.createElement("div", { className: "flex flex-col items-start justify-start w-full px-0" },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement(frontend_shadcn_1.Slider, { defaultValue: value, onValueChange: handleInputChange, step: stepSize, min: min, max: max, value: value, className: "w-full" })));
}
exports.default = NumberSliderInput;
