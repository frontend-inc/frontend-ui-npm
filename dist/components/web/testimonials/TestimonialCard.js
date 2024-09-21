"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var helpers_1 = require("../../../helpers");
var components_1 = require("../../../components");
var TestimonialCard = function (props) {
    var _a = props || {}, author = _a.author, text = _a.text, _b = _a.rating, rating = _b === void 0 ? 5 : _b, _c = _a.image, image = _c === void 0 ? '' : _c, _d = _a.size, size = _d === void 0 ? 'small' : _d;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.content },
            react_1.default.createElement(material_1.Box, { sx: sx.testimonial },
                react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, sx: sx.text },
                    text && (react_1.default.createElement(material_1.Typography, { variant: 'subtitle2', color: "text.primary" }, (0, helpers_1.truncate)(text, 240))),
                    author && (react_1.default.createElement(material_1.Typography, { sx: sx.author, variant: size == 'small' ? 'caption' : 'body1', color: "text.secondary" },
                        "\u2014 ",
                        author)))),
            react_1.default.createElement(components_1.Avatar, { src: image, size: 64 }))));
};
exports.default = TestimonialCard;
var sx = {
    root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        minHeight: '200px'
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
        p: 1,
        borderRadius: 1,
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
        alignItems: 'center',
        height: '100%',
    },
    avatar: {
        height: 64,
        width: 64,
    },
    author: {
        color: 'text.secondary',
    },
    text: {
        textAlign: 'center',
    },
    testimonial: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
};
