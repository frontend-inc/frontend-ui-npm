"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var image_1 = __importDefault(require("next/image"));
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
    return (react_1.default.createElement(components_1.Modal, { open: open, handleClose: handleClose, title: resource === null || resource === void 0 ? void 0 : resource.filename, maxWidth: "md", disablePadding: true, buttons: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(material_1.Button, { color: "secondary", variant: "contained", onClick: handleCopyUrlClick }, "Copy URL"),
            react_1.default.createElement(material_1.Button, { variant: "contained", onClick: handleDownloadClick }, "Download")) },
        react_1.default.createElement(material_1.Box, { sx: sx.root },
            IMAGE_REGEX.test(resource === null || resource === void 0 ? void 0 : resource.content_type) && (react_1.default.createElement(image_1.default, { alt: resource === null || resource === void 0 ? void 0 : resource.public_id, src: resource.url, height: resource.height || 500, width: resource.width || 500, layout: "responsive", style: {
                    maxWidth: '640px',
                    maxHeight: '640px',
                    objectFit: 'contain',
                } })),
            VIDEO_REGEX.test(resource === null || resource === void 0 ? void 0 : resource.content_type) && (react_1.default.createElement("video", { src: resource.url, controls: true, muted: true, autoPlay: true, style: sx.video })))));
};
exports.default = AdminMediaShow;
var sx = {
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '500px',
    },
    image: {
        maxHeight: '100vh',
        maxWidth: '100vw',
    },
    video: {
        width: '100%',
        height: 'auto',
        maxHeight: '100%',
    },
};
