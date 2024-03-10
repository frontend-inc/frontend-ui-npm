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
var SelectInput = function (props) {
    var label = props.label, _a = props.direction, direction = _a === void 0 ? 'column' : _a, name = props.name, value = props.value, options = props.options, handleChange = props.handleChange;
    return (react_1.default.createElement(material_1.FormControl, { size: "small", fullWidth: true, variant: "outlined" },
        react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, sx.stack), (direction == 'row' && sx.stackVertical)), direction: direction, spacing: 1 },
            react_1.default.createElement(material_1.Typography, { variant: "caption", sx: sx.label, gutterBottom: true }, label),
            react_1.default.createElement(material_1.Select, { sx: sx.root, value: value, name: name, onChange: function (e) { return handleChange(e); } }, options === null || options === void 0 ? void 0 : options.map(function (option, idx) { return (
            // @ts-ignore
            react_1.default.createElement(material_1.MenuItem, { value: option.value, key: idx }, option.label)); })))));
};
exports.default = SelectInput;
var sx = {
    root: {
        minWidth: '165px',
        height: '40px',
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.default',
        width: '100%',
        '.MuiSvgIcon-root ': {
            fill: function (theme) { return theme.palette.text.secondary; },
        },
        boxShadow: 'none',
        '.MuiOutlinedInput-notchedOutline': { border: 0 },
        '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            border: 0,
        },
        '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 0,
        },
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    label: {
        mb: 0,
        minWidth: '100px',
        color: 'text.secondary',
    },
    stack: {
        width: '100%',
        alignItems: 'flex-start',
    },
    stackVertical: {
        alignItems: 'center',
    },
};
