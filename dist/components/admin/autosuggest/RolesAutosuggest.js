"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var RolesAutosuggest = function (props) {
    var value = props.value, _a = props.name, name = _a === void 0 ? 'locale' : _a, direction = props.direction, label = props.label, handleChange = props.handleChange;
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    if (!apiUrl)
        return null;
    return (react_1.default.createElement(components_1.RemoteAutosuggest, { name: name, label: label, value: value, direction: direction, displayField: "label", valueParam: "name", url: "".concat(apiUrl, "/roles"), placeholder: "Select role", handleChange: handleChange }));
};
exports.default = RolesAutosuggest;
