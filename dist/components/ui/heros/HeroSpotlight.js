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
var HeroSpotlight = function (props) {
    var _a = props || {}, image = _a.image, label = _a.label, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, children = _a.children, _b = _a.slots, slots = _b === void 0 ? {
        image: {}
    } : _b;
    return (react_1.default.createElement(material_1.Box, { sx: sx.gradient },
        react_1.default.createElement(__1.Container, { maxWidth: "md" },
            react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 4 },
                actions,
                react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h1", sx: sx.header }, primary),
                secondaryAction,
                secondary,
                children,
                react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                    react_1.default.createElement(__1.Image, __assign({ src: image, alt: primary, height: 500, label: label, objectFit: 'contain' }, slots.image)))))));
};
exports.default = HeroSpotlight;
var sx = {
    root: {
        px: 2,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
        pb: 2,
    },
    header: {
        maxWidth: 600,
        width: '100%',
        textAlign: 'center',
    },
    content: {
        width: '100%',
        maxWidth: {
            sm: 500,
            xs: '100%',
        },
    },
    text: {
        width: '100%',
        whiteSpace: 'pre-line',
    },
    caption: {
        color: 'text.secondary',
    },
    buttons: {
        justifyContent: 'center',
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
    imageContainer: {
        width: '100%',
        borderRadius: 1,
        boxShadow: 6,
    },
    gradient: {
        pt: 8,
        pb: 0,
        height: 'auto',
        width: '100%',
        background: function (theme) { return "radial-gradient(ellipse 100% 95% at center bottom, ".concat(theme.palette.primary.main, ", rgba(0, 0, 0, 1))"); }
    },
};
