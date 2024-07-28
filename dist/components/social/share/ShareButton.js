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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var icons_material_1 = require("@mui/icons-material");
var ShareButton = function (props) {
    var url = props.url, _a = props.variant, variant = _a === void 0 ? 'icon' : _a;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var SOCIAL_PROVIDERS = [
        { label: 'Share to Instagram', value: 'instagram' },
        { label: 'Share to Facebook', value: 'facebook' },
        { label: 'Share to Twitter', value: 'twitter' },
        { label: 'Share to LinkedIn', value: 'linkedin' },
        { label: 'Send by Email', value: 'email' },
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
            default:
                return;
        }
    };
    return (react_1.default.createElement(material_1.Box, null,
        variant == 'icon' ? (react_1.default.createElement(material_1.IconButton, { sx: sx.iconButton, onClick: handleClick },
            react_1.default.createElement(icons_material_1.IosShare, { fontSize: "small" }))) : (react_1.default.createElement(material_1.IconButton, { sx: sx.button, onClick: handleClick },
            react_1.default.createElement(icons_material_1.IosShare, { fontSize: "small" }))),
        react_1.default.createElement(__1.Modal, { open: open, handleClose: function () { return setOpen(false); } },
            react_1.default.createElement(material_1.Box, { p: 4 },
                react_1.default.createElement(material_1.Stack, { spacing: 2 },
                    react_1.default.createElement(material_1.Box, { width: "100%" },
                        react_1.default.createElement(material_1.Typography, { sx: sx.text, color: "text.primary", variant: "subtitle1" }, "Share to social media"),
                        react_1.default.createElement(material_1.Typography, { sx: sx.text, color: "text.secondary", variant: "body1" }, "Select your social media platform")),
                    react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.socialButtons }, SOCIAL_PROVIDERS.map(function (provider, index) { return (react_1.default.createElement(__1.SocialIcon, { key: index, provider: provider.value, handleClick: function () { return handleShareClick(provider.value); }, size: 36 })); })))))));
};
exports.default = ShareButton;
var sx = {
    iconButton: {
        border: '1px solid',
        borderColor: 'primary.main',
        color: 'primary.main',
    },
    button: {
        border: '1px solid',
        borderColor: 'primary.main',
        color: 'primary.main',
    },
    socialButtons: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        width: '100%',
        textAlign: 'center',
    },
};
