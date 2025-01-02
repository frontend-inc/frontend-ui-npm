'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = exports.Menu = void 0;
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var react_2 = require("@nextui-org/react");
var Menu = function (_a) {
    var children = _a.children, trigger = _a.trigger, className = _a.className;
    return (react_1.default.createElement(frontend_shadcn_1.Popover, null,
        react_1.default.createElement(frontend_shadcn_1.PopoverTrigger, { asChild: true }, trigger),
        react_1.default.createElement(frontend_shadcn_1.PopoverContent, { className: (0, react_2.cn)('p-0 min-w-[200px]', className) }, children)));
};
exports.Menu = Menu;
var MenuItem = function (_a) {
    var children = _a.children, onClick = _a.onClick, disabled = _a.disabled, className = _a.className;
    return (react_1.default.createElement("button", { onClick: onClick, disabled: disabled, className: (0, react_2.cn)("flex w-full items-center px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none", disabled && 'opacity-50 cursor-not-allowed', className) }, children));
};
exports.MenuItem = MenuItem;
