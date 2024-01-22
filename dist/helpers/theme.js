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
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTheme = void 0;
var material_1 = require("@mui/material");
var index_1 = require("../constants/index");
var buildTheme = function (theme, bgcolor) {
    var paper = (0, material_1.lighten)(bgcolor, 0.2);
    var contrast = (0, material_1.getContrastRatio)(bgcolor, "#000000");
    var primaryText = contrast > 4.5 ? "#000000" : "#FFFFFF";
    var secondaryText = (0, material_1.alpha)(primaryText, index_1.SECONDARY_TEXT_ALPHA); // 0.9
    var neutral = contrast > 4.5 ? "#EEEEEE" : "#222222";
    var divider = contrast > 4.5 ? (0, material_1.darken)(bgcolor, 0.1) : (0, material_1.lighten)(bgcolor, 0.2);
    var newTheme = __assign(__assign({}, theme), { palette: __assign(__assign({}, theme.palette), { background: {
                default: bgcolor,
                main: bgcolor,
                paper: paper,
            }, divider: divider, text: {
                primary: primaryText,
                secondary: secondaryText,
            }, tertiary: {
                main: neutral,
            } }) });
    return newTheme;
};
exports.buildTheme = buildTheme;
