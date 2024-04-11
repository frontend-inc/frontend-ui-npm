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
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Label = function (props) {
    var label = props.label, styles = props.styles;
    if (!label)
        return null;
    return (react_1.default.createElement(material_1.Chip, { label: label, sx: __assign(__assign({}, sx.chip), styles), size: "small" }));
};
exports.default = Label;
var sx = {
    chip: {
        opacity: 0.8,
        bgcolor: 'secondary.main',
        color: 'secondary.contrastText',
        characterSpacing: '1em',
        fontWeight: 500,
        fontFamily: function (theme) { return theme.typography.fontFamily.caption; },
        letterSpacing: '0.05em',
        cursor: 'pointer',
        borderRadius: '4px',
        boxShadow: '1px 0px 0 0 rgba(0,0,0,0.1)',
    },
};
