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
var react_google_font_loader_1 = __importDefault(require("react-google-font-loader"));
var react_2 = require("@nextui-org/react");
var ThemeProvider = function (props) {
    var _a = (0, react_1.useState)(), googleFonts = _a[0], setGoogleFonts = _a[1];
    var _b = props || {}, _c = _b.mode, mode = _c === void 0 ? 'dark' : _c, _d = _b.theme, theme = _d === void 0 ? 'dark' : _d, primaryColor = _b.primaryColor, _e = _b.headerFont, headerFont = _e === void 0 ? 'Inter' : _e, _f = _b.bodyFont, bodyFont = _f === void 0 ? 'Inter' : _f, borderRadius = _b.borderRadius, children = _b.children;
    var value = {
        mode: mode,
        theme: theme,
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
        if (borderRadius >= 0) {
            document.documentElement.style.setProperty('--radius', "".concat(borderRadius, "px"));
        }
    }, [headerFont, bodyFont, borderRadius]);
    (0, react_1.useEffect)(function () {
        if (headerFont || bodyFont) {
            var fonts = [];
            if (headerFont) {
                fonts.push({
                    font: headerFont,
                    weights: [400, 600, 700, 800, 900],
                });
            }
            if (bodyFont) {
                fonts.push({
                    font: bodyFont,
                    weights: [400, 600, 700, 800, 900],
                });
            }
            setGoogleFonts(fonts);
        }
    }, [headerFont, bodyFont]);
    var themeClass = "".concat(theme, "-").concat(mode);
    if (theme == 'light') {
        themeClass = "light";
    }
    if (theme == 'dark') {
        themeClass = "dark";
    }
    return (react_1.default.createElement(ThemeContext_1.default.Provider, { value: value },
        (googleFonts === null || googleFonts === void 0 ? void 0 : googleFonts.length) > 0 && react_1.default.createElement(react_google_font_loader_1.default, { fonts: googleFonts }),
        react_1.default.createElement(react_2.NextUIProvider, { className: themeClass }, children)));
};
exports.default = ThemeProvider;
