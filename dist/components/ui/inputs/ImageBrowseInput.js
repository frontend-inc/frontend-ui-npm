"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var image_1 = __importDefault(require("next/image"));
var ImageInput = function (props) {
    var name = props.name, value = props.value, handleChange = props.handleChange, handleBrowse = props.handleBrowse, placeholder = props.placeholder, errors = props.errors;
    return (react_1.default.createElement(material_1.Box, null,
        value ? (react_1.default.createElement(image_1.default, { height: 64, width: 64, src: value, alt: "image", style: {
                width: "100%",
                objectFit: "contain",
            } })) : (react_1.default.createElement(components_1.EmptyImage, { height: 64, width: 64 })),
        react_1.default.createElement(components_1.TextInput, { name: name, value: value, handleChange: handleChange, placeholder: placeholder, errors: errors }),
        react_1.default.createElement(material_1.Button, { size: "small", variant: "outlined", onClick: function () { return handleBrowse(name); }, startIcon: react_1.default.createElement(lucide_react_1.Search, null) }, "Browse")));
};
exports.default = ImageInput;
var sx = {};
