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
var react_social_icons_1 = require("react-social-icons");
var context_1 = require("../../../context");
var SocialLink = function (props) {
    var _a = props || {}, provider = _a.provider, url = _a.url;
    var formatUrl = function (username) {
        switch (provider) {
            case 'facebook':
                return "https://www.facebook.com/".concat(url);
                break;
            case 'instagram':
                return "https://www.instagram.com/".concat(url);
                break;
            case 'linkedin':
                return "https://www.linkedin.com/in/".concat(url);
                break;
            case 'twitter':
                return "https://www.twitter.com/".concat(url);
                break;
            case 'youtube':
                return "https://www.youtube.com/".concat(url);
                break;
            case 'tiktok':
                return "https://www.tiktok.com/".concat(url);
                break;
            default:
                break;
        }
    };
    var handleClick = function () {
        if (url.includes('http') || url.includes('www')) {
            window.open(url, '_blank');
            return;
        }
        else {
            window.open(formatUrl(url), '_blank');
        }
    };
    var _b = (0, react_1.useState)('white'), fgColor = _b[0], setFgColor = _b[1];
    var _c = (0, react_1.useState)('black'), bgColor = _c[0], setBgColor = _c[1];
    var theme = (0, react_1.useContext)(context_1.ThemeContext).theme;
    (0, react_1.useEffect)(function () {
        if (theme) {
            setFgColor(theme.palette.text.main);
            setBgColor('#222222');
        }
    }, [theme]);
    return (react_1.default.createElement(material_1.IconButton, { onClick: handleClick },
        provider === 'facebook' && (react_1.default.createElement(react_social_icons_1.SocialIcon, { network: "facebook", bgColor: bgColor, style: styles })),
        provider === 'instagram' && (react_1.default.createElement(react_social_icons_1.SocialIcon, { network: "instagram", bgColor: bgColor, style: styles })),
        provider === 'linkedin' && (react_1.default.createElement(react_social_icons_1.SocialIcon, { network: "linkedin", bgColor: bgColor, style: styles })),
        provider === 'twitter' && (react_1.default.createElement(react_social_icons_1.SocialIcon, { network: "twitter", bgColor: bgColor, style: styles })),
        provider === 'youtube' && (react_1.default.createElement(react_social_icons_1.SocialIcon, { network: "youtube", bgColor: bgColor, style: styles }))));
};
exports.default = SocialLink;
var styles = {
    height: 32,
    width: 32,
};
