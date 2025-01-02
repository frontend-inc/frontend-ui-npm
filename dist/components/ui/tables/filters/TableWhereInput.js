'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var react_2 = require("@nextui-org/react");
function TabsWhereInput(_a) {
    var name = _a.name, handleChange = _a.handleChange, value = _a.value;
    var handleInputChange = function (value) {
        handleChange({
            target: {
                name: name,
                value: value,
            },
        });
    };
    return (react_1.default.createElement(frontend_shadcn_1.Tabs, { defaultValue: value.toString(), onValueChange: handleInputChange, className: "rounded-md w-full" },
        react_1.default.createElement(frontend_shadcn_1.TabsList, { className: (0, react_2.cn)('w-full') }, ['AND', 'OR'].map(function (option) { return (react_1.default.createElement(frontend_shadcn_1.TabsTrigger, { key: option, value: option.toString(), className: (0, react_2.cn)('w-full flex items-center text-sm') }, option)); }))));
}
exports.default = TabsWhereInput;
