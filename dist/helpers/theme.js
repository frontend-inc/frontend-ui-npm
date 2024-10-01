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
exports.buildMuiPalette = void 0;
var material_1 = require("@mui/material");
var buildMuiPalette = function (palette) {
    var bgColor = palette.background.default;
    var contrast = (0, material_1.getContrastRatio)(bgColor, '#000000');
    var paper = (0, material_1.lighten)(bgColor, 0.05);
    var primaryText = contrast > 10 ? (0, material_1.darken)(bgColor, 0.9) : (0, material_1.lighten)(bgColor, 0.9);
    var secondaryText = contrast > 10 ? (0, material_1.darken)(bgColor, 0.7) : (0, material_1.lighten)(bgColor, 1.0);
    var divider = contrast > 10 ? (0, material_1.darken)(bgColor, 0.12) : (0, material_1.lighten)(bgColor, 0.12);
    var muiPalette = __assign(__assign({}, palette), { background: {
            default: bgColor,
            main: bgColor,
            paper: paper,
        }, divider: divider, text: {
            primary: primaryText,
            secondary: secondaryText,
        } });
    return muiPalette;
};
exports.buildMuiPalette = buildMuiPalette;
