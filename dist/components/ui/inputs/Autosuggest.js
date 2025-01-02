'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var Autosuggest = function (props) {
    var label = props.label, name = props.name, value = props.value, _a = props.placeholder, placeholder = _a === void 0 ? 'Search...' : _a, handleChange = props.handleChange, handleInputChange = props.handleInputChange, _b = props.options, options = _b === void 0 ? [] : _b;
    var handleSelection = function (value) {
        handleChange({
            target: {
                name: name,
                value: value,
            }
        });
    };
    return (react_1.default.createElement(react_2.Autocomplete, { "aria-label": label, label: label, 
        //@ts-ignore
        selectedKeys: [value], onSelectionChange: handleSelection, defaultItems: options, onInputChange: handleInputChange, placeholder: placeholder }, function (option) { return (react_1.default.createElement(react_2.AutocompleteItem, { key: option.value }, option.label)); }));
};
exports.default = Autosuggest;
