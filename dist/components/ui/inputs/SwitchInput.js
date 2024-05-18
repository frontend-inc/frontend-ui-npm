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
var SwitchInput = function (props) {
    var name = props.name, value = props.value, _a = props.disableBorder, disableBorder = _a === void 0 ? false : _a, label = props.label, placeholder = props.placeholder, handleChange = props.handleChange;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Typography, { variant: "caption", color: "textSecondary" }, label),
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.input), (disableBorder && sx.disableBorder)) },
            react_1.default.createElement(material_1.FormControlLabel, { control: react_1.default.createElement(material_1.Switch, { name: name, checked: value, onChange: handleChange, value: "true" }), label: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "textPrimary" }, placeholder) }))));
};
exports.default = SwitchInput;
var sx = {
    root: {
        width: '100%',
    },
    input: {
        width: '100%',
        display: 'flex',
        direction: 'column',
        borderRadius: 1,
        py: '2px',
        px: 2,
        fontSize: 15,
        border: function (theme) { return "3px solid ".concat(theme.palette.divider); },
        '&:focus': {
            borderColor: 'primary.light',
        },
    },
    disableBorder: {
        border: 'none',
    },
};
