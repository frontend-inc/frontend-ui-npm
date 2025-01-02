'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var sonner_1 = require("sonner");
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var image_1 = __importDefault(require("next/image"));
var ImageModal = function (props) {
    var open = props.open, image = props.image, _a = props.title, title = _a === void 0 ? '' : _a, handleClose = props.handleClose;
    var handleCopyUrlClick = function () {
        (0, copy_to_clipboard_1.default)(image === null || image === void 0 ? void 0 : image.url);
        (0, sonner_1.toast)('Asset URL copied to clipboard');
    };
    var handleDownloadClick = function () {
        window.open(image === null || image === void 0 ? void 0 : image.url, '_blank');
    };
    return (react_1.default.createElement(components_1.Modal, { open: open, handleClose: handleClose, title: title, maxWidth: "md", buttons: react_1.default.createElement("div", { className: "flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:sspace-x-2" },
            react_1.default.createElement(react_2.Button, { onPress: handleCopyUrlClick }, "Copy URL"),
            react_1.default.createElement(react_2.Button, { onPress: handleDownloadClick, startContent: react_1.default.createElement(components_1.RemixIcon, { name: "ri-download-2-line" }) }, "Download")) },
        react_1.default.createElement(image_1.default, { alt: "Image", src: image === null || image === void 0 ? void 0 : image.url, height: 1200, width: 1200, style: {
                width: '100%',
                objectFit: 'contain',
            }, layout: "responsive" })));
};
exports.default = ImageModal;
