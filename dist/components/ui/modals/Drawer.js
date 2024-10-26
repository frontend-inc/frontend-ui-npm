'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
function CustomDrawer(_a) {
    var open = _a.open, handleClose = _a.handleClose, loading = _a.loading, title = _a.title, description = _a.description, children = _a.children, buttons = _a.buttons;
    var mode = (0, hooks_1.useTheme)().mode;
    return (react_1.default.createElement(frontend_shadcn_1.Drawer, { open: open, onOpenChange: handleClose },
        react_1.default.createElement(frontend_shadcn_1.DrawerContent, { className: mode },
            react_1.default.createElement(frontend_shadcn_1.DrawerHeader, null,
                react_1.default.createElement("div", { className: "flex w-full justify-end" },
                    react_1.default.createElement(frontend_shadcn_1.DrawerClose, { asChild: true },
                        react_1.default.createElement(components_1.Button, { variant: "ghost", size: "icon" },
                            react_1.default.createElement(lucide_react_1.X, { className: "h-8 w-8" }),
                            react_1.default.createElement("span", { className: "sr-only" }, "Close")))),
                title && (react_1.default.createElement(frontend_shadcn_1.DrawerTitle, null,
                    react_1.default.createElement("div", { className: "flex flex-row justify-center w-full" },
                        react_1.default.createElement("div", { className: "flex flex-row max-w-screen-md w-full" },
                            react_1.default.createElement("div", { className: "text-3xl text-primary" }, title))))),
                description && (react_1.default.createElement(frontend_shadcn_1.DrawerDescription, null,
                    react_1.default.createElement("div", { className: "flex flex-row justify-center w-full" },
                        react_1.default.createElement("div", { className: "flex flex-row max-w-screen-md w-full" },
                            react_1.default.createElement("div", { className: "text-lg text-primary" }, description)))))),
            react_1.default.createElement("div", { className: "flex-grow overflow-y-auto px-4 flex flex-col items-center" },
                react_1.default.createElement("div", { className: "max-w-screen-md w-full" }, children)),
            !loading && buttons && (react_1.default.createElement(frontend_shadcn_1.DrawerFooter, { className: "px-10 pb-6 flex flex-row justify-center" },
                react_1.default.createElement("div", { className: "w-full max-w-screen-md" }, buttons))))));
}
exports.default = CustomDrawer;
