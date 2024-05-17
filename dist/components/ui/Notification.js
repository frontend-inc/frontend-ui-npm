"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var Notification = function (props) {
    var children = props.children;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Box, { sx: sx.icon },
            react_1.default.createElement(icons_material_1.InfoOutlined, { sx: sx.icon })),
        react_1.default.createElement(material_1.Typography, { variant: "caption", sx: sx.text }, children)));
};
exports.default = Notification;
var sx = {
    root: {
        px: 2,
        py: 0.5,
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        border: '1px solid',
        borderColor: 'warning.border',
        bgcolor: 'warning.light',
    },
    text: {
        fontWeight: 500,
        color: 'text.primary',
    },
    icon: {
        mr: 1,
        height: '20px',
        width: '20px',
        color: 'warning.main',
    },
};
