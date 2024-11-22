'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
function MediaModal(_a) {
    var open = _a.open, handleClose = _a.handleClose, children = _a.children;
    if (!open)
        return null;
    return (react_1.default.createElement(components_1.Backdrop, { open: open, onClick: handleClose },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('relative rounded overflow-hidden', 'max-w-[calc(100vw-50px)] max-h-[calc(100vh-50px)]', 'z-[50]'), onClick: function (e) { return e.stopPropagation(); } }, children),
        react_1.default.createElement("button", { className: (0, frontend_shadcn_1.cn)('absolute top-5 right-5 p-2 rounded-full', 'bg-black/50 hover:bg-black/75', 'transition-colors duration-200'), onClick: handleClose },
            react_1.default.createElement(lucide_react_1.X, { className: "h-6 w-6 text-white" }))));
}
exports.default = MediaModal;
