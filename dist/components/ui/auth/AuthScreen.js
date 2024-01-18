"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("components");
var AuthScreen = function (props) {
    var title = props.title, subtitle = props.subtitle, children = props.children, logo = props.logo;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Container, { maxWidth: "sm" },
            react_1.default.createElement(material_1.Paper, { elevation: 0, sx: sx.paper },
                react_1.default.createElement(material_1.Box, { sx: sx.logo },
                    react_1.default.createElement(components_1.SquareLogo, { src: logo })),
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
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        bgcolor: 'background.paper',
    },
};
