"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var CollectionAutosuggest = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var errors = props.errors, value = props.value, _a = props.name, name = _a === void 0 ? 'collection_id' : _a, _b = props.direction, direction = _b === void 0 ? 'column' : _b, label = props.label, handleChange = props.handleChange, _c = props.placeholder, placeholder = _c === void 0 ? 'Select collection' : _c, _d = props.query, defaultQuery = _d === void 0 ? {} : _d;
    if (!apiUrl)
        return null;
    return (react_1.default.createElement(components_1.RemoteAutosuggest, { enableClear: true, errors: errors, name: name, label: label, value: value, displayField: "name", direction: direction, url: "".concat(apiUrl, "/collections"), placeholder: placeholder, handleChange: handleChange, defaultQuery: defaultQuery }));
};
exports.default = CollectionAutosuggest;
