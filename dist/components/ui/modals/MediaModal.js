"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var MediaModal = function (props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, children = _a.children;
    return (react_1.default.createElement(material_1.Backdrop, { open: open, onClick: handleClose, sx: sx.root },
        react_1.default.createElement(material_1.Box, { sx: sx.imageContainer }, children),
        react_1.default.createElement(material_1.IconButton, { sx: sx.closeButton, onClick: handleClose },
            react_1.default.createElement(components_1.Icon, { name: "X", color: 'common.white' }))));
};
exports.default = MediaModal;
var sx = {
    root: {
        zIndex: 9999,
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        bgcolor: 'rgb(0,0,0,0.5)',
    },
    imageContainer: {
        borderRadius: 1,
        overflow: 'hidden',
        maxWidth: 'calc(100vw - 50px)',
        maxHeight: 'calc(100vh - 50px)',
        position: 'relative',
        zIndex: 999
    }
};
