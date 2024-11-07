'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var PolicyAutosuggest = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var errors = props.errors, value = props.value, _a = props.name, name = _a === void 0 ? 'policy' : _a, _b = props.direction, direction = _b === void 0 ? 'column' : _b, label = props.label, _c = props.valueParam, valueParam = _c === void 0 ? 'handle' : _c, handleChange = props.handleChange, _d = props.placeholder, placeholder = _d === void 0 ? 'Select action' : _d;
    if (!apiUrl)
        return null;
    return (react_1.default.createElement(__1.RemoteAutosuggest, { enableClear: true, errors: errors, name: name, label: label, value: value, displayField: "title", valueParam: valueParam, direction: direction, url: "".concat(apiUrl, "/policies"), placeholder: placeholder, handleChange: handleChange }));
};
exports.default = PolicyAutosuggest;
