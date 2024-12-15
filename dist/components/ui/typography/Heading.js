'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var components_2 = require("../../../components");
var Heading = function (props) {
    var _a = props || {}, editable = _a.editable, label = _a.label, title = _a.title, subtitle = _a.subtitle, _b = _a.textAlign, textAlign = _b === void 0 ? 'left' : _b, secondaryAction = _a.secondaryAction, _c = _a.size, size = _c === void 0 ? 'md' : _c, className = _a.className, handleChange = _a.handleChange;
    var titleVariant = {
        sm: 'h5',
        md: 'h4',
        lg: 'h3',
        xl: 'h2',
        '2xl': 'h1',
    }[size];
    var subtitleVariant = {
        sm: 'body1',
        md: 'body1',
        lg: 'subtitle2',
        xl: 'subtitle1',
        '2xl': 'subtitle1',
    }[size];
    var spacingClass = {
        sm: 'space-y-2',
        md: 'space-y-4',
        lg: 'space-y-4',
        xl: 'space-y-5',
        '2xl': 'space-y-6',
    }[size];
    if (!title && !subtitle && !label)
        return null;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('py-4 w-full flex justify-between items-center flex-col sm:flex-row', className) },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full container max-w-screen-md flex flex-col justify-between', textAlign === 'center' && 'mx-auto') },
            react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col', spacingClass) },
                label && (react_1.default.createElement(components_2.BlurFade, { delay: 0.20, inView: true },
                    react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(textAlign === 'center' && 'text-center', textAlign === 'right' && 'text-right') },
                        react_1.default.createElement(components_1.Typography, { editable: editable, variant: "caption", className: (0, frontend_shadcn_1.cn)('text-primary/90 uppercase tracking-widest font-semibold', textAlign === 'center' && 'text-center', textAlign === 'right' && 'text-right'), name: "label", handleChange: handleChange }, label)))),
                title && (react_1.default.createElement(components_2.BlurFade, { delay: 0.25, inView: true },
                    react_1.default.createElement(components_1.Typography, { editable: editable, variant: titleVariant, textAlign: textAlign, name: "title", handleChange: handleChange }, title))),
                subtitle && (react_1.default.createElement(components_2.BlurFade, { delay: 0.30, inView: true },
                    react_1.default.createElement(components_1.Typography, { variant: subtitleVariant, className: "leading-8 text-foreground/80", textAlign: textAlign, editable: editable, name: "subtitle", handleChange: handleChange }, subtitle)))),
            secondaryAction)));
};
exports.default = Heading;
