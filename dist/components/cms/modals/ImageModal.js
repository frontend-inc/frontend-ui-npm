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
    var _a;
    var _b = props || {}, open = _b.open, handleClose = _b.handleClose, resource = _b.resource, enableGradient = _b.enableGradient;
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.MediaModal, { open: open, handleClose: handleClose },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full min-w-[80vw]') },
            react_1.default.createElement(__1.Image, { alt: resource === null || resource === void 0 ? void 0 : resource.title, aspectRatio: 16 / 9, src: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, enableGradient: enableGradient }))));
};
exports.default = ImageModal;
