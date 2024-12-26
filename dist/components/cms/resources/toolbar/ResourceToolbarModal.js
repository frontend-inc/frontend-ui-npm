'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lucide_react_1 = require("lucide-react");
var components_1 = require("../../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
function ResourceToolbarModal(props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, children = _a.children;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(!open && 'hidden', 'fixed bg-muted top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ') },
        react_1.default.createElement("div", { className: "text-secondary-foreground shadow-md" },
            react_1.default.createElement("div", { className: "container mx-auto px-4" },
                react_1.default.createElement("div", { className: "h-16 flex items-center justify-between" },
                    react_1.default.createElement("div", { className: "w-10 h-10" }),
                    children,
                    react_1.default.createElement(components_1.Button, { variant: "ghost", size: "icon", className: "w-8 h-8 hover:bg-gray-100", onClick: handleClose },
                        react_1.default.createElement(lucide_react_1.X, { className: "h-5 w-5 text-secondary-foreground" })))))));
}
exports.default = ResourceToolbarModal;
