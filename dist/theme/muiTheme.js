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
exports.muiTheme = void 0;
var components_1 = __importDefault(require("./components"));
var breakpoints_1 = require("./breakpoints");
var palette_1 = require("./palette");
var shape_1 = require("./shape");
var shadows_1 = require("./shadows");
var typography_1 = require("./typography");
var spacing_1 = require("./spacing");
exports.muiTheme = {
    breakpoints: breakpoints_1.breakpoints,
    components: components_1.default,
    palette: __assign(__assign({}, palette_1.palette), { editor: {
            dark: '#282C34',
            main: '#343842',
            light: '#343842',
        } }),
    shadows: shadows_1.shadows,
    typography: typography_1.typography,
    shape: shape_1.shape,
    spacing: spacing_1.spacing,
};
