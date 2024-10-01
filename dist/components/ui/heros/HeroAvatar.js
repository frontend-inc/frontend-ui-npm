"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var HeroAvatar = function (props) {
    var _a = props || {}, image = _a.image, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, _b = _a.slots, slots = _b === void 0 ? {
        image: {},
    } : _b;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2, direction: "column", justifyContent: "center" },
        react_1.default.createElement(material_1.Stack, { sx: sx.buttons, direction: { sm: 'row', xs: 'column' }, spacing: 1 }, secondaryAction),
        react_1.default.createElement(material_1.Box, { sx: sx.root },
            react_1.default.createElement(material_1.Stack, { sx: sx.container, direction: { sm: 'row', xs: 'column' }, spacing: 4 },
                react_1.default.createElement(material_1.Stack, { sx: sx.leftPanel, spacing: 2, direction: "column" },
                    react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                        react_1.default.createElement(__1.AvatarImage, __assign({ image: image, alt: primary, height: 200 }, slots.image))),
                    actions),
                react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.content },
                    react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h4" }, primary),
                    secondary)))));
};
exports.default = HeroAvatar;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    rootBorder: {
        overflow: 'hidden',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        border: '1px solid',
        borderColor: 'divider',
    },
    avatar: {
        height: '200px',
        width: '200px',
        backgroundImage: 'linear-gradient(45deg, #888888, #222222,#000000)',
    },
    gradient: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    overlay: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgb(0,0,0,0.5)',
        },
    },
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: {
            sm: 'flex-start',
            xs: 'center',
        },
    },
    leftPanel: {
        width: {
            sm: 200,
            xs: '100%',
        },
    },
    leftPanelBorder: {
        pb: 2,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        textAlign: 'center',
    },
    content: {
        width: '100%',
    },
    contentBorder: {
        p: 2,
    },
    text: {
        width: '100%',
        whiteSpace: 'pre-line',
    },
    caption: {
        color: 'text.secondary',
    },
    link: {
        cursor: 'pointer',
        color: 'text.secondary',
    },
    socialUrls: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttons: {
        width: '100%',
        justifyContent: {
            sm: 'flex-end',
            xs: 'center',
        },
    },
};
