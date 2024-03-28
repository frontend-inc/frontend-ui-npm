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
var buildMuiPalette = function (palette, bgcolor) {
    var paper = (0, material_1.lighten)(bgcolor, 0.2);
    var contrast = (0, material_1.getContrastRatio)(bgcolor, '#000000');
    var primaryText = contrast > 4.5 ? '#000000' : '#FFFFFF';
    var secondaryText = contrast > 2.5 ? '#465A6A' : '#BBBBBB';
    var neutral = contrast > 4.5 ? '#EEEEEE' : '#222222';
    var fill = contrast > 4.5 ? '#fcfcfc' : '#111111';
    var divider = contrast > 4.5 ? (0, material_1.darken)(bgcolor, 0.1) : (0, material_1.lighten)(bgcolor, 0.2);
    var muiPalette = __assign(__assign({}, palette), { background: {
            default: bgcolor,
            main: bgcolor,
            paper: paper,
            fill: fill,
        }, divider: divider, text: {
            primary: primaryText,
            secondary: secondaryText,
        }, tertiary: {
            light: (0, material_1.lighten)(neutral, 0.2),
            main: neutral,
            dark: (0, material_1.darken)(neutral, 0.2),
        } });
    return muiPalette;
};
exports.buildMuiPalette = buildMuiPalette;
