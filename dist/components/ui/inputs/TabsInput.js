'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
function TabsInput(props) {
    var _a = props || {}, label = _a.label, name = _a.name, handleChange = _a.handleChange, options = _a.options, _b = _a.value, value = _b === void 0 ? '' : _b;
    var handleInputChange = function (value) {
        handleChange({
            target: {
                name: name,
                value: value,
            },
        });
    };
    return (react_1.default.createElement("div", { className: "flex flex-row space-x-6 items-center justify-between w-full" },
        label && (react_1.default.createElement(components_1.InputLabel, { label: label })),
        react_1.default.createElement(react_2.Tabs, { fullWidth: true, selectedKey: value.toString(), onSelectionChange: handleInputChange }, options.map(function (option) { return (react_1.default.createElement(react_2.Tab, { key: option.value, value: option.value.toString(), title: react_1.default.createElement("div", { className: 'flex flex-row items-center' },
                option.icon && (react_1.default.createElement(components_1.RemixIcon, { size: 'lg', name: option.icon, className: "mr-2" })),
                option.label) })); }))));
}
exports.default = TabsInput;
