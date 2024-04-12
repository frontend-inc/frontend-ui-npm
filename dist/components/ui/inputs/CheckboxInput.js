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
var CheckboxInput = function (props) {
    var name = props.name, value = props.value, placeholder = props.placeholder, label = props.label, handleChange = props.handleChange, _a = props.disableBorder, disableBorder = _a === void 0 ? false : _a;
    var handleCheckboxChange = function (ev) {
        var value = ev.target.checked;
        handleChange({
            target: {
                name: name,
                value: value,
            },
        });
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Typography, { variant: "caption", color: "textSecondary" }, label),
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.input), (!disableBorder && sx.border)) },
            react_1.default.createElement(material_1.FormControlLabel, { control: react_1.default.createElement(material_1.Checkbox, { name: name, checked: value == true ? true : false, onChange: handleCheckboxChange, value: "true" }), label: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textSecondary" }, placeholder) }))));
};
exports.default = CheckboxInput;
var sx = {
    root: {
        width: '100%',
    },
    input: {
        display: 'flex',
        direction: 'column',
        fontSize: 15,
    },
    border: {
        border: function (theme) { return "1px solid ".concat(theme.palette.divider); },
        boxShadow: "rgb(0 0 0 / 5%) 0px 2px 4px !important",
        pt: 0.5,
        pr: 2,
        pb: 0.5,
        pl: 2,
        borderRadius: 1,
    },
};
