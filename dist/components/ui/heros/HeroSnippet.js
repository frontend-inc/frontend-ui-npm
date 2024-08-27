"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var HeroSnippet = function (props) {
    var _a = props || {}, label = _a.label, image = _a.image, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction;
    return (react_1.default.createElement(material_1.Paper, { elevation: 0, sx: sx.paper },
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0, sx: sx.header },
            react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                react_1.default.createElement(__1.Image, { disableBorderRadius: true, label: label, src: image, alt: primary, height: 260 })),
            react_1.default.createElement(material_1.Stack, { spacing: 0.5, direction: "column", p: 2, width: "100%" },
                actions,
                react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "text.primary" }, primary),
                secondary))));
};
exports.default = HeroSnippet;
var sx = {
    paper: {},
    container: {
        borderRadius: 1,
        overflow: 'hidden',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: {
            md: 'flex-start',
            xs: 'center',
        },
    },
    header: {
        width: '100%',
    },
    imageContainer: {
        width: '100%',
        borderRadius: function (theme) {
            return "".concat(theme.shape.borderRadius, "px ").concat(theme.shape.borderRadius, "px 0 0");
        },
        overflow: 'hidden',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        bgcolor: 'rgb(0,0,0,0.5)',
    },
};
