'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var lucide_react_1 = require("lucide-react");
var react_2 = require("@nextui-org/react");
var hooks_1 = require("../../../hooks");
function CustomDrawer(props) {
    var open = props.open, handleClose = props.handleClose, loading = props.loading, title = props.title, description = props.description, children = props.children, buttons = props.buttons, _a = props.maxWidth, maxWidth = _a === void 0 ? 'md' : _a, className = props.className;
    var maxWidthClasses = {
        sm: 'max-w-screen-sm',
        md: 'max-w-screen-md',
        lg: 'max-w-screen-lg',
        xl: 'max-w-screen-xl',
    };
    var themeClass = (0, hooks_1.useTheme)().themeClass;
    return (react_1.default.createElement(frontend_shadcn_1.Drawer, { open: open, onOpenChange: handleClose },
        react_1.default.createElement(frontend_shadcn_1.DrawerPortal, null,
            react_1.default.createElement(frontend_shadcn_1.DrawerContent, { className: (0, react_2.cn)(themeClass, className) },
                react_1.default.createElement(frontend_shadcn_1.DrawerHeader, null,
                    react_1.default.createElement("div", { className: "flex w-full justify-end" },
                        react_1.default.createElement(frontend_shadcn_1.DrawerClose, null,
                            react_1.default.createElement(lucide_react_1.X, { className: "h-5 w-5" }),
                            react_1.default.createElement("span", { className: "sr-only" }, "Close"))),
                    title && (react_1.default.createElement(frontend_shadcn_1.DrawerTitle, null,
                        react_1.default.createElement("span", { className: "flex font-semibold justify-center w-full text-3xl text-foreground" }, title))),
                    description && (react_1.default.createElement(frontend_shadcn_1.DrawerDescription, null,
                        react_1.default.createElement("div", { className: "flex flex-row justify-center w-full" },
                            react_1.default.createElement("div", { className: (0, react_2.cn)(maxWidthClasses[maxWidth], 'w-full') },
                                react_1.default.createElement("div", { className: "text-lg text-primary" }, description)))))),
                react_1.default.createElement(frontend_shadcn_1.ScrollArea, null,
                    react_1.default.createElement("div", { className: "flex justify-center w-full py-6 px-6 sm:px-0" },
                        react_1.default.createElement("div", { className: (0, react_2.cn)(maxWidthClasses[maxWidth], 'w-full min-h-[50vh] max-h-[75vh]') }, !loading ? (children) : (react_1.default.createElement("div", { className: "flex justify-center items-center w-full" },
                            react_1.default.createElement(react_2.Spinner, null)))))),
                buttons && (react_1.default.createElement(frontend_shadcn_1.DrawerFooter, { className: "w-full flex items-center justify-center" },
                    react_1.default.createElement("div", { className: (0, react_2.cn)(maxWidthClasses[maxWidth], 'w-full') }, buttons)))))));
}
exports.default = CustomDrawer;
