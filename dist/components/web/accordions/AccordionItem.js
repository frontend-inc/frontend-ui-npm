'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var components_1 = require("../../../components");
var AccordionItemComponent = function (props) {
    var title = props.title, subtitle = props.subtitle, variant = props.variant;
    return (react_1.default.createElement(frontend_shadcn_1.Accordion, { type: "multiple", collapsible: true, className: "w-full" },
        react_1.default.createElement(frontend_shadcn_1.AccordionItem, { value: "item" },
            react_1.default.createElement(frontend_shadcn_1.AccordionTrigger, { className: (0, frontend_shadcn_2.cn)('hover:no-underline hover:bg-muted/50 px-3', variant === 'fill' && 'bg-muted/50 hover:bg-muted rounded-lg') },
                react_1.default.createElement(components_1.Typography, { variant: "subtitle1" }, title)),
            react_1.default.createElement(frontend_shadcn_1.AccordionContent, null,
                react_1.default.createElement(components_1.Typography, { variant: "body1", className: "px-3 text-muted-foreground" }, subtitle)))));
};
exports.default = AccordionItemComponent;
