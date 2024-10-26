'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var core_1 = require("../../../components/core");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var AdminMediaShow = function (props) {
    var open = props.open, resource = props.resource, handleClose = props.handleClose;
    var showAlertSuccess = (0, hooks_1.useAlerts)().showAlertSuccess;
    var handleCopyUrlClick = function () {
        (0, copy_to_clipboard_1.default)(resource.url);
        showAlertSuccess('Asset URL copied to clipboard');
    };
    var handleDownloadClick = function () {
        window.open(resource.url, '_blank');
    };
    var VIDEO_REGEX = /video/;
    var IMAGE_REGEX = /image/;
    return (react_1.default.createElement(components_1.Modal, { open: open, handleClose: handleClose, maxWidth: "md", buttons: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(core_1.Button, { color: "secondary", onClick: handleCopyUrlClick }, "Copy URL"),
            react_1.default.createElement(core_1.Button, { onClick: handleDownloadClick }, "Download")) },
        react_1.default.createElement("div", { className: "w-full h-full" },
            IMAGE_REGEX.test(resource === null || resource === void 0 ? void 0 : resource.content_type) && (react_1.default.createElement(components_1.Image, { alt: resource === null || resource === void 0 ? void 0 : resource.public_id, src: resource.url, aspectRatio: 4 / 3 })),
            VIDEO_REGEX.test(resource === null || resource === void 0 ? void 0 : resource.content_type) && (react_1.default.createElement("video", { src: resource.url, controls: true, muted: true, autoPlay: true })))));
};
exports.default = AdminMediaShow;
