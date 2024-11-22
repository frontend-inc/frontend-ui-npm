'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var Alert = function (props) {
    var icon = props.icon, title = props.title, description = props.description, variant = props.variant, className = props.className;
    var textClasses = {
        accent: 'text-accent',
        default: 'text-foreground',
        primary: 'text-primary',
        secondary: 'text-secondary',
        destructive: 'text-destructive',
    };
    return (react_1.default.createElement(frontend_shadcn_1.Alert, { className: (0, frontend_shadcn_2.cn)('flex space-x-3', variant == 'destructive' && 'bg-destructive/10 border-destructive', variant == 'accent' && 'bg-accent/10 border-accent', className) },
        icon && (react_1.default.createElement(__1.RemixIcon, { name: icon, size: "lg", className: (0, frontend_shadcn_2.cn)(variant && textClasses[variant]) })),
        react_1.default.createElement("div", { className: "flex flex-col" },
            react_1.default.createElement(frontend_shadcn_1.AlertTitle, { className: (0, frontend_shadcn_2.cn)('text-md text-bold', variant && textClasses[variant]) }, title),
            react_1.default.createElement(frontend_shadcn_1.AlertDescription, { className: (0, frontend_shadcn_2.cn)('text-sm font-normal', variant && textClasses[variant]) }, description))));
};
exports.default = Alert;
