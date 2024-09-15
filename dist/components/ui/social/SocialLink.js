"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
//@ts-ignore
var react_social_icons_1 = require("react-social-icons");
var material_2 = require("@mui/material");
var lodash_1 = require("lodash");
var SocialLink = function (props) {
    var _a = props || {}, provider = _a.provider, _b = _a.size, size = _b === void 0 ? 32 : _b, url = _a.url, _c = _a.color, color = _c === void 0 ? 'primary.contrastText' : _c;
    var formatUrl = function (username) {
        switch (provider) {
            case 'facebook':
                return "https://www.facebook.com/".concat(username);
            case 'instagram':
                return "https://www.instagram.com/".concat(username);
            case 'linkedin':
                return "https://www.linkedin.com/in/".concat(username);
            case 'twitter':
                return "https://www.twitter.com/".concat(username);
            case 'youtube':
                return "https://www.youtube.com/".concat(username);
            case 'tiktok':
                return "https://www.tiktok.com/".concat(username);
            case 'github':
                return "https://www.github.com/".concat(username);
            case 'pinterest':
                return "https://www.pinterest.com/".concat(username);
            case 'snapchat':
                return "https://www.snapchat.com/add/".concat(username);
            case 'whatsapp':
                return "https://wa.me/".concat(username);
            case 'email':
                return "mailto:".concat(username);
            default:
                break;
        }
    };
    var handleClick = function () {
        if (!url)
            return;
        if (url.includes('http') || url.includes('www')) {
            window.open(url, '_blank');
            return;
        }
        else if (provider == 'whatsapp' && url.includes('+')) {
            window.open("https://wa.me/".concat(url), '_blank');
            return;
        }
        else if (provider == 'email') {
            window.open("mailto:".concat(url), '_blank');
            return;
        }
        else {
            window.open(formatUrl(url), '_blank');
        }
    };
    var theme = (0, material_2.useTheme)();
    var bgColor = (0, lodash_1.get)(theme, "palette.".concat(color));
    return (react_1.default.createElement(material_1.IconButton, { sx: sx.iconButton, size: "small", onClick: handleClick },
        react_1.default.createElement(react_social_icons_1.SocialIcon, { bgColor: bgColor, network: provider, style: {
                height: size,
                width: size,
            } })));
};
exports.default = SocialLink;
var sx = {
    iconButton: {
        p: '2px',
    },
};
