"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var image_1 = __importDefault(require("next/image"));
var NoImage_1 = __importDefault(require("./NoImage"));
var LOGO_WIDTH = 100;
var LOGO_HEIGHT = 50;
var Logo = function (props) {
    var _a = props || {}, src = _a.src, _b = _a.width, width = _b === void 0 ? LOGO_WIDTH : _b, _c = _a.height, height = _c === void 0 ? LOGO_HEIGHT : _c, handleClick = _a.handleClick;
    return (react_1.default.createElement(material_1.Button, { disableRipple: true, sx: sx.root, onClick: handleClick }, (src === null || src === void 0 ? void 0 : src.length) > 1 ? (react_1.default.createElement(image_1.default, { src: src, alt: "logo", width: width ? Number(width) : LOGO_WIDTH, height: height ? Number(height) : LOGO_HEIGHT, 
        //@ts-ignore
        style: styles.image })) : (react_1.default.createElement(NoImage_1.default, { width: width ? Number(width) : LOGO_WIDTH, height: height ? Number(height) : LOGO_HEIGHT }))));
};
exports.default = Logo;
var sx = {
    root: {
        width: '100%',
        minHeight: 'auto',
        minWidth: 'auto',
        '&:hover': {
            background: 'transparent',
        },
    },
};
var styles = {
    image: {
        objectFit: 'contain',
    },
};
