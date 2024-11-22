'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
var CheckboxFilterItem = function (props) {
    var _a = props.values, values = _a === void 0 ? [] : _a, option = props.option, handleClick = props.handleClick;
    var selected = values.includes(option.value);
    return (react_1.default.createElement("li", { className: "list-none" },
        react_1.default.createElement("button", { className: (0, frontend_shadcn_1.cn)(' rounded-md cursor-pointer hover:bg-muted/20 flex py-1 px-2 items-center w-full border border-input shadow-sm', selected &&
                'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground shadow-md'), onClick: handleClick },
            react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full flex flex-row space-x-2 items-center justify-between') },
                react_1.default.createElement(components_1.Typography, { variant: "body1", className: (0, frontend_shadcn_1.cn)('font-medium', selected && 'text-primary-foreground') }, option === null || option === void 0 ? void 0 : option.label),
                selected && react_1.default.createElement(lucide_react_1.Check, { className: "w-5 h-5 text-primary-foreground" })))));
};
exports.default = CheckboxFilterItem;
