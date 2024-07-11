"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var CheckboxGroupInput = function (props) {
    var _a = props || {}, errors = _a.errors, label = _a.label, name = _a.name, _b = _a.value, values = _b === void 0 ? [] : _b, options = _a.options, handleChange = _a.handleChange, info = _a.info;
    var handleCheckboxChange = function (e) {
        e.preventDefault();
        var value = e.target.value;
        var newValues = values.includes(value)
            ? values.filter(function (v) { return v != value; })
            : __spreadArray(__spreadArray([], values, true), [value], false);
        handleChange({
            target: {
                name: name,
                //@ts-ignore
                value: newValues,
            },
        });
    };
    return (react_1.default.createElement(material_1.FormControl, null,
        react_1.default.createElement(material_1.FormGroup, null,
            react_1.default.createElement(components_1.InputLabel, { label: label, info: info }), options === null || options === void 0 ? void 0 :
            options.map(function (option, idx) { return (react_1.default.createElement(material_1.FormControlLabel, { key: idx, control: react_1.default.createElement(material_1.Checkbox, { name: name, checked: values.includes(String(option.value)) ? true : false, onChange: handleCheckboxChange, value: option.value }), label: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textSecondary" }, option.label) })); }))));
};
exports.default = CheckboxGroupInput;
