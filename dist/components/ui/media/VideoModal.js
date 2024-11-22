'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var VideoModal = function (props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, src = _a.src;
    if (!src)
        return null;
    return (react_1.default.createElement(__1.MediaModal, { open: open, handleClose: handleClose },
        react_1.default.createElement("div", { className: "w-full min-w-[80vw]" },
            react_1.default.createElement("video", { src: src, controls: true, height: '100%', width: "100%" }))));
};
exports.default = VideoModal;
