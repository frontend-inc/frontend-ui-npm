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
var __1 = require("../../..");
var ProductCard = function (props) {
    var _a = props || {}, ref = _a.ref, label = _a.label, primary = _a.primary, secondary = _a.secondary, price = _a.price, compareAtPrice = _a.compareAtPrice, actions = _a.actions, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, _b = _a.height, height = _b === void 0 ? 240 : _b, addToCart = _a.addToCart, _c = _a.slots, slots = _c === void 0 ? {
        item: {},
        image: {},
    } : _c;
    return (react_1.default.createElement(material_1.Stack, __assign({ ref: ref, spacing: 0, sx: __assign(__assign({}, sx.root), { width: '100%', minHeight: height + 80 }) }, slots.item),
        react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
            react_1.default.createElement(__1.Image, __assign({ src: image, height: height, alt: primary, label: label, handleClick: handleClick }, slots.image))),
        react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.cardContent },
            react_1.default.createElement(material_1.Box, { sx: sx.content },
                react_1.default.createElement(material_1.Typography, { sx: sx.title, color: "text.primary", variant: "subtitle1" }, primary),
                react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
                    react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "caption" }, price),
                    compareAtPrice && (react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "caption", sx: sx.compareAtPrice }, compareAtPrice))),
                secondary && (react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "body2" }, secondary))),
            addToCart,
            react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "space-between" },
                actions,
                secondaryAction))));
};
exports.default = ProductCard;
var sx = {
    root: {
        overflow: 'hidden',
        borderRadius: 1,
        width: '100%',
        minWidth: 280,
        transition: 'box-shadow 0.3s',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        '&:hover': {
            boxShadow: 2,
        },
    },
    imageContainer: {
        height: 230,
        minHeight: 230,
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    cardContent: {
        p: 1,
        width: '100%',
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'space-between',
    },
    content: {
        height: '100%',
    },
    title: {
        width: '100%',
    },
    compareAtPrice: {
        textDecoration: 'line-through',
    },
    user: {},
};
