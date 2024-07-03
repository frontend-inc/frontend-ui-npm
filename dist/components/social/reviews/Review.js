"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var moment_1 = __importDefault(require("moment"));
var Review = function (props) {
    var _a;
    var review = props.review;
    return (react_1.default.createElement(material_1.ListItem, { sx: sx.listItem },
        react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
            react_1.default.createElement(components_1.UserAvatar, { user: review === null || review === void 0 ? void 0 : review.user })),
        react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Rating, { readOnly: true, sx: sx.rating, value: review.rating }), secondary: react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
                react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, review === null || review === void 0 ? void 0 : review.title),
                react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary", sx: sx.reviewText }, review.body),
                react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary", sx: sx.caption }, "@".concat((_a = review === null || review === void 0 ? void 0 : review.user) === null || _a === void 0 ? void 0 : _a.username),
                    " reviewed",
                    ' ',
                    (0, moment_1.default)(review === null || review === void 0 ? void 0 : review.created_at).fromNow())) })));
};
exports.default = Review;
var sx = {
    root: {
        py: 1,
    },
    rating: {
        color: 'primary.main'
    },
    listItem: {
        pb: 1,
        borderBottom: '1px solid',
        borderColor: 'divider',
        alignItems: 'flex-start',
        '&:hover .MuiBox-root': {
            display: 'block',
        },
    },
    listItemIcon: {
        mt: 1,
        mr: 2
    },
    reviewText: {
        mb: 1,
        color: 'text.primary',
        whiteSpace: 'pre-wrap',
        '& span': {
            fontWeight: 500,
        },
    },
    content: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    link: {
        cursor: 'pointer',
        color: 'text.secondary',
        '&:hover': {
            color: 'text.primary',
        },
    },
    caption: {
        fontSize: 14,
    },
    divider: {
        pb: 1,
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
};
