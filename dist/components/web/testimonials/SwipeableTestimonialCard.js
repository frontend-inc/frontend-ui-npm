"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var SwipeableTestimonialCard = function (props) {
    var _a = props || {}, author = _a.author, avatar = _a.avatar, text = _a.text, _b = _a.image, image = _b === void 0 ? '' : _b;
    return (react_1.default.createElement(material_1.Stack, { direction: { sm: 'row', xs: 'column' }, sx: sx.root },
        react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.content },
            react_1.default.createElement(material_1.Box, { sx: sx.testimonial }, text && (react_1.default.createElement(__1.ExpandableText, { color: 'text.secondary', text: text, variant: "h4" }))),
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.author },
                react_1.default.createElement(__1.Avatar, { src: avatar, size: 48 }),
                react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" },
                    "\u2014 ",
                    author))),
        image && (react_1.default.createElement(material_1.Box, { sx: sx.image },
            react_1.default.createElement(__1.Image, { src: image, height: 320, disableBorderRadius: true })))));
};
exports.default = SwipeableTestimonialCard;
var sx = {
    root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        minHeight: '320px',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
    },
    content: {
        p: 3,
        width: {
            sm: '60%',
            xs: '100%'
        },
        justifyContent: {
            sm: 'space-between',
            xs: 'space-around',
        },
        alignItems: 'flex-start',
        height: '100%',
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: {
            sm: '40%',
            xs: '100%'
        },
    },
    avatar: {
        height: 48,
        width: 48,
    },
    text: {
        textAlign: 'left',
    },
    testimonial: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    author: {
        width: '100%',
        alignItems: 'center'
    }
};
