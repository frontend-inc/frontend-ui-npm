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
var PDP = function (props) {
    var _a = props || {}, label = _a.label, image = _a.image, primary = _a.primary, secondary = _a.secondary, addToCart = _a.addToCart, price = _a.price, compareAtPrice = _a.compareAtPrice, description = _a.description, actions = _a.actions, secondaryAction = _a.secondaryAction, _b = _a.slots, slots = _b === void 0 ? {
        image: {},
        content: {},
    } : _b;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 },
        secondaryAction,
        react_1.default.createElement(material_1.Box, { sx: sx.root },
            react_1.default.createElement(material_1.Stack, { sx: sx.container, direction: {
                    md: 'row',
                    xs: 'column',
                }, spacing: 4 },
                react_1.default.createElement(material_1.Stack, { spacing: 2, direction: "column", sx: sx.leftPanel },
                    react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
                        react_1.default.createElement(__1.Image, __assign({ src: image, alt: primary, height: 400, label: label }, slots.image))),
                    actions),
                react_1.default.createElement(material_1.Stack, __assign({ spacing: 2, sx: sx.rightPanel }, slots.content),
                    react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h4" }, primary),
                    react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
                        react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "subtitle1" }, price),
                        compareAtPrice && (react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "subtitle2", sx: sx.compareAtPrice }, compareAtPrice))),
                    secondary,
                    addToCart,
                    react_1.default.createElement(__1.ExpandableText, { text: description || '' }))))));
};
exports.default = PDP;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rootBorder: {
        overflow: 'hidden',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
    },
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: {
            md: 'flex-start',
            xs: 'center',
        },
    },
    compareAtPrice: {
        textDecoration: 'line-through',
    },
    image: {
        height: {
            sm: 256,
            xs: 180,
        },
        width: {
            sm: 256,
            xs: 180,
        },
    },
    header: {
        width: '100%',
        textAlign: 'center',
    },
    leftPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightPanel: {
        width: {
            sm: '100%',
            xs: '100%',
        },
        maxWidth: {
            sm: 500,
            xs: '100%',
        },
    },
    contentBorder: {
        p: 2,
    },
    caption: {
        color: 'text.secondary',
    },
    buttons: {
        width: '100%',
    },
    imageContainer: {
        borderRadius: 1,
        width: '100%',
        minWidth: {
            sm: 420,
            xs: '100%',
        },
        maxWidth: {
            sm: 640,
            xs: '100%',
        }
    },
    description: {
        whiteSpace: 'pre-line',
    },
};
