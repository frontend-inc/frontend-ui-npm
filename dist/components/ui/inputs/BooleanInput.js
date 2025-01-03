'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var BooleanInput = function (props) {
    var name = props.name, value = props.value, handleChange = props.handleChange, label = props.label;
    var handleTabChange = function (ev) {
        var newValue = ev.target.value == 'true' ? true : false;
        handleChange({
            target: {
                name: name,
                value: newValue,
            },
        });
    };
    return (react_1.default.createElement(__1.TabsInput, { name: name, label: label, options: [
            { label: 'No', value: 'false' },
            { label: 'Yes', value: 'true' },
        ], value: value == true ? 'true' : 'false', handleChange: handleTabChange }));
};
exports.default = BooleanInput;
