'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var hooks_1 = require("../../../hooks");
var frontend_shadcn_3 = require("frontend-shadcn");
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
function Modal(_a) {
    var open = _a.open, _b = _a.loading, loading = _b === void 0 ? false : _b, handleClose = _a.handleClose, title = _a.title, buttons = _a.buttons, children = _a.children, description = _a.description;
    var mode = (0, hooks_1.useTheme)().mode;
    return (react_1.default.createElement(frontend_shadcn_2.Dialog, { open: open, onOpenChange: handleClose },
        react_1.default.createElement(frontend_shadcn_2.DialogOverlay, { className: "bg-black/50" }),
        react_1.default.createElement(frontend_shadcn_2.DialogContent, { className: (0, frontend_shadcn_1.cn)(mode, 'bg-background rounded-md overflow-hidden', 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', 'w-full max-w-lg max-h-[85vh]') },
            react_1.default.createElement(frontend_shadcn_2.DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" },
                react_1.default.createElement(lucide_react_1.X, { className: "h-5 w-5 text-foreground" }),
                react_1.default.createElement("span", { className: "sr-only" }, "Close")),
            react_1.default.createElement(frontend_shadcn_2.DialogHeader, { className: "relative mt-4" },
                react_1.default.createElement(frontend_shadcn_2.DialogTitle, { className: "text-foreground" }, title),
                description && react_1.default.createElement(frontend_shadcn_2.DialogDescription, null, description)),
            react_1.default.createElement(frontend_shadcn_3.ScrollArea, { className: "max-h-[440px]" },
                react_1.default.createElement("div", { className: "space-y-4 p-4" }, loading ? (react_1.default.createElement(components_1.Loader, { loading: loading })) : (react_1.default.createElement("div", { className: "w-full" }, children)))),
            !loading && buttons && react_1.default.createElement(frontend_shadcn_2.DialogFooter, null, buttons))));
}
exports.default = Modal;
