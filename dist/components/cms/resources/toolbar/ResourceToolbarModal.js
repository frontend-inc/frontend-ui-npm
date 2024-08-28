"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var __1 = require("../../../");
var ResourceToolbarModal = function (props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, children = _a.children;
    return (react_1.default.createElement(material_1.Slide, { direction: "down", in: open },
        react_1.default.createElement(material_1.AppBar, { position: "fixed", color: "secondary", sx: sx.appBar },
            react_1.default.createElement(material_1.Toolbar, null,
                react_1.default.createElement(material_2.Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", width: "100%" },
                    react_1.default.createElement(material_2.Box, { sx: sx.iconButton }),
                    children,
                    react_1.default.createElement(material_2.Box, { sx: sx.iconButton },
                        react_1.default.createElement(material_2.IconButton, { onClick: handleClose },
                            react_1.default.createElement(__1.Icon, { name: "X" }))))))));
};
exports.default = ResourceToolbarModal;
var sx = {
    appBar: {
        m: 0,
        top: '-10px',
    },
    iconButton: {
        width: '40px',
        height: '40px',
    },
};
