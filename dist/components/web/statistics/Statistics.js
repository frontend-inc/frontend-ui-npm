'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("../..");
var __3 = require("../..");
var __4 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var Statistic = function (props) {
    var _a = props || {}, variant = _a.variant, icon = _a.icon, title = _a.title, subtitle = _a.subtitle, _b = _a.direction, direction = _b === void 0 ? 'column' : _b;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex justify-start py-6 w-full items-start h-full', 'flex-row items-center space-x-3 min-h-[90px]', variant == 'outline' && 'border-2 border-border rounded-lg p-6', variant == 'fill' && 'bg-muted rounded-lg p-6') },
        icon && (react_1.default.createElement(__3.RemixIcon, { name: icon, size: "lg", className: "text-primary" })),
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col space-y-2', direction === 'row' && 'text-left') },
            react_1.default.createElement(__4.Typography, { className: 'text-foreground/70', variant: "caption" }, subtitle),
            react_1.default.createElement(__4.Typography, { variant: "h3" }, title))));
};
var Statistics = function (props) {
    var _a = props || {}, variant = _a.variant, _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.direction, direction = _c === void 0 ? 'column' : _c;
    return (react_1.default.createElement("div", { className: "container mx-auto max-w-screen-lg p-2" },
        react_1.default.createElement("div", { className: 'grid grid-cols-2 md:grid-cols-4 gap-6' }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) { return (react_1.default.createElement(__2.BlurFade, { delay: 0.25 + idx * 0.05, inView: true, key: idx },
            react_1.default.createElement(Statistic, { icon: item === null || item === void 0 ? void 0 : item.icon, title: item === null || item === void 0 ? void 0 : item.title, subtitle: item === null || item === void 0 ? void 0 : item.subtitle, direction: direction, variant: variant }))); })),
        (items === null || items === void 0 ? void 0 : items.length) === 0 && (react_1.default.createElement(__1.Empty, { icon: "ri-stack-fill", title: "No statistics", description: "No statistics to display." }))));
};
exports.default = Statistics;
