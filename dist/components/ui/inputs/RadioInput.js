'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var components_1 = require("../../../components");
var frontend_shadcn_3 = require("frontend-shadcn");
var core_1 = require("../../core");
function RadioInput(_a) {
    var label = _a.label, info = _a.info, name = _a.name, value = _a.value, options = _a.options, handleChange = _a.handleChange;
    return (react_1.default.createElement(frontend_shadcn_3.FormControl, { className: "w-full" },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement(frontend_shadcn_1.RadioGroup, { name: name, value: String(value), onValueChange: function (newValue) {
                return handleChange({
                    target: { name: name, value: newValue },
                });
            }, className: "mt-2" }, options === null || options === void 0 ? void 0 : options.map(function (option, idx) { return (react_1.default.createElement("div", { key: idx, className: "flex items-center space-x-2" },
            react_1.default.createElement(frontend_shadcn_1.RadioGroupItem, { value: String(option.value), id: "".concat(name, "-").concat(option.value) }),
            react_1.default.createElement(frontend_shadcn_2.Label, { htmlFor: "".concat(name, "-").concat(option.value) },
                react_1.default.createElement(core_1.Typography, { variant: "body2" }, option.label)))); }))));
}
exports.default = RadioInput;
