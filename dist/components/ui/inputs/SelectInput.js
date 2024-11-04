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
function SelectInput(_a) {
    var label = _a.label, _b = _a.direction, direction = _b === void 0 ? 'column' : _b, name = _a.name, value = _a.value, options = _a.options, handleChange = _a.handleChange, info = _a.info;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_2.cn)('w-full', direction === 'row'
            ? 'flex items-center space-x-4'
            : 'flex flex-col space-y-2') },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement(frontend_shadcn_1.Select, { value: value, onValueChange: function (newValue) {
                return handleChange({ target: { name: name, value: newValue } });
            } },
            react_1.default.createElement(frontend_shadcn_1.SelectTrigger, { className: "w-full min-w-[165px] h-10 bg-background border border-input shadow-none rounded text-foreground" },
                react_1.default.createElement(frontend_shadcn_1.SelectValue, { placeholder: "Select an option" })),
            react_1.default.createElement(frontend_shadcn_1.SelectContent, { className: "bg-background min-w-[165px]" }, options === null || options === void 0 ? void 0 : options.map(function (option, idx) { return (react_1.default.createElement(frontend_shadcn_1.SelectItem, { key: idx, 
                // @ts-ignore
                value: option.value }, option.label)); })))));
}
exports.default = SelectInput;
