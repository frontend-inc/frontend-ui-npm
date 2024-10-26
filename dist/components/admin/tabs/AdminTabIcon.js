'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
function LayoutTabIcon(_a) {
    var icon = _a.icon, _b = _a.selected, selected = _b === void 0 ? false : _b, handleClick = _a.handleClick;
    return (react_1.default.createElement(core_1.IconButton, { className: (0, frontend_shadcn_1.cn)(selected && 'bg-primary hover:bg-primary'), onClick: handleClick },
        react_1.default.createElement(components_1.Icon, { name: icon, className: (0, frontend_shadcn_1.cn)('w-5 h-5', selected && 'text-primary-foreground') })));
}
exports.default = LayoutTabIcon;
