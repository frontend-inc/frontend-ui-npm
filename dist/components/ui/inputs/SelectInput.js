'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var select_1 = require("@nextui-org/select");
function SelectInput(props) {
    var label = props.label, placeholder = props.placeholder, name = props.name, value = props.value, options = props.options, handleChange = props.handleChange;
    var handleSelect = function (keys) {
        var value = keys.currentKey;
        handleChange({
            target: {
                name: name,
                value: value
            }
        });
    };
    return (react_1.default.createElement(select_1.Select, { label: label, placeholder: placeholder || 'Select an option', items: options, selectionMode: "single", selectedKeys: [value], onSelectionChange: handleSelect }, function (option) { return (react_1.default.createElement(select_1.SelectItem
    // @ts-ignore
    , { 
        // @ts-ignore
        key: option === null || option === void 0 ? void 0 : option.value }, option.label)); }));
}
exports.default = SelectInput;
