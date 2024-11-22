'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var ImageModal = function (props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, title = _a.title, src = _a.src, enableGradient = _a.enableGradient;
    if (!src)
        return null;
    return (react_1.default.createElement(__1.MediaModal, { open: open, handleClose: handleClose },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full min-w-[80vw]') },
            react_1.default.createElement(__1.Image, { alt: title || 'Image', aspectRatio: 16 / 9, src: src, enableGradient: enableGradient }))));
};
exports.default = ImageModal;
