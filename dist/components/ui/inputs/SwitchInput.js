'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
function SwitchInput(props) {
    var name = props.name, value = props.value, label = props.label, placeholder = props.placeholder, handleChange = props.handleChange;
    var onCheckedChange = function (checked) {
        handleChange({
            target: {
                name: name,
                value: checked,
            },
        });
    };
    return (react_1.default.createElement(react_2.Switch, { isSelected: value, onValueChange: onCheckedChange }, label));
}
exports.default = SwitchInput;
