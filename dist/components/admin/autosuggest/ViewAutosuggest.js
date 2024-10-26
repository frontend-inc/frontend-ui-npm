'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var ViewAutosuggest = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var value = props.value, _a = props.name, name = _a === void 0 ? 'view_id' : _a, label = props.label, handleChange = props.handleChange, _b = props.query, query = _b === void 0 ? {} : _b, _c = props.placeholder, placeholder = _c === void 0 ? 'Select view' : _c;
    if (!apiUrl)
        return null;
    return (react_1.default.createElement(components_1.RemoteAutosuggest, { name: name, label: label, value: value, displayField: "name", url: "".concat(apiUrl, "/views"), placeholder: placeholder, handleChange: handleChange, defaultQuery: query }));
};
exports.default = ViewAutosuggest;
