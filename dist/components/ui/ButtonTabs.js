'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var react_2 = require("@nextui-org/react");
function ButtonTabs(props) {
    var handleChange = props.handleChange, _a = props.variant, variant = _a === void 0 ? 'solid' : _a, options = props.options, value = props.value, className = props.className, fullWidth = props.fullWidth, _b = props.isVertical, isVertical = _b === void 0 ? false : _b;
    return (
    //@ts-ignore
    react_1.default.createElement(react_2.Tabs, { isVertical: isVertical, fullWidth: fullWidth, variant: variant, selectedKey: value.toString(), onSelectionChange: handleChange, className: className }, options.map(function (tab, i) { return (react_1.default.createElement(react_2.Tab, { key: tab.value, title: react_1.default.createElement("div", { className: "flex space-x-2 items-center" },
            tab.icon && react_1.default.createElement(__1.RemixIcon, { size: "lg", name: tab.icon }),
            tab.label && react_1.default.createElement("span", { className: "text-sm" }, tab.label)) })); })));
}
exports.default = ButtonTabs;
