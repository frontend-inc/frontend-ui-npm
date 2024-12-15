'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var __2 = require("..");
var frontend_shadcn_1 = require("frontend-shadcn");
var Empty = function (props) {
    var icon = props.icon, fill = props.fill, title = props.title, description = props.description, variant = props.variant, className = props.className;
    var textClasses = {
        accent: 'text-accent',
        default: 'text-foreground',
        primary: 'text-primary',
        secondary: 'text-secondary',
        destructive: 'text-destructive',
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(fill && 'bg-muted/50', 'rounded-lg py-10 w-full flex flex-col space-y-2 items-center justify-center', variant == 'destructive' &&
            'bg-destructive/10 border border-destructive', variant == 'accent' && 'bg-accent/10 border border-accent', className) },
        icon && (react_1.default.createElement(__1.RemixIcon, { name: icon, size: "xl", className: (0, frontend_shadcn_1.cn)(variant && textClasses[variant]) })),
        react_1.default.createElement("div", { className: "flex flex-col space-y-0 w-full items-center justify-center" },
            react_1.default.createElement(__2.Typography, { variant: "subtitle2", className: (0, frontend_shadcn_1.cn)('text-md text-bold text-foreground', variant && textClasses[variant]) }, title),
            react_1.default.createElement(__2.Typography, { variant: "body1", className: (0, frontend_shadcn_1.cn)('text-sm text-foreground/70 font-normal', variant && textClasses[variant]) }, description))));
};
exports.default = Empty;
