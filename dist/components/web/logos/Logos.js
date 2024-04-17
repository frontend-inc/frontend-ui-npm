"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var components_1 = require("../../../components");
var Logos = function (props) {
    var title = props.title, _a = props.items, items = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(material_1.Stack, { spacing: 0, sx: sx.root },
        title && (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.secondary", sx: sx.title }, title)),
        react_1.default.createElement(material_1.Stack, { sx: sx.logos, direction: "row", spacing: 4 }, items === null || items === void 0 ? void 0 : items.map(function (item, index) { return (react_1.default.createElement(material_1.Box, { width: 120, key: index },
            react_1.default.createElement(components_1.Image, { key: index, alt: "Logo", src: item === null || item === void 0 ? void 0 : item.image, height: 60, width: 120, disableBorderRadius: true }))); })),
        (items === null || items === void 0 ? void 0 : items.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: "Image", title: "No logos", description: "Logos will appear here" }))));
};
exports.default = Logos;
var sx = {
    root: {
        width: '100%',
        py: 1,
        bgcolor: 'background.main',
    },
    title: {
        width: '100%',
        textAlign: 'center',
    },
    logos: {
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        justifyContent: {
            sm: 'center',
            xs: 'flex-start',
        },
    },
};
