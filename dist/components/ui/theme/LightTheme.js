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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@mui/material/styles");
var theme_1 = require("../../../theme");
var light_1 = __importDefault(require("../../../theme/palette/light"));
var LightTheme = function (props) {
    var children = (props || {}).children;
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: (0, styles_1.createTheme)(__assign(__assign({}, theme_1.muiTheme), { 
            //@ts-ignore
            palette: light_1.default })) }, children));
};
exports.default = LightTheme;
