"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var YouTubeEmbed = function (props) {
    var src = props.src, _a = props.height, height = _a === void 0 ? 315 : _a, _b = props.width, width = _b === void 0 ? 560 : _b;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement("iframe", { width: width, height: height, src: src, frameBorder: "0", allowFullScreen: true, title: "Embedded YouTube video", style: {
                aspectRatio: '16 / 9',
                width: '100%',
            } })));
};
exports.default = YouTubeEmbed;
var sx = {
    root: {
        width: '100%',
    },
};
