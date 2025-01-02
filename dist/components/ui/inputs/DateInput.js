'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
function DateInput(props) {
    var _a = props || {}, errors = _a.errors, label = _a.label, name = _a.name, value = _a.value, handleChange = _a.handleChange;
    var handleDateChange = function (date) {
        console.log('date', date);
    };
    return (react_1.default.createElement(react_2.DatePicker, { label: label, value: value, name: name, className: "max-w-[284px]", 
        //@ts-ignore
        onChange: handleDateChange }));
}
exports.default = DateInput;
