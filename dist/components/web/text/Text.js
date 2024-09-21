"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
// Call To Action
var Text = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, description = _a.description, textAlign = _a.textAlign, textVariant = _a.textVariant, text = _a.text, _b = _a.html, html = _b === void 0 ? false : _b;
    return (react_1.default.createElement(__1.Container, { maxWidth: "md" },
        react_1.default.createElement(material_1.Stack, { spacing: 2, direction: 'column', sx: sx.container },
            react_1.default.createElement(__1.Heading, { label: label, title: title, description: description, textAlign: textAlign, textVariant: textVariant }),
            html ? (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text },
                react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: text } }))) : (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.text }, text)))));
};
exports.default = Text;
var sx = {
    container: {
        px: {
            md: 12,
            sm: 8,
            xs: 0
        }
    },
    text: {
        whiteSpace: 'pre-wrap',
        textAlign: 'justify',
    }
};
