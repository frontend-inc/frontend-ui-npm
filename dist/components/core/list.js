'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemIcon = exports.ListItemButton = exports.ListItemText = exports.ListItem = exports.List = void 0;
var react_1 = __importStar(require("react"));
var typography_1 = require("./typography");
var frontend_shadcn_1 = require("frontend-shadcn");
// List Component
var List = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("ul", __assign({ ref: ref, className: (0, frontend_shadcn_1.cn)('w-full', className) }, props)));
});
exports.List = List;
List.displayName = 'List';
// ListItem Component
var ListItem = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("li", __assign({ ref: ref, className: (0, frontend_shadcn_1.cn)('py-2 px-4 flex items-center text-sm', className) }, props)));
});
exports.ListItem = ListItem;
ListItem.displayName = 'ListItem';
// ListItemText Component
var ListItemText = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, primary = _a.primary, secondary = _a.secondary, props = __rest(_a, ["className", "primary", "secondary"]);
    return (react_1.default.createElement("div", __assign({ ref: ref, className: (0, frontend_shadcn_1.cn)('flex flex-col', className) }, props),
        primary && react_1.default.createElement(typography_1.Typography, { variant: "body1" }, primary),
        secondary && react_1.default.createElement(typography_1.Typography, { variant: "body2" }, secondary)));
});
exports.ListItemText = ListItemText;
ListItemText.displayName = 'ListItemText';
// ListItemButton Component
var ListItemButton = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("div", __assign({ ref: ref, className: (0, frontend_shadcn_1.cn)('flex w-full items-center py-2 px-4 text-sm rounded-md transition-colors hover:bg-accent focus:bg-accent focus:outline-none', className), role: "button", tabIndex: 0 }, props)));
});
exports.ListItemButton = ListItemButton;
ListItemButton.displayName = 'ListItemButton';
// ListItemIcon Component
var ListItemIcon = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (react_1.default.createElement("div", __assign({ ref: ref, className: (0, frontend_shadcn_1.cn)('mr-2 h-4 w-4 shrink-0', className) }, props)));
});
exports.ListItemIcon = ListItemIcon;
ListItemIcon.displayName = 'ListItemIcon';
