"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var image_1 = __importDefault(require("next/image"));
var hooks_1 = require("../../../hooks");
var AuthScreen = function (props) {
    var title = props.title, subtitle = props.subtitle, children = props.children;
    var logo = (0, hooks_1.useApp)().logo;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Container, { maxWidth: "sm" },
            react_1.default.createElement(material_1.Paper, { elevation: 0, sx: sx.paper },
                react_1.default.createElement(material_1.Box, { sx: sx.logo }, logo && (react_1.default.createElement(image_1.default, { src: logo, alt: "Logo", height: 48, width: 48 }))),
                react_1.default.createElement(material_1.Box, { sx: sx.titles },
                    react_1.default.createElement(material_1.Typography, { variant: "h4", sx: sx.title }, title),
                    subtitle && (react_1.default.createElement(material_1.Typography, { variant: "body1", sx: sx.subtitle }, subtitle))),
                children))));
};
exports.default = AuthScreen;
var sx = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        height: '100%',
    },
    titles: {
        mb: 1,
    },
    logo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pb: 2,
    },
    title: {
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
        color: 'text.primary',
    },
    paper: {
        p: {
            sm: 4,
            xs: 2,
        },
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        bgcolor: 'background.paper',
    },
};
