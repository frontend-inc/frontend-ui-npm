"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var AuthScreen = function (props) {
    var title = props.title, subtitle = props.subtitle, children = props.children;
    return (react_1.default.createElement(material_1.Paper, { elevation: 0, sx: sx.paper },
        react_1.default.createElement(material_1.Box, { sx: sx.titles },
            react_1.default.createElement(material_1.Typography, { variant: "h4", sx: sx.title }, title),
            subtitle && (react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary", sx: sx.subtitle }, subtitle))),
        children));
};
exports.default = AuthScreen;
var sx = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
    },
    titles: {
        mb: 1,
    },
    title: {
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
    },
    paper: {
        width: '100%',
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
