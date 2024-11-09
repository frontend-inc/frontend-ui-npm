'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var core_1 = require("../../core");
var frontend_shadcn_1 = require("frontend-shadcn");
var Heading = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, subtitle = _a.subtitle, _b = _a.textAlign, textAlign = _b === void 0 ? 'left' : _b, secondaryAction = _a.secondaryAction, _c = _a.size, size = _c === void 0 ? 'sm' : _c, className = _a.className;
    var titleVariant = {
        sm: 'h4',
        md: 'h3',
        lg: 'h2',
        xl: 'h1',
    }[size];
    var subtitleVariant = {
        sm: 'body1',
        md: 'body1',
        lg: 'subtitle2',
        xl: 'subtitle1',
    }[size];
    if (!title && !subtitle && !label)
        return null;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('py-4 px-2 w-full flex justify-between items-center flex-col sm:flex-row', className) },
        react_1.default.createElement("div", { className: "w-full flex flex-col justify-between" },
            react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
                label && (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(textAlign === 'center' && 'text-center', textAlign === 'right' && 'text-right') },
                    react_1.default.createElement(components_1.Label, { label: label }))),
                title && (react_1.default.createElement(core_1.Typography, { variant: titleVariant, textAlign: textAlign }, title)),
                subtitle && (react_1.default.createElement(core_1.Typography, { variant: subtitleVariant, className: "text-foreground/80", textAlign: textAlign }, subtitle))),
            secondaryAction)));
};
exports.default = Heading;
