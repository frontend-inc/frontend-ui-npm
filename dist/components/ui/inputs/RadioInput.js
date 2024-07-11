"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var RadioInput = function (props) {
    var label = props.label, info = props.info, name = props.name, value = props.value, options = props.options, handleChange = props.handleChange;
    return (react_1.default.createElement(material_1.FormControl, { fullWidth: true, component: "fieldset" },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement(material_1.RadioGroup, { name: name, value: String(value), onChange: handleChange }, options === null || options === void 0 ? void 0 : options.map(function (option, idx) { return (react_1.default.createElement(material_1.FormControlLabel, { key: idx, value: String(option.value), control: react_1.default.createElement(material_1.Radio, null), label: react_1.default.createElement(material_1.Typography, { variant: "body2" }, option.label) })); }))));
};
exports.default = RadioInput;
