"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var Hero = function (props) {
    var _a = props || {}, image = _a.image, label = _a.label, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, children = _a.children;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 4 },
        secondaryAction,
        react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h3" }, primary),
        react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
            react_1.default.createElement(__1.Image, { src: image, alt: primary, height: 400, label: label })),
        actions,
        react_1.default.createElement(material_1.Box, { sx: sx.content }, secondary),
        children));
};
exports.default = Hero;
var sx = {
    root: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
        pb: 2,
    },
    header: {
        maxWidth: 500,
        width: '100%',
        textAlign: 'center',
    },
    content: {
        width: '100%',
        maxWidth: {
            sm: 500,
            xs: '100%',
        },
    },
    text: {
        width: '100%',
        whiteSpace: 'pre-line',
    },
    caption: {
        color: 'text.secondary',
    },
    buttons: {
        justifyContent: 'center',
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
    imageContainer: {
        width: '100%',
        borderRadius: 1,
    },
};
