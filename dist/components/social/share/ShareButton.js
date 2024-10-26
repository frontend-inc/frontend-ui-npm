'use client';
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
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var lucide_react_1 = require("lucide-react");
var core_1 = require("../../core");
var frontend_shadcn_1 = require("frontend-shadcn");
var SOCIAL_PROVIDERS = [
    { label: 'Share to Instagram', value: 'instagram' },
    { label: 'Share to Facebook', value: 'facebook' },
    { label: 'Share to Twitter', value: 'twitter' },
    { label: 'Share to LinkedIn', value: 'linkedin' },
    { label: 'Send by Email', value: 'email' },
];
function ShareButton(_a) {
    var url = _a.url, _b = _a.variant, variant = _b === void 0 ? 'rounded' : _b, _c = _a.size, size = _c === void 0 ? 'small' : _c;
    var _d = (0, react_1.useState)(false), open = _d[0], setOpen = _d[1];
    var showAlertSuccess = (0, hooks_1.useAlerts)().showAlertSuccess;
    var handleClick = function () {
        setOpen(true);
    };
    var handleShareClick = function (platform) {
        setOpen(false);
        var shareUrl = getShareUrl(platform, url);
        if (platform === 'copy') {
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
                return '';
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.IconButton, { onClick: handleClick, className: (0, frontend_shadcn_1.cn)(variant == 'circular' ? 'rounded-full' : 'rounded-lg', 'text-foreground', size === 'large' && 'border border-divider') },
            react_1.default.createElement(lucide_react_1.Share, { className: "w-4 h-4" })),
        react_1.default.createElement(__1.Modal, { open: open, handleClose: function () { return setOpen(false); } },
            react_1.default.createElement("div", { className: "p-4" },
                react_1.default.createElement("div", { className: "space-y-6" },
                    react_1.default.createElement("div", { className: "w-full" },
                        react_1.default.createElement(core_1.Typography, { variant: "subtitle1", textAlign: "center" }, "Share to social media"),
                        react_1.default.createElement(core_1.Typography, { variant: "body2", textAlign: "center" }, "Select your social media platform")),
                    react_1.default.createElement("div", { className: "flex justify-center items-center space-x-2" }, SOCIAL_PROVIDERS.map(function (provider, index) { return (react_1.default.createElement(__1.SocialIcon, { key: index, provider: provider.value, handleClick: function () { return handleShareClick(provider.value); }, size: 36 })); })))))));
}
exports.default = ShareButton;
