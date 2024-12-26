'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
var react_1 = __importStar(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var use_debounce_1 = require("use-debounce");
var Typography = function (props) {
    var variant = props.variant, _a = props.textAlign, textAlign = _a === void 0 ? 'left' : _a, className = props.className, children = props.children, _b = props.name, name = _b === void 0 ? 'text' : _b, editable = props.editable, handleChange = props.handleChange;
    var _c = (0, react_1.useState)(children), text = _c[0], setText = _c[1];
    var debouncedText = (0, use_debounce_1.useDebounce)(text, 350)[0];
    var variantClasses = {
        h1: 'text-5xl sm:text-6xl font-bold tracking-tight',
        h2: 'text-3xl sm:text-5xl font-bold tracking-tight',
        h3: 'text-3xl sm:text-4xl font-semibold',
        h4: 'text-2xl sm:text-3xl font-semibold',
        h5: 'text-xl font-semibold',
        h6: 'text-xl font-semibold',
        subtitle1: 'text-lg font-semibold leading-relaxed',
        subtitle2: 'text-md font-medium leading-relaxed',
        button: 'text-base',
        body1: 'text-sm font-normal leading-normal',
        body2: 'text-sm font-normal leading-normal',
        caption: 'text-xs text-foreground font-semibold uppercase tracking-wider',
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
        //@ts-ignore
        setText(ev.target.innerText);
    };
    (0, react_1.useEffect)(function () {
        if (handleChange && debouncedText !== children) {
            handleChange({ target: { name: name, value: debouncedText } });
        }
    }, [debouncedText]);
    return (react_1.default.createElement("div", { contentEditable: editable, 
        // @ts-ignore
        onInput: handleInputChange, suppressContentEditableWarning: true, className: (0, frontend_shadcn_1.cn)('text-foreground outline-none focus:outline-none focus:ring-0', editable && 'cursor-text', fontFamily[variant], variantClasses[variant], alignmentClasses[textAlign], className) }, children));
};
exports.Typography = Typography;
