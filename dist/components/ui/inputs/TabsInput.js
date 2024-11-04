'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
function TabsInput(_a) {
    var name = _a.name, label = _a.label, handleChange = _a.handleChange, options = _a.options, value = _a.value, info = _a.info;
    var handleInputChange = function (value) {
        handleChange({
            target: {
                name: name,
                value: value,
            },
        });
    };
    return (react_1.default.createElement("div", { className: 'flex flex-row items-center justify-between w-full space-y-1' },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement(frontend_shadcn_1.Tabs, { value: value.toString(), onValueChange: handleInputChange, className: "rounded-md" },
            react_1.default.createElement(frontend_shadcn_1.TabsList, { className: (0, frontend_shadcn_2.cn)('w-full') }, options.map(function (option) { return (react_1.default.createElement(frontend_shadcn_1.TabsTrigger, { key: option.value, value: option.value.toString(), className: (0, frontend_shadcn_2.cn)('flex items-center text-sm') },
                option.icon && (react_1.default.createElement("span", { className: 'inline-block mr-2' }, option.icon)),
                option.label)); })))));
}
exports.default = TabsInput;
