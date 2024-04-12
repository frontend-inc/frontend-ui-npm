"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FormInput_1 = __importDefault(require("./FormInput"));
var FormFieldInput = function (props) {
    var field = props.field, errors = props.errors, value = props.value, handleChange = props.handleChange, handleRemove = props.handleRemove;
    var name = field.name, label = field.label, placeholder = field.placeholder, variant = field.variant, options = field.options;
    return (react_1.default.createElement(FormInput_1.default, { name: name, label: label, placeholder: placeholder, variant: variant, options: options, value: value, errors: errors, handleChange: handleChange, handleRemove: handleRemove }));
};
exports.default = FormFieldInput;
