"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var VimeoEmbed = function (props) {
    var src = props.src;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement("iframe", { src: src, width: "800px", height: "450px", style: {
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
            }, frameBorder: "0" })));
};
exports.default = VimeoEmbed;
var sx = {
    root: {
        paddingBottom: '56.25%',
        maxWidth: '100%',
        position: 'relative',
    },
};
