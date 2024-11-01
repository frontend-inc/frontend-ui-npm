'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var frontend_shadcn_2 = require("frontend-shadcn");
function CheckboxInput(_a) {
    var name = _a.name, value = _a.value, placeholder = _a.placeholder, label = _a.label, handleChange = _a.handleChange, _b = _a.disableBorder, disableBorder = _b === void 0 ? false : _b, info = _a.info;
    var handleCheckboxChange = function (checked) {
        handleChange({
            target: {
                name: name,
                value: checked,
            },
        });
    };
    return (react_1.default.createElement("div", { className: "w-full" },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement("div", { className: (0, frontend_shadcn_2.cn)('flex flex-col text-sm', !disableBorder && 'border border-input shadow-sm rounded-md p-2') },
            react_1.default.createElement("div", { className: "flex items-center space-x-2" },
                react_1.default.createElement(frontend_shadcn_1.Checkbox, { id: name, checked: value, onCheckedChange: handleCheckboxChange }),
                react_1.default.createElement("label", { htmlFor: name, className: "text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" }, placeholder)))));
}
exports.default = CheckboxInput;
