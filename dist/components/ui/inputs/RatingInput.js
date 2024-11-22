'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
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
        react_1.default.createElement(components_2.InputLabel, { label: label, info: info }),
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)("w-full text-[15px] focus-within:shadow-md", !disableBorder &&
                'p-4 pb-2 bg-white rounded border border-gray-200 shadow-sm') },
            react_1.default.createElement(components_1.Rating, { name: name, readOnly: readOnly, onChange: onChange, value: parseInt(value) }))));
};
exports.default = RatingInput;
