"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var UserAutosuggest = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var _a = props || {}, errors = _a.errors, _b = _a.name, name = _b === void 0 ? 'user_id' : _b, label = _a.label, value = _a.value, _c = _a.direction, direction = _c === void 0 ? 'column' : _c, _d = _a.displayField, displayField = _d === void 0 ? 'username' : _d, handleChange = _a.handleChange, _e = _a.placeholder, placeholder = _e === void 0 ? 'Select user' : _e;
    if (!apiUrl)
        return null;
    return (react_1.default.createElement(components_1.RemoteAutosuggest, { enableClear: true, errors: errors, direction: direction, name: name, label: label, value: value, displayField: displayField, imageField: 'avatar.url', url: "".concat(apiUrl, "/users"), placeholder: placeholder, handleChange: handleChange }));
};
exports.default = UserAutosuggest;
