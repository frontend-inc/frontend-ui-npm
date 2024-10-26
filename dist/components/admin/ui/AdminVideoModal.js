'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var core_1 = require("../../core");
var lucide_react_1 = require("lucide-react");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var VideoModal = function (props) {
    var open = props.open, src = props.src, _a = props.title, title = _a === void 0 ? '' : _a, handleClose = props.handleClose, _b = props.enableCopy, enableCopy = _b === void 0 ? false : _b, _c = props.enableDownload, enableDownload = _c === void 0 ? false : _c;
    var showAlertSuccess = (0, hooks_1.useAlerts)().showAlertSuccess;
    var handleCopyUrlClick = function () {
        (0, copy_to_clipboard_1.default)(src);
        showAlertSuccess('Asset URL copied to clipboard');
    };
    var handleDownloadClick = function () {
        window.open(src, '_blank');
    };
    if (title.length > 0) {
        //@ts-ignore
        title = src === null || src === void 0 ? void 0 : src.split('/').pop();
    }
    return (react_1.default.createElement("div", { className: "dark" },
        react_1.default.createElement(__1.Modal, { open: open, handleClose: handleClose, maxWidth: "md", title: title, buttons: react_1.default.createElement(react_1.default.Fragment, null,
                enableCopy && (react_1.default.createElement(core_1.Button, { color: "secondary", startIcon: react_1.default.createElement(lucide_react_1.Link, null), onClick: handleCopyUrlClick }, "Copy URL")),
                enableDownload && (react_1.default.createElement(core_1.Button, { startIcon: react_1.default.createElement(lucide_react_1.Download, null), onClick: handleDownloadClick }, "Download"))) },
            react_1.default.createElement("div", { className: "flex flex-row justify-center items-center w-full h-full" },
                react_1.default.createElement("video", { src: src, controls: true, muted: true, autoPlay: true })))));
};
exports.default = VideoModal;
