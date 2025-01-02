'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var react_2 = require("@nextui-org/react");
var hooks_1 = require("../../../hooks");
var Sheet = function (props) {
    var open = props.open, title = props.title, handleClose = props.handleClose, children = props.children, buttons = props.buttons;
    var themeClass = (0, hooks_1.useTheme)().themeClass;
    return (react_1.default.createElement(react_2.Drawer, { isOpen: open, onOpenChange: handleClose, className: themeClass },
        react_1.default.createElement(react_2.DrawerContent, null,
            react_1.default.createElement(react_2.DrawerHeader, null, title),
            react_1.default.createElement(react_2.DrawerBody, null, children),
            react_1.default.createElement(frontend_shadcn_1.DrawerFooter, null, buttons))));
};
exports.default = Sheet;
