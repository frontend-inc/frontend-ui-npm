"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var ShowImageModal = function (props) {
    var _a;
    var resource = (0, frontend_js_1.useList)().resource;
    var _b = props || {}, open = _b.open, handleClose = _b.handleClose, enableGradient = _b.enableGradient;
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.MediaModal, { open: open, handleClose: handleClose },
        react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
            react_1.default.createElement(__1.Image, { src: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, height: 800, enableGradient: enableGradient }))));
};
exports.default = ShowImageModal;
var sx = {
    imageContainer: {
        width: "100%",
        minWidth: 'calc(50vw)',
    }
};
