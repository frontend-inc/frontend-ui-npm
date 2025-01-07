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
var react_2 = require("@nextui-org/react");
var Statistic = function (props) {
    var _a = props || {}, variant = _a.variant, icon = _a.icon, title = _a.title, subtitle = _a.subtitle, _b = _a.direction, direction = _b === void 0 ? 'column' : _b;
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('flex justify-start w-full items-start h-full', 'flex-row space-x-3 min-h-[90px]', variant == 'outline' && 'border-2 border-divider rounded-lg p-4', variant == 'fill' && 'bg-content1 rounded-lg p-4') },
        icon && (react_1.default.createElement("div", { className: "w-8 h-8 rounded-lg bg-content1 flex items-center justify-center" },
            react_1.default.createElement(__3.RemixIcon, { name: icon, size: "lg", className: "text-primary" }))),
        react_1.default.createElement("div", { className: (0, react_2.cn)('flex flex-col space-y-2', direction === 'row' && 'text-left') },
            react_1.default.createElement(__4.Typography, { className: "text-foreground/70", variant: "caption" }, subtitle),
            react_1.default.createElement(__4.Typography, { variant: "h3" }, title))));
};
var Statistics = function (props) {
    var _a = props || {}, variant = _a.variant, _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.direction, direction = _c === void 0 ? 'column' : _c;
    return (react_1.default.createElement("div", { className: "container mx-auto max-w-screen-lg p-2" },
        react_1.default.createElement("div", { className: 'w-full grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4' }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) { return (react_1.default.createElement(__2.BlurFade, { delay: 0.25 + idx * 0.05, inView: true, key: idx },
            react_1.default.createElement(Statistic, { icon: item === null || item === void 0 ? void 0 : item.icon, title: item === null || item === void 0 ? void 0 : item.title, subtitle: item === null || item === void 0 ? void 0 : item.subtitle, direction: direction, variant: variant }))); })),
        (items === null || items === void 0 ? void 0 : items.length) === 0 && (react_1.default.createElement(__1.Empty, { icon: "ri-stack-fill", title: "No statistics", description: "No statistics to display." }))));
};
exports.default = Statistics;
