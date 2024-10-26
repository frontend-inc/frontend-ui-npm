'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var core_1 = require("../../core");
var lucide_react_1 = require("lucide-react");
function SidebarMenuHeader(_a) {
    var label = _a.label, enableBorder = _a.enableBorder, _b = _a.isOpen, isOpen = _b === void 0 ? true : _b, children = _a.children;
    var _c = (0, react_1.useState)(isOpen), open = _c[0], setOpen = _c[1];
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full p-1', enableBorder && 'border-t border-border') },
        react_1.default.createElement(components_1.Button, { variant: "ghost", className: "hover:bg-muted py-6 w-full justify-between px-3", onClick: function () { return setOpen(!open); } },
            react_1.default.createElement(core_1.Typography, { variant: "body2" }, label),
            react_1.default.createElement(lucide_react_1.ChevronRight, { className: (0, frontend_shadcn_1.cn)('text-foreground h-4 w-4 transition-transform duration-200', open && 'rotate-90') })),
        open && react_1.default.createElement("div", { className: "p-2 flex flex-col space-y-2" }, children)));
}
exports.default = SidebarMenuHeader;
