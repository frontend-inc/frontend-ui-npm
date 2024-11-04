'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var SlugInput = function (props) {
    var errors = props.errors, _a = props.direction, direction = _a === void 0 ? 'column' : _a, value = props.value, name = props.name, label = props.label, info = props.info, placeholder = props.placeholder, handleChange = props.handleChange, disabled = props.disabled;
    var handleInputChange = function (ev) {
        var value = ev.target.value;
        value = value.replace(' ', '-');
        value = value.toLowerCase();
        handleChange({
            target: {
                name: name,
                value: value,
            },
        });
    };
    return (react_1.default.createElement(__1.TextInput, { disableDebounce: true, direction: direction, errors: errors, value: value, disabled: disabled, placeholder: placeholder, handleChange: handleInputChange, name: name, label: label, info: info }));
};
exports.default = SlugInput;
