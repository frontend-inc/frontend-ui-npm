'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lucide_react_1 = require("lucide-react");
var react_2 = require("@nextui-org/react");
var react_3 = require("@nextui-org/react");
function ResourceToolbarModal(props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, children = _a.children;
    return (react_1.default.createElement("div", { className: (0, react_3.cn)(!open && 'hidden', 'fixed bg-content1 top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ') },
        react_1.default.createElement("div", { className: "text-secondary-foreground shadow-md" },
            react_1.default.createElement("div", { className: "container mx-auto px-4" },
                react_1.default.createElement("div", { className: "h-16 flex items-center justify-between" },
                    react_1.default.createElement("div", { className: "w-10 h-10" }),
                    children,
                    react_1.default.createElement(react_2.Button, { isIconOnly: true, variant: "ghost", radius: 'full', className: "min-w-8 w-8 h-8", onPress: handleClose },
                        react_1.default.createElement(lucide_react_1.X, { className: "h-5 w-5 text-foreground/70" })))))));
}
exports.default = ResourceToolbarModal;
