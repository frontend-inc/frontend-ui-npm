"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var PriceCard = function (props) {
    var router = (0, router_1.useRouter)();
    var price = props.price;
    var handleClick = function () {
        if (price === null || price === void 0 ? void 0 : price.url) {
            router.push(price.url);
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { sx: sx.content, direction: "column", spacing: 1 },
            react_1.default.createElement(material_1.Typography, { variant: "subtitle1", color: "text.primary" }, price.title),
            react_1.default.createElement(material_1.Typography, { variant: "h6", color: "text.primary" }, price.price),
            react_1.default.createElement(material_1.Divider, null),
            react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.features }, price.features),
            react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.secondary", sx: sx.nonFeatures }, price.disabledFeatures)),
        react_1.default.createElement(material_1.Button, { onClick: handleClick, variant: 'contained', color: 'primary', fullWidth: true }, price.buttonText)));
};
exports.default = PriceCard;
var sx = {
    root: {
        width: "100%",
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s',
        '&:hover': {
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)'
        }
    },
    content: {
        minHeight: 300
    },
    features: {
        whiteSpace: 'pre-line',
        color: 'text.primary',
        mb: 0
    },
    nonFeatures: {
        mt: 0,
        whiteSpace: 'pre-line',
        textDecoration: 'line-through',
        color: 'text.secondary'
    }
};
