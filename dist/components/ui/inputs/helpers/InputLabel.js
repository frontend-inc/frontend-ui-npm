"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var InfoLabel = function (props) {
    var label = props.label, info = props.info;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        label && (react_1.default.createElement(material_1.Typography, { variant: "caption", color: "text.secondary" }, label)),
        info && (react_1.default.createElement(material_1.Tooltip, { title: info },
            react_1.default.createElement(material_1.IconButton, { size: "small" },
                react_1.default.createElement(components_1.Icon, { name: "Info", size: 16, color: "text.secondary" }))))));
};
exports.default = InfoLabel;
var sx = {
    root: {
        minWidth: '110px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
};
