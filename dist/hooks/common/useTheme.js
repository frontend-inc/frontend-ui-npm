"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../../context");
var useTheme = function () {
    var _a = (0, react_1.useContext)(context_1.ThemeContext), mode = _a.mode, primaryColor = _a.primaryColor, headerFont = _a.headerFont, bodyFont = _a.bodyFont, borderRadius = _a.borderRadius;
    return {
        mode: mode,
        primaryColor: primaryColor,
        headerFont: headerFont,
        bodyFont: bodyFont,
        borderRadius: borderRadius,
    };
};
exports.default = useTheme;
