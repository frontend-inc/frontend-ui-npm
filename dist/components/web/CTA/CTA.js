"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
// Call To Action
var CTA = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, description = _a.description, buttons = _a.buttons;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { sx: sx.content, direction: "column", spacing: 1 },
            label && (react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "caption", sx: sx.label }, label)),
            title && (react_1.default.createElement(material_1.Typography, { variant: 'h3', color: "text.primary", sx: sx.title }, title)),
            description && (react_1.default.createElement(material_1.Typography, { variant: "subtitle2", color: "text.secondary", sx: sx.description }, description)),
            (buttons === null || buttons === void 0 ? void 0 : buttons.length) > 0 && (react_1.default.createElement(material_1.Box, { sx: sx.buttons },
                react_1.default.createElement(components_1.ButtonActions, { resource: [], buttons: buttons, size: 'large', justifyContent: 'center' }))))));
};
exports.default = CTA;
var sx = {
    root: {
        width: '100%',
    },
    content: {
        width: '100%',
        alignItems: 'center',
    },
    label: {
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        color: 'text.primary',
    },
    description: {
        color: 'text.secondary',
        textAlign: 'center',
        maxWidth: '600px',
    },
    buttons: {
        pt: 2,
        textAlign: 'center',
        width: '100%',
    },
};
