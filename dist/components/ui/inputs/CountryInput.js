"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var constants_1 = require("../../../constants");
var CountryInput = function (props) {
    var _a = props || {}, name = _a.name, label = _a.label, errors = _a.errors, value = _a.value, handleChange = _a.handleChange;
    return (react_1.default.createElement(__1.Autosuggest, { name: name, label: label, errors: errors, value: value, options: constants_1.COUNTRIES, handleChange: handleChange }));
};
exports.default = CountryInput;
