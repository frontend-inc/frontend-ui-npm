'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var components_1 = require("../../../components");
var SOCIAL_PROVIDERS = [
    { label: 'Share to Instagram', value: 'instagram' },
    { label: 'Share to Facebook', value: 'facebook' },
    { label: 'Share to Twitter', value: 'twitter' },
    { label: 'Share to LinkedIn', value: 'linkedin' },
    { label: 'Send by Email', value: 'email' },
];
function ShareButton(_a) {
    var open = _a.open, handleClose = _a.handleClose, url = _a.url;
    var showAlertSuccess = (0, hooks_1.useToast)().showAlertSuccess;
    var handleShareClick = function (platform) {
        var shareUrl = getShareUrl(platform, url);
        if (platform === 'copy') {
            showAlertSuccess('Share link copied to clipboard');
        }
        else {
            window.open(shareUrl, '_blank');
        }
        handleClose();
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
                return '';
        }
    };
    return (react_1.default.createElement(__1.Modal, { open: open, handleClose: handleClose },
        react_1.default.createElement("div", { className: "p-4" },
            react_1.default.createElement("div", { className: "space-y-6" },
                react_1.default.createElement("div", { className: "w-full" },
                    react_1.default.createElement(components_1.Typography, { variant: "subtitle1", textAlign: "center" }, "Share to social media"),
                    react_1.default.createElement(components_1.Typography, { variant: "body2", textAlign: "center" }, "Select your social media platform")),
                react_1.default.createElement("div", { className: "flex justify-center items-center space-x-2" }, SOCIAL_PROVIDERS.map(function (provider, index) { return (react_1.default.createElement(__1.SocialIcon, { key: index, provider: provider.value, handleClick: function () { return handleShareClick(provider.value); }, size: 36 })); }))))));
}
exports.default = ShareButton;
