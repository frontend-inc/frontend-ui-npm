'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var hooks_1 = require("../../../hooks");
var next_themes_1 = require("next-themes");
var frontend_shadcn_2 = require("frontend-shadcn");
var Sheet = function (props) {
    var open = props.open, title = props.title, _a = props.side, side = _a === void 0 ? 'right' : _a, handleClose = props.handleClose, children = props.children, buttons = props.buttons, _b = props.disablePadding, disablePadding = _b === void 0 ? false : _b, className = props.className, _c = props.maxWidth, maxWidth = _c === void 0 ? 'xs' : _c;
    var theme = (0, hooks_1.useTheme)().theme;
    var mode = (0, next_themes_1.useTheme)().theme;
    var maxWidthClasses = {
        xs: 'sm:w-[360px]',
        sm: 'md:max-w-screen-sm',
        md: 'md:max-w-screen-md',
        lg: 'md:max-w-screen-lg',
        xl: 'md:max-w-screen-xl',
    };
    return (react_1.default.createElement(frontend_shadcn_2.Sheet, { open: open, onOpenChange: handleClose },
        react_1.default.createElement(frontend_shadcn_2.SheetContent, { side: side, className: (0, frontend_shadcn_1.cn)('w-full py-2', mode, theme, disablePadding && 'px-0 py-0', maxWidthClasses[maxWidth], className) },
            react_1.default.createElement(frontend_shadcn_2.SheetHeader, { className: "mt-4" },
                react_1.default.createElement(frontend_shadcn_2.SheetTitle, { className: (0, frontend_shadcn_1.cn)(disablePadding && 'px-4') }, title)),
            react_1.default.createElement("div", { className: "h-full max-h-[calc(100vh-120px)] overflow-y-auto py-2" }, children),
            react_1.default.createElement(frontend_shadcn_2.SheetFooter, { className: (0, frontend_shadcn_1.cn)('py-4 items-center', disablePadding && 'px-4') }, buttons))));
};
exports.default = Sheet;
