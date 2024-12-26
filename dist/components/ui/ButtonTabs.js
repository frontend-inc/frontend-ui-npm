'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var __1 = require("..");
var frontend_shadcn_2 = require("frontend-shadcn");
function ButtonTabs(props) {
    var handleChange = props.handleChange, options = props.options, value = props.value, className = props.className, fullWidth = props.fullWidth;
    return (react_1.default.createElement(frontend_shadcn_1.Tabs, { value: value.toString(), onValueChange: handleChange },
        react_1.default.createElement(frontend_shadcn_1.TabsList, { className: (0, frontend_shadcn_2.cn)('bg-input p-1', className, fullWidth && 'w-full') }, options.map(function (tab, i) {
            return (react_1.default.createElement(frontend_shadcn_1.TabsTrigger, { key: i, value: tab.value.toString(), className: "w-full" },
                tab.icon && (react_1.default.createElement(__1.RemixIcon, { name: tab.icon, className: (0, frontend_shadcn_2.cn)(tab.label && 'mr-2') })),
                tab.label && react_1.default.createElement("span", { className: "text-sm" }, tab.label)));
        }))));
}
exports.default = ButtonTabs;
