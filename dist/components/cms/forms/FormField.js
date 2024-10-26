'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FormInput_1 = __importDefault(require("./FormInput"));
var FormField = function (props) {
    var field = props.field, errors = props.errors, value = props.value, handleChange = props.handleChange, handleRemove = props.handleRemove, handleAddAttachment = props.handleAddAttachment, handleRemoveAttachment = props.handleRemoveAttachment, inputOptions = props.inputOptions, inputParams = props.inputParams;
    var name = field.name, label = field.label, placeholder = field.placeholder, variant = field.variant, options = field.options, displayField = field.displayField, valueParam = field.valueParam;
    return (react_1.default.createElement(FormInput_1.default, { errors: errors, name: name, label: label, placeholder: placeholder, variant: variant, options: options, value: value, handleChange: handleChange, handleRemove: handleRemove, handleAddAttachment: handleAddAttachment, handleRemoveAttachment: handleRemoveAttachment, displayField: displayField, valueParam: valueParam, inputOptions: inputOptions, inputParams: inputParams }));
};
exports.default = FormField;
