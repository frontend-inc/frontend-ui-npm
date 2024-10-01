"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var TestimonialCard = function (props) {
    var _a = props || {}, author = _a.author, text = _a.text, _b = _a.image, image = _b === void 0 ? '' : _b;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.content },
            react_1.default.createElement(material_1.Box, { sx: sx.testimonial }, text && (react_1.default.createElement(components_1.ExpandableText, { color: 'text.secondary', text: text }))),
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.author },
                react_1.default.createElement(components_1.Avatar, { src: image, size: 48 }),
                react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" },
                    "\u2014 ",
                    author)))));
};
exports.default = TestimonialCard;
var sx = {
    root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        width: '100%',
        minHeight: '320px',
        p: 2,
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
    },
    content: {
        width: '100%',
        maxWidth: {
            sm: '600px',
            xs: '100%',
        },
        justifyContent: {
            sm: 'space-between',
            xs: 'space-around',
        },
        alignItems: 'flex-start',
        height: '100%',
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
