'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var MetafieldAutosuggest = function (props) {
    var value = props.value, _a = props.query, query = _a === void 0 ? {} : _a, _b = props.name, name = _b === void 0 ? 'metafield_id' : _b, label = props.label, _c = props.placeholder, placeholder = _c === void 0 ? 'Select field' : _c, handleChange = props.handleChange, _d = props.valueParam, valueParam = _d === void 0 ? 'id' : _d, _e = props.direction, direction = _e === void 0 ? 'column' : _e, _f = props.defaultOptions, defaultOptions = _f === void 0 ? [] : _f;
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    if (!apiUrl)
        return null;
    return (react_1.default.createElement(components_1.RemoteAutosuggest, { name: name, label: label, value: value, direction: direction, valueParam: valueParam, displayField: 'label', url: "".concat(apiUrl, "/metafields"), placeholder: placeholder, handleChange: handleChange, defaultQuery: query, defaultOptions: defaultOptions }));
};
exports.default = MetafieldAutosuggest;
