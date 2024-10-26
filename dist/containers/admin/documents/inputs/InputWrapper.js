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
var components_1 = require("../../../../components");
var core_1 = require("../../../../components/core");
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
var DocumentInputWrapper = function (props) {
    var title = props.title, label = props.label, children = props.children, _a = props.defaultOpen, defaultOpen = _a === void 0 ? true : _a, _b = props.expandable, expandable = _b === void 0 ? false : _b, _c = props.disablePadding, disablePadding = _c === void 0 ? false : _c;
    var _d = (0, react_1.useState)(defaultOpen), open = _d[0], setOpen = _d[1];
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full flex flex-row justify-start items-start', !disablePadding && 'pb-2') },
        expandable && (react_1.default.createElement("div", null,
            react_1.default.createElement(core_1.IconButton, { onClick: function () { return setOpen(!open); } },
                react_1.default.createElement(lucide_react_1.ChevronDown, { className: (0, frontend_shadcn_1.cn)('h-5 w-5 rounded text-gray-500 bg-gray-100 transition-transform duration-200', !open && 'rotate-[-90deg]') })))),
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex-grow sm:flex-grow-[0.5] w-full pr-0 pl-1 border-l-3 border-transparent hover:border-primary transition-colors duration-300 ease-in-out') },
            react_1.default.createElement("div", { className: "flex flex-row justify-between items-center" },
                react_1.default.createElement(core_1.Typography, { variant: "overline", className: "text-muted-foreground" }, title),
                react_1.default.createElement(components_1.Label, { label: label })),
            children)));
};
exports.default = DocumentInputWrapper;
