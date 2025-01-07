"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = require("../../context");
var useTheme = function () {
    var _a = (0, react_1.useContext)(context_1.ThemeContext), mode = _a.mode, theme = _a.theme, primaryColor = _a.primaryColor, headerFont = _a.headerFont, bodyFont = _a.bodyFont, borderRadius = _a.borderRadius;
    // These are defined in tailwind.config.js within nextui plugin.
    var themeClass = "".concat(theme, "-").concat(mode);
    if (theme == 'dark') {
        themeClass = 'dark';
    }
    if (theme == 'light') {
        themeClass = 'light';
    }
    return {
        mode: mode,
        theme: theme,
        primaryColor: primaryColor,
        headerFont: headerFont,
        bodyFont: bodyFont,
        borderRadius: borderRadius,
        themeClass: themeClass,
    };
};
exports.default = useTheme;
