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
var Sheet = function (_a) {
    var open = _a.open, title = _a.title, _b = _a.side, side = _b === void 0 ? 'right' : _b, handleClose = _a.handleClose, children = _a.children, buttons = _a.buttons, _c = _a.disablePadding, disablePadding = _c === void 0 ? false : _c, className = _a.className;
    var theme = (0, hooks_1.useTheme)().theme;
    var mode = (0, next_themes_1.useTheme)().theme;
    return (react_1.default.createElement(frontend_shadcn_2.Sheet, { open: open, onOpenChange: handleClose },
        react_1.default.createElement(frontend_shadcn_2.SheetContent, { side: side, className: (0, frontend_shadcn_1.cn)(mode, theme, 'w-full sm:w-[360px]', disablePadding && 'px-0', className) },
            react_1.default.createElement(frontend_shadcn_2.SheetHeader, { className: "mt-4" },
                react_1.default.createElement(frontend_shadcn_2.SheetTitle, { className: (0, frontend_shadcn_1.cn)(disablePadding && 'px-4') }, title)),
            react_1.default.createElement("div", { className: "h-full max-h-[calc(100vh-150px)] overflow-y-auto" }, children),
            react_1.default.createElement(frontend_shadcn_2.SheetFooter, { className: (0, frontend_shadcn_1.cn)('py-4', disablePadding && 'px-4') }, buttons))));
};
exports.default = Sheet;
