'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
function AutocompleteInput(props) {
    var _a = props.name, name = _a === void 0 ? 'title' : _a, _b = props.value, value = _b === void 0 ? '' : _b, label = props.label, _c = props.placeholder, placeholder = _c === void 0 ? 'Search' : _c, handleChange = props.handleChange, handleInputChange = props.handleInputChange, _d = props.options, options = _d === void 0 ? [] : _d;
    var handleKeywordsChange = function (input) {
        if (input) {
            handleInputChange(input);
        }
    };
    var handleSelectionChange = function (value) {
        handleChange({
            target: {
                name: name,
                value: value,
            },
        });
    };
    return (react_1.default.createElement(react_2.Autocomplete, { name: name, label: label, placeholder: placeholder, onInputChange: handleKeywordsChange, items: options, onSelectionChange: handleSelectionChange }, function (option) { return (react_1.default.createElement(react_2.AutocompleteItem, { key: option.value, startContent: react_1.default.createElement(react_2.Avatar, { alt: "Argentina", src: option === null || option === void 0 ? void 0 : option.image, radius: "sm" }) }, option.label)); }));
}
exports.default = AutocompleteInput;
