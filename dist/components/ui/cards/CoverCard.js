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
var CoverCard = function (props) {
    var _a = props || {}, label = _a.label, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, _b = _a.height, height = _b === void 0 ? 340 : _b, _c = _a.slots, slots = _c === void 0 ? {
        item: {},
        image: {}
    } : _c;
    return (react_1.default.createElement(__1.LightDarkMode, { mode: "dark" },
        react_1.default.createElement(material_1.Stack, __assign({ spacing: 1, sx: sx.root }, slots.item),
            react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleClick },
                react_1.default.createElement(__1.Image, __assign({ label: label, src: image, height: height, alt: primary }, slots.image))),
            react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.cover },
                react_1.default.createElement(material_1.Stack, { sx: sx.fullWidth, spacing: 1, direction: 'row', alignItems: "center" },
                    react_1.default.createElement(material_1.Box, { sx: sx.contentContainer },
                        react_1.default.createElement(material_1.Stack, { sx: sx.content, direction: "column", spacing: 0 },
                            react_1.default.createElement(material_1.Box, { sx: sx.fullWidth },
                                react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "subtitle1" }, primary),
                                react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "body2" }, secondary),
                                react_1.default.createElement(material_1.Stack, { direction: "row", sx: sx.buttons },
                                    actions,
                                    secondaryAction)))))))));
};
exports.default = CoverCard;
var sx = {
    root: {
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden',
        width: '100%',
        borderRadius: 1,
    },
    cover: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 1,
        p: 1,
    },
    description: {
        maxWidth: '320px',
    },
    button: {
        bgcolor: 'common.white',
        color: 'common.black',
        '&:hover': {
            color: 'common.black',
            bgcolor: 'common.white',
            opacity: 0.9,
        },
    },
    fullWidth: {
        width: '100%',
    },
    contentContainer: {
        px: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    content: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
};
