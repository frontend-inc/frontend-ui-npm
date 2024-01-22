"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var DesktopFilters = function (props) {
    var children = (props || {}).children;
    return (react_1.default.createElement(material_1.Hidden, { smDown: true },
        react_1.default.createElement(material_1.Stack, { spacing: 2, direction: "row", sx: sx.root }, children)));
};
exports.default = DesktopFilters;
var sx = {
    root: {
        width: "100%",
        overflowX: "scroll",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
};
