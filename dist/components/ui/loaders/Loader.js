"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var Loader = function (props) {
    var loading = props.loading;
    if (!loading)
        return null;
    return (react_1.default.createElement(material_1.Stack, { direction: "column", sx: sx.root },
        react_1.default.createElement(material_2.CircularProgress, { disableShrink: true, color: "primary", size: 50, thickness: 4 })));
};
exports.default = Loader;
var sx = {
    root: {
        height: '100%',
        minHeight: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circularProgress: {},
};
