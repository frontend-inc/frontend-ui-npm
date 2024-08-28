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
var HeroSnippet = function (props) {
    var _a = props || {}, label = _a.label, image = _a.image, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, disableImage = _a.disableImage, circular = _a.circular, _b = _a.slots, slots = _b === void 0 ? {
        image: {},
    } : _b;
    return (react_1.default.createElement(material_1.Paper, { elevation: 0, sx: sx.paper },
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0, sx: sx.header },
            !disableImage && (react_1.default.createElement(material_1.Box, { sx: sx.imageContainer }, circular ? (react_1.default.createElement(__1.AvatarImage, __assign({ label: label, src: image, height: 180, alt: primary }, slots.image))) : (react_1.default.createElement(__1.Image, __assign({ label: label, src: image, height: 220, alt: primary }, slots.image))))),
            react_1.default.createElement(material_1.Stack, { spacing: 0.5, direction: "column", p: 2, width: "100%" },
                actions,
                react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "text.primary" }, primary),
                secondary))));
};
exports.default = HeroSnippet;
var sx = {
    paper: {},
    container: {
        borderRadius: 1,
        overflow: 'hidden',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: {
            md: 'flex-start',
            xs: 'center',
        },
    },
    header: {
        width: '100%',
    },
    imageContainer: {
        width: '100%',
        borderRadius: function (theme) {
            return "".concat(theme.shape.borderRadius, "px ").concat(theme.shape.borderRadius, "px 0 0");
        },
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        display: 'flex',
        justifyContent: {
            xs: 'center',
            sm: 'flex-start',
        },
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        bgcolor: 'rgb(0,0,0,0.5)',
    },
};
