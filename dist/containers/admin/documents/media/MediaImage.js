"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var MediaImage = function (props) {
    var image = props.image, handleRemove = props.handleRemove;
    return (react_1.default.createElement(material_1.Card, { sx: sx.root },
        react_1.default.createElement(components_1.Image, { disableBorderRadius: true, height: 160, width: 160, src: image === null || image === void 0 ? void 0 : image.url, alt: 'media' }),
        (image === null || image === void 0 ? void 0 : image.url) && (react_1.default.createElement(material_1.IconButton, { size: "small", sx: sx.iconButton, onClick: handleRemove },
            react_1.default.createElement(components_1.Icon, { name: "X" })))));
};
exports.default = MediaImage;
var sx = {
    root: {
        borderRadius: 1,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        p: 0,
        width: 160,
        height: 160,
        position: 'relative',
    },
    iconButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        opacity: 0.5,
        bgcolor: 'background.main',
        color: 'common.white',
        '&:hover': {
            opacity: 1,
            bgcolor: 'background.main',
        },
    },
    header: {
        py: 0,
        px: 1,
    },
};
