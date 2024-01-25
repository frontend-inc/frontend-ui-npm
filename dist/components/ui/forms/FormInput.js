"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var FormInput = function (props) {
    var variant = props.variant, name = props.name, label = props.label, errors = props.errors, value = props.value, placeholder = props.placeholder, handleChange = props.handleChange, handleRemove = props.handleRemove;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        variant === 'array' && (react_1.default.createElement(components_1.ArrayInput, { errors: errors, label: label, name: name, value: value, handleChange: handleChange, placeholder: placeholder })),
        variant === 'string' && (react_1.default.createElement(components_1.TextInput, { errors: errors, label: label, name: name, value: value, handleChange: handleChange, placeholder: placeholder })),
        variant === 'url' && (react_1.default.createElement(components_1.TextInput, { errors: errors, label: label, name: name, value: value, handleChange: handleChange, placeholder: placeholder })),
        variant === 'text' && (react_1.default.createElement(components_1.TextInput, { multiline: true, rows: 6, errors: errors, label: label, name: name, value: value, handleChange: handleChange, placeholder: placeholder })),
        variant === 'number' && (react_1.default.createElement(components_1.TextInput, { errors: errors, label: label, name: name, value: value, handleChange: handleChange, placeholder: placeholder })),
        variant === 'date' && (react_1.default.createElement(components_1.DateInput, { errors: errors, label: label, name: name, value: value, handleChange: handleChange, placeholder: placeholder })),
        variant === 'boolean' && (react_1.default.createElement(components_1.SwitchInput, { errors: errors, label: label, name: name, value: value, handleChange: handleChange, placeholder: placeholder })),
        variant === 'select' && (react_1.default.createElement(components_1.ArrayInput, { errors: errors, label: label, name: name, value: value, handleChange: handleChange, placeholder: placeholder })),
        variant === 'rating' && (react_1.default.createElement(components_1.RatingInput, { errors: errors, label: label, name: name, value: value, handleChange: handleChange, placeholder: placeholder })),
        variant === 'image' && (react_1.default.createElement(components_1.ImageInput, { errors: errors, label: label, name: name, value: value, handleChange: handleChange, handleRemove: handleRemove })),
        variant === 'json' && (react_1.default.createElement(components_1.JSONInput, { errors: errors, label: label, name: name, value: value, handleChange: handleChange, placeholder: placeholder }))));
};
exports.default = FormInput;
