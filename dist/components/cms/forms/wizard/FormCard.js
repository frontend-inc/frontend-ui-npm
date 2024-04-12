"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var FormCard = function (props) {
    var title = props.title, description = props.description, image = props.image, handleClick = props.handleClick, buttonText = props.buttonText;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", sx: sx.root, spacing: 2 },
        react_1.default.createElement(components_1.Image, { src: image, height: 400 }),
        react_1.default.createElement(material_1.Typography, { variant: "h4", color: "text.primary" }, title),
        react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.secondary" }, description),
        react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(material_1.Button, { onClick: handleClick, variant: "contained", color: "primary" }, buttonText))));
};
exports.default = FormCard;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
};
