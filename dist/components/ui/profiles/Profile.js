"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var Profile = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, image = _a.image, description = _a.description, _b = _a.socialLinks, socialLinks = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(material_1.Box, { sx: sx.container },
        react_1.default.createElement(material_1.Stack, { sx: sx.userContainer, direction: { sm: 'row', xs: 'column' }, spacing: { sm: 4, xs: 0 }, alignItems: "flex-start" },
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, width: '100%', alignItems: "center" },
                react_1.default.createElement(__1.Avatar, { src: image, size: 120, enableGradient: true }),
                react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 0 }, socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.map(function (link, index) { return (react_1.default.createElement(material_1.Box, { p: '2px', key: index },
                    react_1.default.createElement(__1.SocialLink, { url: link.url, size: 28, provider: link.provider }))); }))),
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
                react_1.default.createElement(material_1.Typography, { variant: "caption", color: "text.secondary", sx: sx.username }, label),
                react_1.default.createElement(material_1.Typography, { variant: "h6", color: "text.primary", sx: sx.name }, title),
                react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 }, description && (react_1.default.createElement(__1.ExpandableText, { text: description, color: "text.secondary" })))))));
};
exports.default = Profile;
var sx = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
    },
    containerBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    userContainer: {
        maxWidth: 600,
    },
    button: {
        boxShadow: 0,
        color: 'text.secondary',
    },
    name: {
        width: '100%',
        minWidth: 200,
        textAlign: {
            sm: 'left',
            xs: 'center',
        },
    },
    avatar: {
        width: 110,
        height: 110,
    },
    avatarContainer: {
        bgcolor: 'common.white',
        height: 126,
        width: 126,
        borderRadius: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    username: {
        boxShadow: 0,
        width: '100%',
        display: 'flex',
        justifyContent: {
            sm: 'flex-start',
            xs: 'center',
        },
    },
    buttons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
};
