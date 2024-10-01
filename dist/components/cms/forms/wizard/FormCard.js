"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var FormCard = function (props) {
    var title = props.title, description = props.description, image = props.image, checkMark = props.checkMark, handleClick = props.handleClick, _a = props.buttonText, buttonText = _a === void 0 ? 'Continue' : _a;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", sx: sx.root, spacing: 2 },
        checkMark && (react_1.default.createElement(material_1.Avatar, { sx: sx.avatar },
            react_1.default.createElement(components_1.Icon, { name: "Check", color: "primary.contrasText" }))),
        image && react_1.default.createElement(components_1.Image, { src: image, height: 320 }),
        react_1.default.createElement(components_1.Heading, { title: title, description: description, textAlign: "center" }),
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
    avatar: {
        height: 64,
        width: 64,
        bgcolor: 'primary.main',
    },
};
