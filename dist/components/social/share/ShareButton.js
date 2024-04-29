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
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var ShareButton = function (props) {
    var url = props.url;
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var SOCIAL_PLATFORMS = [
        { label: 'Share to Instagram', value: 'instagram' },
        { label: 'Share to Facebook', value: 'facebook' },
        { label: 'Share to Twitter', value: 'twitter' },
        { label: 'Share to LinkedIn', value: 'linkedin' },
        { label: 'Send by Email', value: 'email' },
        { label: 'Copy share URL', value: 'copy' },
    ];
    var showAlertSuccess = (0, hooks_1.useAlerts)().showAlertSuccess;
    var handleClick = function () {
        setOpen(true);
    };
    var handleShareClick = function (platform) {
        setOpen(false);
        var shareUrl = getShareUrl(platform, url);
        if (platform == 'copy') {
            showAlertSuccess('Share link copied to clipboard');
        }
        else {
            window.open(shareUrl, '_blank');
        }
    };
    var getShareUrl = function (platform, url) {
        switch (platform) {
            case 'instagram':
                return "https://www.instagram.com/?url=".concat(url);
            case 'facebook':
                return "https://www.facebook.com/sharer/sharer.php?u=".concat(url);
            case 'twitter':
                return "https://twitter.com/intent/tweet?url=".concat(url);
            case 'pinterest':
                return "https://pinterest.com/pin/create/button/?url=".concat(url);
            case 'linkedin':
                return "https://www.linkedin.com/shareArticle?mini=true&url=".concat(url);
            case 'email':
                return "mailto:?subject=Check out this product&body=".concat(url);
            case 'copy':
                (0, copy_to_clipboard_1.default)(url);
                showAlertSuccess('Share link copied to clipboard');
                return;
            default:
                return;
        }
    };
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.IconButton, { sx: sx.iconButton, onClick: handleClick },
            react_1.default.createElement(__1.Icon, { name: "Share" })),
        react_1.default.createElement(__1.Modal, { open: open, handleClose: function () { return setOpen(false); }, title: "Share" },
            react_1.default.createElement(material_1.List, null, SOCIAL_PLATFORMS.map(function (platform, index) { return (react_1.default.createElement(material_1.ListItem, { key: index },
                react_1.default.createElement(material_1.ListItemButton, { onClick: function (ev) { return handleShareClick(platform.value); } },
                    react_1.default.createElement(material_1.ListItemIcon, null,
                        react_1.default.createElement(__1.SocialLink, { provider: platform.value })),
                    react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1" }, platform.label) })))); })))));
};
exports.default = ShareButton;
var sx = {
    iconButton: {
        bgcolor: 'tertiary.main',
    },
};
