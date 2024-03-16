"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var SocialLink = function (props) {
    var _a = props || {}, provider = _a.provider, url = _a.url;
    var handleClick = function () {
        if (url.includes('http') || url.includes('www')) {
            window.open(url, '_blank');
            return;
        }
        switch (provider) {
            case 'facebook':
                window.open("https://www.facebook.com/".concat(url), '_blank');
                break;
            case 'instagram':
                window.open("https://www.instagram.com/".concat(url), '_blank');
                break;
            case 'linkedin':
                window.open("https://www.linkedin.com/in/".concat(url), '_blank');
                break;
            case 'twitter':
                window.open("https://www.twitter.com/".concat(url), '_blank');
                break;
            case 'youtube':
                window.open("https://www.youtube.com/".concat(url), '_blank');
                break;
            case 'tiktok':
                window.open("https://www.tiktok.com/".concat(url), '_blank');
                break;
            default:
                break;
        }
    };
    if (!url)
        return null;
    return (react_1.default.createElement(material_1.IconButton, { onClick: handleClick },
        provider === 'facebook' && (react_1.default.createElement(__1.Icon, { name: "Facebook", size: 20 })),
        provider === 'instagram' && (react_1.default.createElement(__1.Icon, { name: "Instagram", size: 20 })),
        provider === 'linkedin' && (react_1.default.createElement(__1.Icon, { name: "Linkedin", size: 20 })),
        provider === 'twitter' && (react_1.default.createElement(__1.Icon, { name: "Twitter", size: 20 })),
        provider === 'youtube' && (react_1.default.createElement(__1.Icon, { name: "Youtube", size: 20 }))));
};
exports.default = SocialLink;
