'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var hooks_1 = require("../../hooks");
var maxWidthClasses = {
    sm: 'container mx-auto max-w-screen-sm',
    md: 'container mx-auto max-w-screen-md',
    lg: 'container mx-auto max-w-screen-lg',
    xl: 'container mx-auto max-w-screen-xl',
};
var Section = function (props) {
    var theme = (0, hooks_1.useTheme)().theme;
    var _a = props.requireAuth, requireAuth = _a === void 0 ? false : _a, children = props.children, bgColor = props.bgColor, bgImage = props.bgImage, bgOverlay = props.bgOverlay, mode = props.mode, maxWidth = props.maxWidth, variant = props.variant, _b = props.py, py = _b === void 0 ? 'md' : _b, _c = props.px, px = _c === void 0 ? 'sm' : _c;
    var pyClasses = {
        none: 'py-0',
        sm: 'py-[24px]',
        md: 'py-[48px]',
        lg: 'py-[96px]',
        xl: 'py-[144px]',
    };
    var pxClasses = {
        none: 'px-0',
        sm: 'px-6',
        md: 'px-12',
        lg: 'px-24',
        xl: 'px-48',
    };
    var backgroundStyle = bgImage ? {
        backgroundImage: "url(".concat(bgImage, ")")
    } : {
        backgroundColor: bgColor,
    };
    return (react_1.default.createElement("section", { className: (0, frontend_shadcn_1.cn)('z-0', mode == 'dark' ? 'dark-theme' : 'light', theme, 'relative bg-cover bg-center bg-no-repeat', 'w-full bg-background', pyClasses[py], pxClasses[px], !bgImage && bgColor, bgImage && bgOverlay &&
            "after:content-[''] after:absolute after:inset-0 after:bg-black/50"), style: backgroundStyle },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('relative z-[1]', variant == 'outline' && 'p-8 border-2 border-border rounded-xl', variant == 'fill' && bgImage && 'p-8 rounded-xl bg-black/50', variant == 'fill' && !bgImage && 'p-8 rounded-xl bg-muted/50', maxWidth && maxWidthClasses[maxWidth], 'w-full mx-auto min-h-[60px] flex flex-row justify-center items-center') },
            react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full', 'transition-all duration-300 ease-in-out') },
                react_1.default.createElement(components_1.AuthGuard, { requireAuth: requireAuth }, children)))));
};
exports.default = Section;
