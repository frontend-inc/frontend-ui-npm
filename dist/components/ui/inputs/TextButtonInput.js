"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var TextButtonInput = function (props) {
    var name = props.name, value = props.value, handleChange = props.handleChange, placeholder = props.placeholder, color = props.color, onClick = props.onClick, loading = props.loading, children = props.children;
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 0, alignItems: "flex-end", sx: sx.inputContainer },
        react_1.default.createElement(components_1.TextInput, { name: name, value: value, handleChange: handleChange, placeholder: placeholder, styles: sx.input }),
        react_1.default.createElement(material_1.Button, { variant: "contained", color: color, sx: sx.button, onClick: onClick, startIcon: loading ? react_1.default.createElement(components_1.IconLoading, null) : null }, children)));
};
exports.default = TextButtonInput;
var sx = {
    inputContainer: {
        width: '100%',
    },
    button: {
        height: 43,
        px: 3,
        borderRadius: function (theme) {
            return "0 ".concat(theme.shape.borderRadius, "px ").concat(theme.shape.borderRadius, "px 0");
        },
    },
    input: {
        '& .MuiInputBase-input': {
            borderRadius: function (theme) {
                return "".concat(theme.shape.borderRadius, "px 0 0 ").concat(theme.shape.borderRadius, "px");
            },
        },
    },
};
