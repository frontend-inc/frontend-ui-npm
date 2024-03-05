"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var index_1 = require("../../index");
var TabItem = function (props) {
    var title = props.title, description = props.description, image = props.image, _a = props.active, active = _a === void 0 ? false : _a;
    if (!active)
        return null;
    return (react_1.default.createElement(material_1.Stack, { direction: {
            sm: 'row',
            xs: 'column-reverse'
        }, spacing: 2, sx: sx.root },
        image && (react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
            react_1.default.createElement("img", { alt: title, src: image, height: 256, width: 256, style: {
                    width: '100%',
                    objectFit: 'contain'
                } }))),
        react_1.default.createElement(material_1.Stack, { sx: sx.content, spacing: 1 },
            react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "text.primary" }, title),
            react_1.default.createElement(index_1.Text, { variant: "body1", color: "text.secondary" }, description))));
};
exports.default = TabItem;
var sx = {
    root: {
        px: 2
    },
    imageContainer: {
        width: 256,
        height: 256,
        overflow: 'hidden'
    },
    content: {
        width: '100%'
    }
};
