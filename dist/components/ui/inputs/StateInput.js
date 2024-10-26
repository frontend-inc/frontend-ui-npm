'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var constants_1 = require("../../../constants");
var StateInput = function (props) {
    var _a = props || {}, name = _a.name, label = _a.label, errors = _a.errors, value = _a.value, handleChange = _a.handleChange;
    return (react_1.default.createElement(components_1.Autosuggest, { name: name, label: label, value: value, 
        //@ts-ignore
        options: constants_1.STATES, handleChange: handleChange }));
};
exports.default = StateInput;
