"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var material_1 = require("@mui/material");
var __2 = require("../..");
var lucide_react_1 = require("lucide-react");
var VideoInput = function (props) {
    var name = props.name, label = props.label, value = props.value, handleChange = props.handleChange, handleBrowse = props.handleBrowse, placeholder = props.placeholder, errors = props.errors;
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(__1.CellVideo, { value: value }),
        react_1.default.createElement(__2.TextInput, { name: name, value: value, handleChange: handleChange, placeholder: placeholder, errors: errors }),
        react_1.default.createElement(material_1.Button, { sx: sx.button, size: "small", variant: "outlined", onClick: function () { return handleBrowse(name); }, startIcon: react_1.default.createElement(lucide_react_1.Search, null) }, "Browse")));
};
exports.default = VideoInput;
var sx = {
    button: {
        color: 'text.secondary',
        mt: 0.5,
    },
};
