"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var NumberSliderInput = function (props) {
    var _a = props || {}, value = _a.value, label = _a.label, info = _a.info, name = _a.name, handleChange = _a.handleChange, min = _a.min, max = _a.max, stepSize = _a.stepSize;
    var handleInputChange = function (ev, newValue) {
        handleChange({
            target: {
                name: name,
                value: newValue,
            },
        });
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.slider },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement(material_1.Slider, { defaultValue: value, valueLabelDisplay: "auto", onChange: handleInputChange, step: stepSize, min: min, max: max, value: value })));
};
exports.default = NumberSliderInput;
var sx = {
    slider: {
        px: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
    },
};
