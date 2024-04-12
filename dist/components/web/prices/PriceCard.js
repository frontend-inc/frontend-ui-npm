"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var components_1 = require("../../../components");
var PriceCard = function (props) {
    var _a;
    var router = (0, router_1.useRouter)();
    var price = props.price;
    var handleClick = function () {
        if (price === null || price === void 0 ? void 0 : price.url) {
            router.push(price.url);
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { sx: sx.content, direction: "column", spacing: 1 },
            (price === null || price === void 0 ? void 0 : price.label) && (react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(components_1.Label, { label: price.label }))),
            react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.secondary" }, price.title),
            react_1.default.createElement(material_1.Typography, { variant: "h5", color: "text.primary" }, price.price),
            react_1.default.createElement(material_1.Divider, null),
            react_1.default.createElement(material_1.List, { disablePadding: true }, (_a = price === null || price === void 0 ? void 0 : price.features) === null || _a === void 0 ? void 0 : _a.map(function (feature, i) { return (react_1.default.createElement(material_1.ListItem, { key: i },
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, feature === null || feature === void 0 ? void 0 : feature.label) }))); }))),
        react_1.default.createElement(material_1.Button, { onClick: handleClick, variant: "contained", color: "primary", fullWidth: true }, price.buttonText)));
};
exports.default = PriceCard;
var sx = {
    root: {
        width: '100%',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    content: {
        minHeight: 300,
    },
    features: {
        whiteSpace: 'pre-line',
        color: 'text.primary',
        mb: 0,
    },
};
