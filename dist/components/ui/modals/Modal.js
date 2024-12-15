'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var next_themes_1 = require("next-themes");
var frontend_shadcn_2 = require("frontend-shadcn");
var frontend_shadcn_3 = require("frontend-shadcn");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
function Modal(props) {
    var open = props.open, _a = props.loading, loading = _a === void 0 ? false : _a, handleClose = props.handleClose, title = props.title, buttons = props.buttons, children = props.children, description = props.description, _b = props.maxWidth, maxWidth = _b === void 0 ? 'md' : _b, className = props.className;
    var maxWidthClasses = {
        sm: 'md:max-w-screen-sm',
        md: 'md:max-w-screen-md',
        lg: 'md:max-w-screen-lg',
        xl: 'md:max-w-screen-xl',
    };
    var mode = (0, next_themes_1.useTheme)().theme;
    var theme = (0, hooks_1.useTheme)().theme;
    return (react_1.default.createElement(frontend_shadcn_1.Dialog, { open: open, onOpenChange: handleClose },
        react_1.default.createElement(frontend_shadcn_1.DialogContent, { className: (0, frontend_shadcn_2.cn)(maxWidthClasses[maxWidth], mode == 'dark' ? 'dark-theme' : 'light', theme, className) },
            react_1.default.createElement(frontend_shadcn_1.DialogHeader, { className: "mt-4" },
                react_1.default.createElement(frontend_shadcn_1.DialogTitle, null,
                    react_1.default.createElement("span", { className: "text-foreground" }, title)),
                description && react_1.default.createElement(frontend_shadcn_1.DialogDescription, null, description)),
            react_1.default.createElement(frontend_shadcn_3.ScrollArea, { className: "max-h-[440px]" },
                react_1.default.createElement("div", { className: "space-y-4 p-4" }, loading ? (react_1.default.createElement(components_1.Loader, { loading: loading })) : (react_1.default.createElement("div", { className: "w-full" }, children)))),
            !loading && buttons && react_1.default.createElement(frontend_shadcn_1.DialogFooter, null, buttons))));
}
exports.default = Modal;
