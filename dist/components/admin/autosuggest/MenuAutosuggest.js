'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var MenuAutosuggest = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var errors = props.errors, value = props.value, _a = props.name, name = _a === void 0 ? 'menu_id' : _a, label = props.label, handleChange = props.handleChange, query = props.query, _b = props.direction, direction = _b === void 0 ? 'column' : _b, _c = props.placeholder, placeholder = _c === void 0 ? 'Select menu' : _c;
    return (react_1.default.createElement(components_1.RemoteAutosuggest, { direction: direction, errors: errors, name: name, label: label, value: value || '', displayField: "name", url: "".concat(apiUrl, "/menus"), placeholder: placeholder, handleChange: handleChange, defaultQuery: query, enableClear: true }));
};
exports.default = MenuAutosuggest;
