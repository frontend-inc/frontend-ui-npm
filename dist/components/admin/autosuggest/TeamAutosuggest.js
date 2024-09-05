"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var TeamAutosuggest = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var _a = props || {}, errors = _a.errors, _b = _a.direction, direction = _b === void 0 ? 'column' : _b, _c = _a.name, name = _c === void 0 ? 'team_id' : _c, label = _a.label, value = _a.value, _d = _a.displayField, displayField = _d === void 0 ? 'name' : _d, handleChange = _a.handleChange;
    if (!apiUrl)
        return null;
    return (react_1.default.createElement(components_1.RemoteAutosuggest, { enableClear: true, errors: errors, direction: direction, name: name, label: label, value: value, displayField: displayField, imageField: 'image.url', url: "".concat(apiUrl, "/teams"), placeholder: "Select team", handleChange: handleChange }));
};
exports.default = TeamAutosuggest;
