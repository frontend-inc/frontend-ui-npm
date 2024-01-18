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
exports.selectStyles = void 0;
var theme_1 = require("theme");
var styles_1 = require("@mui/material/styles");
//@ts-ignore
var theme = (0, styles_1.createTheme)(theme_1.muiTheme);
exports.selectStyles = {
    select: function (styles) { return (__assign({}, styles)); },
    control: function (styles) { return (__assign(__assign({}, styles), { width: '100%', fontSize: theme.typography.body1.fontSize, mt: '0px', fontFamily: theme.typography.body1.fontFamily, p: '2px', minHeight: 40, border: '1px solid', borderColor: theme.palette.primary.main, color: 'text.primary', bgcolor: 'background.paper' })); },
    option: function (styles, _a) {
        var data = _a.data, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isSelected = _a.isSelected;
        return (__assign(__assign({}, styles), { bgcolor: 'background.paper', fontSize: theme.typography.body1.fontSize, fontFamily: theme.typography.body1.fontFamily, cursor: 'pointer', color: 'text.primary', height: '40px', ':hover': {
                bgcolor: 'background.paper',
                color: 'primary.main',
            } }));
    },
    noOptionsMessage: function (styles) { return (__assign(__assign({}, styles), { fontSize: theme.typography.body1.fontSize, fontFamily: theme.typography.body1.fontFamily, bgcolor: 'common.input' })); },
    menu: function (styles) { return ({
        bgcolor: 'background.paper',
        zIndex: 999,
        position: 'absolute',
        width: '100%',
        borderRadius: function (theme) { return theme.shape.borderRadius; },
    }); },
    input: function (styles) { return (__assign(__assign({}, styles), { color: 'text.primary' })); },
    placeholder: function (styles) { return (__assign(__assign({}, styles), { fontSize: theme.typography.body1.fontSize, fontFamily: theme.typography.body1.fontFamily, color: 'text.primary' })); },
    singleValue: function (styles) { return (__assign(__assign({}, styles), { color: 'text.primary', borderRadius: function (theme) { return theme.shape.borderRadius; } })); },
    multiValue: function (styles) { return (__assign(__assign({}, styles), { p: '0px 2px', borderRadius: function (theme) { return theme.shape.borderRadius; }, fontSize: 15, border: '1px solid', borderColor: theme.palette.primary.main, bgcolor: 'common.input' })); },
    multiValueLabel: function (styles) { return (__assign(__assign({}, styles), { color: 'primary.main' })); },
    multiValueRemove: function (styles) { return (__assign(__assign({}, styles), { color: 'primary.main', cursor: 'pointer', ':hover': {
            color: 'primary.main',
        } })); },
};
