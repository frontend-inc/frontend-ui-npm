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
var react_1 = require("react");
var theme_1 = require("../../theme");
var helpers_1 = require("../../helpers");
var useTheme = function (props) {
    var _a = props || {}, _b = _a.muiTheme, muiTheme = _b === void 0 ? theme_1.muiTheme : _b, primaryColor = _a.primaryColor, textPrimary = _a.textPrimary, textSecondary = _a.textSecondary, bgcolor = _a.bgcolor, borderRadius = _a.borderRadius, bodyFont = _a.bodyFont, headerFont = _a.headerFont, _c = _a.offsetX, offsetX = _c === void 0 ? 0 : _c, _d = _a.deviceSize, deviceSize = _d === void 0 ? 'desktop' : _d;
    var _e = (0, react_1.useState)(muiTheme), theme = _e[0], setTheme = _e[1];
    (0, react_1.useEffect)(function () {
        var newTheme = {};
        if (muiTheme) {
            newTheme = muiTheme;
        }
        else {
            newTheme = __assign({}, theme);
        }
        var breakpoints = __assign({}, newTheme.breakpoints);
        var palette = __assign({}, newTheme.palette);
        var typography = __assign({}, newTheme.typography);
        var shape = __assign({}, newTheme.shape);
        if (offsetX > 0) {
            breakpoints = {
                values: {
                    xs: 0,
                    sm: breakpoints.values.sm + offsetX,
                    md: breakpoints.values.md + offsetX,
                    lg: breakpoints.values.lg + offsetX,
                    xl: breakpoints.values.xl + offsetX,
                },
            };
        }
        if (deviceSize == 'mobile') {
            breakpoints = {
                values: {
                    xs: 0,
                    sm: 5000,
                    md: 5000,
                    lg: 5000,
                    xl: 5000,
                },
            };
        }
        if (deviceSize == 'tablet') {
            breakpoints = {
                values: {
                    xs: 0,
                    sm: 0,
                    md: 5000,
                    lg: 5000,
                    xl: 5000,
                },
            };
        }
        if (primaryColor) {
            palette = __assign(__assign({}, palette), { primary: __assign(__assign({}, palette.primary), { 
                    // @ts-ignore
                    main: primaryColor }) });
        }
        if (bgcolor) {
            palette = __assign(__assign({}, palette), { background: __assign(__assign({}, palette.background), { default: bgcolor, main: bgcolor }) });
        }
        palette = (0, helpers_1.buildMuiPalette)(palette);
        if (textPrimary) {
            palette = __assign(__assign({}, palette), { text: __assign(__assign({}, palette.text), { primary: textPrimary }) });
        }
        if (textSecondary) {
            palette = __assign(__assign({}, palette), { text: __assign(__assign({}, palette.text), { secondary: textSecondary }) });
        }
        if (headerFont) {
            typography = __assign(__assign({}, typography), { h1: __assign(__assign({}, typography.h1), { fontFamily: headerFont }), h2: __assign(__assign({}, typography.h2), { fontFamily: headerFont }), h3: __assign(__assign({}, typography.h3), { fontFamily: headerFont }), h4: __assign(__assign({}, typography.h4), { fontFamily: headerFont }), h5: __assign(__assign({}, typography.h5), { fontFamily: headerFont }), h6: __assign(__assign({}, typography.h6), { fontFamily: headerFont }), subtitle1: __assign(__assign({}, typography.subtitle1), { fontFamily: headerFont }), subtitle2: __assign(__assign({}, typography.subtitle2), { fontFamily: headerFont }) });
        }
        if (bodyFont) {
            typography = __assign(__assign({}, typography), { body1: __assign(__assign({}, typography.body1), { fontFamily: bodyFont }), body2: __assign(__assign({}, typography.body2), { fontFamily: bodyFont }), button: __assign(__assign({}, typography.button), { fontFamily: bodyFont }), caption: __assign(__assign({}, typography.caption), { fontFamily: bodyFont }), overline: __assign(__assign({}, typography.overline), { fontFamily: bodyFont }) });
        }
        if (Number(borderRadius) >= 0) {
            shape = __assign(__assign({}, shape), { borderRadius: Number(borderRadius) });
        }
        setTheme(__assign(__assign({}, theme), { palette: palette, breakpoints: breakpoints, typography: typography, shape: shape }));
    }, [
        offsetX,
        deviceSize,
        primaryColor,
        bgcolor,
        textPrimary,
        textSecondary,
        headerFont,
        bodyFont,
        borderRadius,
        muiTheme,
    ]);
    return {
        theme: theme,
        setTheme: setTheme,
    };
};
exports.default = useTheme;
