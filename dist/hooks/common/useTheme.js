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
var theme_1 = require("theme");
var helpers_1 = require("helpers");
var useTheme = function (props) {
    var _a = props || {}, primaryColor = _a.primaryColor, bgcolor = _a.bgcolor, borderRadius = _a.borderRadius, bodyFont = _a.bodyFont, headerFont = _a.headerFont, _b = _a.offset, offset = _b === void 0 ? 0 : _b, _c = _a.mobile, mobile = _c === void 0 ? false : _c;
    var _d = (0, react_1.useState)(theme_1.muiTheme), theme = _d[0], setTheme = _d[1];
    (0, react_1.useEffect)(function () {
        var breakpoints = {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        };
        if (offset > 0) {
            breakpoints = {
                values: {
                    xs: 0,
                    sm: breakpoints.values.sm + offset,
                    md: breakpoints.values.md + offset,
                    lg: breakpoints.values.lg + offset,
                    xl: breakpoints.values.xl + offset,
                },
            };
        }
        if (mobile == true) {
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
        setTheme(__assign(__assign({}, theme), { breakpoints: breakpoints }));
    }, [offset, mobile]);
    (0, react_1.useEffect)(function () {
        if (headerFont && bodyFont) {
            var typography = __assign(__assign({}, theme_1.muiTheme.typography), { h1: __assign(__assign({}, theme_1.muiTheme.typography.h1), { fontFamily: headerFont ? headerFont : 'Inter' }), h2: __assign(__assign({}, theme_1.muiTheme.typography.h2), { fontFamily: headerFont ? headerFont : 'Inter' }), h3: __assign(__assign({}, theme_1.muiTheme.typography.h3), { fontFamily: headerFont ? headerFont : 'Inter' }), h4: __assign(__assign({}, theme_1.muiTheme.typography.h4), { fontFamily: headerFont ? headerFont : 'Inter' }), h5: __assign(__assign({}, theme_1.muiTheme.typography.h5), { fontFamily: headerFont ? headerFont : 'Inter' }), h6: __assign(__assign({}, theme_1.muiTheme.typography.h6), { fontFamily: headerFont ? headerFont : 'Inter' }), subtitle1: __assign(__assign({}, theme_1.muiTheme.typography.subtitle1), { fontFamily: bodyFont ? bodyFont : 'Inter' }), subtitle2: __assign(__assign({}, theme_1.muiTheme.typography.subtitle2), { fontFamily: bodyFont ? bodyFont : 'Inter' }), body1: __assign(__assign({}, theme_1.muiTheme.typography.body1), { fontFamily: bodyFont ? bodyFont : 'Inter' }), body2: __assign(__assign({}, theme_1.muiTheme.typography.body2), { fontFamily: bodyFont ? bodyFont : 'Inter' }), button: __assign(__assign({}, theme_1.muiTheme.typography.button), { fontFamily: bodyFont ? bodyFont : 'Inter' }), caption: __assign(__assign({}, theme_1.muiTheme.typography.caption), { fontFamily: bodyFont ? bodyFont : 'Inter' }), overline: __assign(__assign({}, theme_1.muiTheme.typography.overline), { fontFamily: bodyFont ? bodyFont : 'Inter' }) });
            setTheme(__assign(__assign({}, theme), { typography: typography }));
        }
    }, [headerFont, bodyFont]);
    (0, react_1.useEffect)(function () {
        var shape = {
            borderRadius: borderRadius || 0,
        };
        setTheme(__assign(__assign({}, theme), { shape: shape }));
    }, [borderRadius]);
    (0, react_1.useEffect)(function () {
        var newTheme = __assign({}, theme);
        if (primaryColor) {
            newTheme = __assign(__assign({}, theme), { palette: __assign(__assign({}, theme.palette), { primary: __assign(__assign({}, theme.palette.primary), { main: primaryColor }) }) });
        }
        if (bgcolor) {
            newTheme = (0, helpers_1.buildTheme)(newTheme, bgcolor);
        }
        if (primaryColor || bgcolor) {
            setTheme(newTheme);
        }
    }, [primaryColor, bgcolor]);
    return {
        theme: theme,
        setTheme: setTheme,
    };
};
exports.default = useTheme;
