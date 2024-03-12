"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var Article = function (props) {
    var resource = (props || {}).resource;
    var _a = resource || {}, title = _a.title, image = _a.image, description = _a.description;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 2 },
        react_1.default.createElement(material_1.Typography, { color: 'text.primary', variant: "h5", sx: sx.title }, title),
        react_1.default.createElement(__1.Image, { src: image === null || image === void 0 ? void 0 : image.url, alt: title, height: 400 }),
        react_1.default.createElement(material_1.Box, { sx: sx.content },
            react_1.default.createElement(material_1.Typography, { variant: "body1", color: 'text.primary', sx: sx.text }, description))));
};
exports.default = Article;
var sx = {
    root: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        width: '100%',
        textAlign: 'center',
    },
    content: {
        width: '100%',
        maxWidth: {
            sm: 400,
            xs: '100%'
        },
    },
    text: {
        maxWidth: {
            sm: 400,
            xs: '100%'
        },
        width: '100%',
        whiteSpace: 'pre-line',
    }
};
