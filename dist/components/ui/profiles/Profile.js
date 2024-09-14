"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var Profile = function (props) {
    var src = props.src, disableRing = props.disableRing, buttons = props.buttons, title = props.title, description = props.description, label = props.label, _a = props.socialLinks, socialLinks = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(material_1.Stack, { direction: { sm: 'row', xs: 'column' }, spacing: 2 },
        react_1.default.createElement(material_1.Box, { sx: sx.avatar },
            react_1.default.createElement(__1.ProfileImage, { disableRing: disableRing, src: src, size: 200 })),
        react_1.default.createElement(material_1.Box, { sx: sx.details },
            react_1.default.createElement(__1.ProfileInfo, { title: title, description: description, label: label, socialLinks: socialLinks }),
            buttons && buttons)));
};
exports.default = Profile;
var sx = {
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    details: {
        maxWidth: '440px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
};
