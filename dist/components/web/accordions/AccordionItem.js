'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var core_1 = require("../../core");
var AccordionItemComponent = function (props) {
    var primary = props.primary, secondary = props.secondary;
    return (react_1.default.createElement(frontend_shadcn_1.Accordion, { type: "single", collapsible: true, className: "w-full" },
        react_1.default.createElement(frontend_shadcn_1.AccordionItem, { value: "item" },
            react_1.default.createElement(frontend_shadcn_1.AccordionTrigger, { className: "hover:no-underline" },
                react_1.default.createElement(core_1.Typography, { variant: "body1" }, primary)),
            react_1.default.createElement(frontend_shadcn_1.AccordionContent, null,
                react_1.default.createElement(core_1.Typography, { variant: "body2", className: "text-muted-foreground" }, secondary)))));
};
exports.default = AccordionItemComponent;
