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
var react_google_font_loader_1 = __importDefault(require("react-google-font-loader"));
var FontLoader = function (_a) {
    var headerFont = _a.headerFont, bodyFont = _a.bodyFont;
    var _b = (0, react_1.useState)(), googleFonts = _b[0], setGoogleFonts = _b[1];
    (0, react_1.useEffect)(function () {
        if (headerFont || bodyFont) {
            var fonts = [
                { font: 'Inter', weights: [400, 600, 700, 800, 900] },
                { font: 'Roboto', weights: [400, 600, 700, 800, 900] },
            ];
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
    if (!googleFonts)
        return null;
    return react_1.default.createElement(react_google_font_loader_1.default, { fonts: googleFonts });
};
exports.default = FontLoader;
