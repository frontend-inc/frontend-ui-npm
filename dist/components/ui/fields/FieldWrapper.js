'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var FieldWrapper = function (props) {
    var _a = props || {}, _b = _a.direction, direction = _b === void 0 ? 'column' : _b, label = _a.label, icon = _a.icon, children = _a.children, className = _a.className;
    var wrapperClasses = (0, frontend_shadcn_1.cn)('flex w-full', direction === 'row' && 'flex-row space-x-2', direction === 'column' && 'flex-col space-y-2', className);
    return (react_1.default.createElement("div", { className: wrapperClasses },
        label && (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('min-w-[100px] pr-1', direction == 'row' && 'w-[100px] pr-1') },
            react_1.default.createElement("label", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wider" }, label))),
        react_1.default.createElement("div", { className: "w-full flex flex-row space-x-1" },
            icon && react_1.default.createElement(components_1.Icon, { name: icon }),
            children)));
};
exports.default = FieldWrapper;
