'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
function CheckboxGroupInput(_a) {
    var errors = _a.errors, label = _a.label, name = _a.name, _b = _a.value, values = _b === void 0 ? [] : _b, options = _a.options, handleChange = _a.handleChange, info = _a.info;
    var handleCheckboxChange = function (checked, value) {
        var newValues = checked
            ? __spreadArray(__spreadArray([], values, true), [value], false) : values.filter(function (v) { return v !== value; });
        handleChange({
            target: {
                name: name,
                // @ts-ignore
                value: newValues,
            },
        });
    };
    return (react_1.default.createElement("div", { className: "w-full" },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement("div", { className: "space-y-2" }, options === null || options === void 0 ? void 0 : options.map(function (option, idx) { return (react_1.default.createElement("div", { key: idx, className: "flex items-center space-x-2" },
            react_1.default.createElement(frontend_shadcn_1.Checkbox, { id: "".concat(name, "-").concat(option.value), checked: values.includes(String(option.value)), onCheckedChange: function (checked) {
                    return handleCheckboxChange(checked, String(option.value));
                } }),
            react_1.default.createElement("label", { htmlFor: "".concat(name, "-").concat(option.value), className: (0, react_2.cn)('text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', errors && errors[name] ? 'text-red-500' : 'text-gray-500') }, option.label))); })),
        errors && errors[name] && (react_1.default.createElement("p", { className: "mt-2 text-sm text-red-500" }, errors[name]))));
}
exports.default = CheckboxGroupInput;
