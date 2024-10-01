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
var Spotlight = function (props) {
    var _a = props || {}, image = _a.image, label = _a.label, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, _b = _a.logos, logos = _b === void 0 ? [] : _b, _c = _a.styles, styles = _c === void 0 ? {} : _c, _d = _a.slots, slots = _d === void 0 ? {
        image: {},
    } : _d;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), styles) },
        react_1.default.createElement(__1.Container, { maxWidth: "md" },
            react_1.default.createElement(material_1.Stack, { sx: sx.container, spacing: 6 },
                react_1.default.createElement(material_1.Stack, { sx: sx.header, spacing: 2 },
                    label && (react_1.default.createElement(material_1.Box, null,
                        react_1.default.createElement(__1.Label, { label: label }))),
                    react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h1", sx: sx.header }, primary),
                    secondary && secondary,
                    actions && actions,
                    (logos === null || logos === void 0 ? void 0 : logos.length) > 0 && react_1.default.createElement(__1.BrandLogos, { logos: logos })),
                react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                    react_1.default.createElement(__1.Image, __assign({ disableBorderRadius: true, src: image, alt: primary, height: 600, objectFit: "contain" }, slots.image)))))));
};
exports.default = Spotlight;
var sx = {
    root: {
        height: 'auto',
        width: '100%',
    },
    container: {
        px: 2,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
        overflow: 'hidden',
        borderRadius: 2,
        maxHeight: 640,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logos: {
        p: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 64,
        width: 64,
    },
};
