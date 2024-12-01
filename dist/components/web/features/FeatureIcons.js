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
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var FeatureIcon = function (props) {
    var _a = props || {}, variant = _a.variant, icon = _a.icon, title = _a.title, subtitle = _a.subtitle, _b = _a.direction, direction = _b === void 0 ? 'column' : _b;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex justify-start py-6 w-full items-center h-full', direction === 'column'
            ? 'flex-col items-center space-y-3 min-h-[230px]'
            : 'flex-row items-start space-x-3 min-h-[165px]', variant == 'outline' && 'border-2 border-border rounded-lg p-6', variant == 'fill' && 'bg-muted rounded-lg p-6') },
        icon && (react_1.default.createElement(frontend_shadcn_1.Avatar, { className: "h-[48px] w-[48px] rounded-lg" },
            react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: "bg-primary rounded-lg" },
                react_1.default.createElement(__3.RemixIcon, { name: icon, size: "lg", className: "text-primary-foreground" })))),
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col justify-center space-y-2', direction === 'row' && 'text-left') },
            react_1.default.createElement(components_1.Typography, { variant: "h6", className: direction === 'column' ? 'text-center' : '' }, title),
            react_1.default.createElement(components_1.Typography, { className: (0, frontend_shadcn_1.cn)('text-muted-foreground', direction === 'column' ? 'text-center' : 'text-left'), variant: "body1" }, subtitle))));
};
var FeatureIcons = function (props) {
    var _a = props || {}, variant = _a.variant, _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.direction, direction = _c === void 0 ? 'column' : _c;
    return (react_1.default.createElement("div", { className: "container mx-auto max-w-screen-lg p-2" },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('grid', direction === 'column'
                ? 'grid-cols-1 md:grid-cols-3 gap-10'
                : 'grid-cols-1 md:grid-cols-2 gap-6') }, items === null || items === void 0 ? void 0 : items.map(function (item, idx) { return (react_1.default.createElement(__2.BlurFade, { delay: 0.25 + idx * 0.05, inView: true, key: idx },
            react_1.default.createElement(FeatureIcon, { icon: item === null || item === void 0 ? void 0 : item.icon, title: item === null || item === void 0 ? void 0 : item.title, subtitle: item === null || item === void 0 ? void 0 : item.subtitle, direction: direction, variant: variant }))); })),
        (items === null || items === void 0 ? void 0 : items.length) === 0 && (react_1.default.createElement(__1.Empty, { icon: "ri-stack-fill", title: "No features", description: "No features to display." }))));
};
exports.default = FeatureIcons;
