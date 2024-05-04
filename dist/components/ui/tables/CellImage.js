"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var CellImage = function (props) {
    var value = props.value, _a = props.size, size = _a === void 0 ? 64 : _a, handleClick = props.handleClick;
    var src = (0, helpers_1.imageFromVideoUrl)(value === null || value === void 0 ? void 0 : value.url);
    return (react_1.default.createElement(material_1.CardActionArea, { sx: { p: 0 }, onClick: handleClick },
        react_1.default.createElement(components_1.Image, { disableBorder: true, disableBorderRadius: true, src: src, width: size, height: size, alt: 'Image' })));
};
exports.default = CellImage;
