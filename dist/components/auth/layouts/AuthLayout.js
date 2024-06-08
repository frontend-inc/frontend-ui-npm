"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var image_1 = __importDefault(require("next/image"));
var hooks_1 = require("../../../hooks");
var AuthLayout = function (props) {
    var children = props.children, footer = props.footer;
    var logo = (0, hooks_1.useApp)().logo;
    return (react_1.default.createElement(material_1.Stack, { width: "100%", direction: "column", spacing: 2, justifyContent: "space-between" },
        react_1.default.createElement(material_1.Box, { sx: sx.header },
            react_1.default.createElement(material_1.Box, { sx: sx.logo }, logo && (react_1.default.createElement(image_1.default, { src: logo, alt: "Logo", height: 100, width: 100, layout: "responsive", style: {
                    width: '100%',
                    objectFit: 'contain',
                } })))),
        react_1.default.createElement(material_1.Box, { sx: sx.root },
            react_1.default.createElement(material_1.Container, { maxWidth: "sm" }, children)),
        react_1.default.createElement(material_1.Box, { sx: sx.footer }, footer)));
};
exports.default = AuthLayout;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 160px)',
        bgcolor: 'background.default',
    },
    header: {
        py: 2,
        height: 60,
        maxHeight: 60,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        py: 2,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        maxHeight: 40,
        maxWidth: 110,
    },
};
