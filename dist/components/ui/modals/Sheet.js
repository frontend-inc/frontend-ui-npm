'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var hooks_1 = require("../../../hooks");
var frontend_shadcn_2 = require("frontend-shadcn");
var lucide_react_1 = require("lucide-react");
var Sheet = function (_a) {
    var open = _a.open, title = _a.title, _b = _a.side, side = _b === void 0 ? 'right' : _b, handleClose = _a.handleClose, children = _a.children, buttons = _a.buttons, _c = _a.disablePadding, disablePadding = _c === void 0 ? false : _c, className = _a.className;
    var mode = (0, hooks_1.useTheme)().mode;
    var animationClasses = {
        left: 'slide-in-from-left',
        right: 'slide-in-from-right',
    };
    return (react_1.default.createElement(frontend_shadcn_2.Sheet, { open: open, onOpenChange: handleClose },
        react_1.default.createElement(frontend_shadcn_2.SheetOverlay, { className: "bg-black/50" }),
        react_1.default.createElement(frontend_shadcn_2.SheetContent, { side: side, className: (0, frontend_shadcn_1.cn)(mode, disablePadding && 'px-0', 'flex flex-col w-screen sm:max-w-[300px] sm:w-full', 'animate-in duration-300', animationClasses[side], className) },
            react_1.default.createElement(frontend_shadcn_2.SheetClose, { asChild: true },
                react_1.default.createElement(frontend_shadcn_2.Button, { variant: "ghost", className: (0, frontend_shadcn_1.cn)('m-2 p-2 absolute right-0 top-0 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground') },
                    react_1.default.createElement(lucide_react_1.X, { className: "h-5 w-5 text-foreground" }),
                    react_1.default.createElement("span", { className: "sr-only" }, "Close"))),
            react_1.default.createElement(frontend_shadcn_2.SheetHeader, { className: "mt-4" },
                react_1.default.createElement(frontend_shadcn_2.SheetTitle, { className: (0, frontend_shadcn_1.cn)(disablePadding && 'px-4') }, title)),
            react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex-grow overflow-y-auto') }, children),
            buttons && (react_1.default.createElement(frontend_shadcn_2.SheetFooter, { className: (0, frontend_shadcn_1.cn)(disablePadding && 'px-4') }, buttons)))));
};
exports.default = Sheet;
