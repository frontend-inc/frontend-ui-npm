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
    var _a = props || {}, _b = _a.direction, direction = _b === void 0 ? 'column' : _b, label = _a.label, icon = _a.icon, _c = _a.color, color = _c === void 0 ? 'text-muted-foreground' : _c, children = _a.children, disableLabel = _a.disableLabel, className = _a.className;
    var wrapperClasses = (0, frontend_shadcn_1.cn)('w-full', direction === 'row' && 'flex-row', direction === 'column' && 'flex-col', className);
    return (react_1.default.createElement("div", { className: wrapperClasses },
        !disableLabel && label && (react_1.default.createElement("div", { className: "min-w-[100px] w-[100px] pr-1" },
            react_1.default.createElement("span", { className: "text-xs text-muted-foreground font-semibold" }, label))),
        react_1.default.createElement("div", { className: "flex flex-row space-x-1" },
            icon && react_1.default.createElement(components_1.Icon, { name: icon, className: color }),
            children)));
};
exports.default = FieldWrapper;
