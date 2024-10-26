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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ThemeContext_1 = __importDefault(require("./ThemeContext"));
var frontend_shadcn_1 = require("frontend-shadcn");
var ThemeProvider = function (props) {
    var _a = props || {}, mode = _a.mode, primaryColor = _a.primaryColor, headerFont = _a.headerFont, bodyFont = _a.bodyFont, borderRadius = _a.borderRadius, children = _a.children;
    var value = {
        mode: mode,
        primaryColor: primaryColor,
        headerFont: headerFont,
        bodyFont: bodyFont,
        borderRadius: borderRadius,
    };
    (0, react_1.useEffect)(function () {
        if (headerFont) {
            document.documentElement.style.setProperty('--font-header', headerFont);
        }
        if (bodyFont) {
            document.documentElement.style.setProperty('--font-body', bodyFont);
        }
        if (borderRadius) {
            document.documentElement.style.setProperty('--radius', "".concat(borderRadius, "px"));
        }
    }, [headerFont, bodyFont, borderRadius]);
    return (react_1.default.createElement(ThemeContext_1.default.Provider, { value: value },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(mode, 'w-full') }, children)));
};
exports.default = ThemeProvider;
