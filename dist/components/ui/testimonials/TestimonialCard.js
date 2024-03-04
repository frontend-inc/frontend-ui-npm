"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var helpers_1 = require("../../../helpers");
var icons_material_1 = require("@mui/icons-material");
var icons_material_2 = require("@mui/icons-material");
var Rating_1 = __importDefault(require("@mui/material/Rating"));
var TestimonialCard = function (props) {
    var _a = props || {}, author = _a.author, text = _a.text, _b = _a.rating, rating = _b === void 0 ? 5 : _b, _c = _a.image, image = _c === void 0 ? '' : _c;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { spacing: 0, sx: sx.content },
            react_1.default.createElement(material_1.Box, { sx: sx.testimonial },
                rating && (react_1.default.createElement(Rating_1.default, { readOnly: true, value: rating, icon: react_1.default.createElement(icons_material_2.Star, { sx: sx.rating }), emptyIcon: react_1.default.createElement(icons_material_2.StarBorderOutlined, { sx: sx.emptyRating }) })),
                text && (react_1.default.createElement(material_1.Typography, { sx: sx.text, variant: 'subtitle2', color: "text.primary" },
                    react_1.default.createElement(icons_material_1.FormatQuote, { sx: sx.quote }),
                    (0, helpers_1.truncate)(text, 240)))),
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 2, sx: sx.author },
                react_1.default.createElement(material_1.Avatar, { src: image, sx: sx.avatar }),
                react_1.default.createElement(material_1.Typography, { sx: sx.author, variant: "caption", color: "textSecondary" }, (0, helpers_1.truncate)(author))))));
};
exports.default = TestimonialCard;
var sx = {
    root: {
        width: '300px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    gradient: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'grey.300',
        p: 1,
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    title: {
        textAlign: 'center',
    },
    label: {
        textAlign: 'center',
    },
    content: {
        justifyContent: {
            sm: 'space-between',
            xs: 'space-around'
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
        alignItems: 'center',
        minHeight: '44px',
    },
    text: {
        textAlign: 'center'
    },
    testimonial: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 2
    },
    quote: {
        transform: 'rotateY(180deg)',
    },
    rating: {
        color: 'primary.main',
    },
    emptyRating: {
        color: 'text.secondary',
    },
};
