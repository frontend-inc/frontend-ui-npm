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
var palette_1 = require("../palette");
var typography_1 = require("../typography");
var material_1 = require("@mui/material");
exports.default = {
    styleOverrides: {
        root: __assign(__assign({}, typography_1.typography.body2), { padding: "0 4px 0 4px", borderBottom: "1px solid ".concat((0, material_1.alpha)(palette_1.palette.divider, 0.6)) }),
    },
};
