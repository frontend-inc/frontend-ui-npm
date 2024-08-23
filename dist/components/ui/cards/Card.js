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
var Card = function (props) {
    var _a = props || {}, ref = _a.ref, label = _a.label, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, _b = _a.height, height = _b === void 0 ? 240 : _b, _c = _a.slots, slots = _c === void 0 ? {
        item: {},
        image: {}
    } : _c;
    return (react_1.default.createElement(material_1.Stack, __assign({ ref: ref, spacing: 0, sx: __assign(__assign({}, sx.root), { width: '100%', minHeight: height + 80 }) }, slots.item),
        react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
            react_1.default.createElement(__1.Image, __assign({ src: image, height: height, alt: primary, label: label, handleClick: handleClick }, slots.image))),
        react_1.default.createElement(material_1.Stack, { spacing: 0, sx: sx.cardContent },
            react_1.default.createElement(material_1.Box, { sx: sx.content },
                react_1.default.createElement(material_1.Typography, { sx: sx.title, color: "text.primary", variant: "subtitle1" }, primary),
                secondary && (react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "body2" }, secondary))),
            react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "space-between" },
                actions,
                secondaryAction))));
};
exports.default = Card;
var sx = {
    root: {
        overflow: 'hidden',
        borderRadius: 1,
        width: '100%',
        minWidth: 280,
        bgcolor: 'background.default',
        transition: 'box-shadow 0.3s',
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
        bgcolor: 'background.default',
    },
    content: {
        height: '100%',
    },
    title: {
        width: '100%',
    },
    user: {},
};
