'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var react_2 = require("@nextui-org/react");
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
    return (react_1.default.createElement("section", { className: (0, react_2.cn)('z-0', 'relative bg-cover bg-center bg-no-repeat', 'w-full bg-background', theme && mode && "".concat(theme, "-").concat(mode), pyClasses[py], pxClasses[px], !bgImage && bgColor, bgImage && bgOverlay &&
            "after:content-[''] after:absolute after:inset-0 after:bg-black/50"), style: backgroundStyle },
        react_1.default.createElement("div", { className: (0, react_2.cn)('relative z-[1]', variant == 'outline' && 'p-8 border-2 border-divider rounded-xl', variant == 'fill' && bgImage && 'p-8 rounded-xl bg-black/50', variant == 'fill' && !bgImage && 'p-8 rounded-xl bg-content1/50', maxWidth && maxWidthClasses[maxWidth], 'w-full mx-auto min-h-[60px] flex flex-row justify-center items-center') },
            react_1.default.createElement("div", { className: (0, react_2.cn)('w-full', 'transition-all duration-300 ease-in-out') },
                react_1.default.createElement(components_1.AuthGuard, { requireAuth: requireAuth }, children)))));
};
exports.default = Section;
