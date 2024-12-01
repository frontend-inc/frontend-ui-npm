'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var Typography = function (props) {
    var variant = props.variant, _a = props.textAlign, textAlign = _a === void 0 ? 'left' : _a, className = props.className, children = props.children, name = props.name, editable = props.editable, handleChange = props.handleChange;
    var variantClasses = {
        h1: 'text-5xl sm:text-7xl font-semibold tracking-tight',
        h2: 'text-4xl sm:text-5xl font-semibold tracking-tight',
        h3: 'text-3xl sm:text-4xl font-semibold tracking-tight',
        h4: 'text-3xl font-semibold tracking-tight',
        h5: 'text-2xl font-semibold tracking-tight',
        h6: 'text-xl font-semibold tracking-tight',
        subtitle1: 'text-xl font-normal tracking-tight leading-relaxed',
        subtitle2: 'text-lg leading-relaxed',
        button: 'text-base',
        body1: 'text-md leading-normal',
        body2: 'text-sm leading-normal',
        caption: 'text-xs',
        overline: 'text-xs uppercase tracking-widest',
        destructive: 'text-destructive text-sm italic',
    };
    var fontFamily = {
        h1: 'font-header',
        h2: 'font-header',
        h3: 'font-header',
        h4: 'font-header',
        h5: 'font-header',
        h6: 'font-header',
        subtitle1: 'font-header',
        subtitle2: 'font-header',
        button: 'font-body',
        body1: 'font-body',
        body2: 'font-body',
        caption: 'font-body',
        overline: 'font-body',
        destructive: 'font-body',
    };
    var alignmentClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };
    var handleInputChange = function (ev) {
        if (!handleChange)
            return null;
        handleChange({
            target: {
                name: name || '',
                // @ts-ignore
                value: ev.target.innerText,
            },
        });
    };
    return (react_1.default.createElement("div", { contentEditable: editable, 
        // @ts-ignore
        onBlur: handleInputChange, suppressContentEditableWarning: true, className: (0, frontend_shadcn_1.cn)('text-foreground outline-none focus:outline-none focus:ring-0', editable && 'cursor-text', fontFamily[variant], variantClasses[variant], alignmentClasses[textAlign], className) }, children));
};
exports.Typography = Typography;
