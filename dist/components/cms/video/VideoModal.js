"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var lucide_react_1 = require("lucide-react");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var VideoModal = function (props) {
    var open = props.open, src = props.src, _a = props.title, title = _a === void 0 ? '' : _a, handleClose = props.handleClose, _b = props.enableCopy, enableCopy = _b === void 0 ? false : _b, _c = props.enableDownload, enableDownload = _c === void 0 ? false : _c;
    var theme = (0, react_1.useContext)(context_1.ThemeContext).theme;
    var showAlertSuccess = (0, hooks_1.useAlerts)().showAlertSuccess;
    var handleCopyUrlClick = function () {
        (0, copy_to_clipboard_1.default)(src);
        showAlertSuccess('Asset URL copied to clipboard');
    };
    var handleDownloadClick = function () {
        window.open(src, '_blank');
    };
    //@ts-ignore
    if (!(title === null || title === void 0 ? void 0 : title.length) > 0) {
        title = src === null || src === void 0 ? void 0 : src.split('/').pop();
    }
    return (react_1.default.createElement(context_1.ThemeProvider, { muiTheme: theme, bgcolor: "#000000" },
        react_1.default.createElement(__1.Modal, { fullScreen: true, open: open, handleClose: handleClose, maxWidth: "md", title: title, actions: react_1.default.createElement(react_1.default.Fragment, null,
                enableCopy && (react_1.default.createElement(material_1.Button, { color: 'secondary', variant: "contained", startIcon: react_1.default.createElement(lucide_react_1.Link, null), onClick: handleCopyUrlClick }, "Copy URL")),
                enableDownload && (react_1.default.createElement(material_1.Button, { color: "primary", variant: "contained", startIcon: react_1.default.createElement(lucide_react_1.Download, null), onClick: handleDownloadClick }, "Download"))) },
            react_1.default.createElement(material_1.Box, { sx: sx.root },
                react_1.default.createElement("video", { src: src, controls: true, muted: true, autoPlay: true })))));
};
exports.default = VideoModal;
var sx = {
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
};
