"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var SliderInput = function (props) {
    var _a = props || {}, value = _a.value, name = _a.name, handleChange = _a.handleChange, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 10 : _c, _d = _a.stepSize, stepSize = _d === void 0 ? 1 : _d;
    return (react_1.default.createElement(material_1.Slider, { sx: sx.root, name: name, defaultValue: value, valueLabelDisplay: "auto", onChange: handleChange, step: stepSize, min: min, max: max, value: value }));
};
exports.default = SliderInput;
var sx = {
    root: {
        width: "100%",
    },
};
