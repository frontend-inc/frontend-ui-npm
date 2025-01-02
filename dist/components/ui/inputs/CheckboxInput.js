'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
function CheckboxInput(_a) {
    var name = _a.name, value = _a.value, placeholder = _a.placeholder, label = _a.label, handleChange = _a.handleChange, _b = _a.disableBorder, disableBorder = _b === void 0 ? false : _b, info = _a.info;
    var handleCheckboxChange = function (checked) {
        handleChange({
            target: {
                name: name,
                value: checked,
            },
        });
    };
    return (react_1.default.createElement(react_2.Checkbox, { id: name, isSelected: value, onValueChange: handleCheckboxChange }, label));
}
exports.default = CheckboxInput;
