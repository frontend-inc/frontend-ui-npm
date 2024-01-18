"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ThemeContext_1 = __importDefault(require("./ThemeContext"));
var styles_1 = require("@mui/material/styles");
var hooks_1 = require("../../hooks");
var ThemeProvider = function (props) {
    var _a = props || {}, children = _a.children, primaryColor = _a.primaryColor, bgcolor = _a.bgcolor, _b = _a.headerFont, headerFont = _b === void 0 ? 'Inter' : _b, _c = _a.bodyFont, bodyFont = _c === void 0 ? 'Roboto' : _c, _d = _a.borderRadius, borderRadius = _d === void 0 ? 0 : _d, mobile = _a.mobile, _e = _a.offset, offset = _e === void 0 ? 0 : _e;
    var _f = (0, hooks_1.useTheme)({
        primaryColor: primaryColor,
        bgcolor: bgcolor,
        headerFont: headerFont,
        bodyFont: bodyFont,
        borderRadius: borderRadius,
        mobile: mobile,
        offset: offset,
    }), theme = _f.theme, setTheme = _f.setTheme;
    var value = {
        theme: theme,
        setTheme: setTheme,
    };
    return (react_1.default.createElement(ThemeContext_1.default.Provider, { value: value },
        react_1.default.createElement(styles_1.ThemeProvider, { theme: 
            // @ts-ignore
            (0, styles_1.createTheme)(theme) }, children)));
};
exports.default = ThemeProvider;
