"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ThemeContext_1 = __importDefault(require("./ThemeContext"));
var styles_1 = require("@mui/material/styles");
var hooks_1 = require("../hooks");
var ThemeProvider = function (props) {
    var _a = props || {}, children = _a.children, muiTheme = _a.muiTheme, primaryColor = _a.primaryColor, bgcolor = _a.bgcolor, headerFont = _a.headerFont, bodyFont = _a.bodyFont, borderRadius = _a.borderRadius, deviceSize = _a.deviceSize, offsetX = _a.offsetX, offsetY = _a.offsetY;
    var _b = (0, hooks_1.useTheme)({
        muiTheme: muiTheme,
        primaryColor: primaryColor,
        bgcolor: bgcolor,
        headerFont: headerFont,
        bodyFont: bodyFont,
        borderRadius: borderRadius,
        deviceSize: deviceSize,
        offsetX: offsetX,
    }), theme = _b.theme, setTheme = _b.setTheme;
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
