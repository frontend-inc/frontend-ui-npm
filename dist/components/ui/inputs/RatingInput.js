'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var components_1 = require("../../../components");
var RatingInput = function (props) {
    var label = props.label, value = props.value, name = props.name, handleChange = props.handleChange, _a = props.disableBorder, disableBorder = _a === void 0 ? false : _a, _b = props.readOnly, readOnly = _b === void 0 ? false : _b, info = props.info;
    var onChange = function (value) {
        handleChange({
            target: {
                name: name,
                value: value,
            },
        });
    };
    return (react_1.default.createElement("div", { className: "w-full flex flex-col items-start space-y-4" },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement("div", { className: "w-full text-[15px] focus-within:shadow-md ".concat(!disableBorder
                ? 'p-4 pb-2 bg-white rounded border border-gray-200 shadow-sm'
                : '') },
            react_1.default.createElement(core_1.Rating, { name: name, readOnly: readOnly, onChange: onChange, value: parseInt(value) }))));
};
exports.default = RatingInput;
