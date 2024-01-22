"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var NoSearchResults = function () {
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Typography, { mb: 2, variant: "h5", color: "textPrimary" }, "No search results"),
        react_1.default.createElement(material_1.Typography, { variant: "subtitle2", color: "textPrimary" }, "Please try another query.")));
};
exports.default = NoSearchResults;
var sx = {
    root: {
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
};
