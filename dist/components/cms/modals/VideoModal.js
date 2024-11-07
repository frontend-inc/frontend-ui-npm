'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var VideoModal = function (props) {
    var _a;
    var _b = props || {}, open = _b.open, handleClose = _b.handleClose, resource = _b.resource;
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.MediaModal, { open: open, handleClose: handleClose },
        react_1.default.createElement("div", { className: "w-full min-w-[80vw]" },
            react_1.default.createElement("video", { src: (_a = resource === null || resource === void 0 ? void 0 : resource.video) === null || _a === void 0 ? void 0 : _a.url, controls: true, height: '100%', width: "100%" }))));
};
exports.default = VideoModal;
