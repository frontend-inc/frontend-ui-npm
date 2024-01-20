"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var webstudio_shopify_1 = require("webstudio-shopify");
var components_1 = require("../../../components");
var OrderLineItem = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var lineItem = props.lineItem;
    return (react_1.default.createElement(material_1.ListItem, { disableGutters: true },
        react_1.default.createElement(material_1.ListItemIcon, { sx: sx.thumbnail }, ((_b = (_a = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.url) && (react_1.default.createElement(material_1.Badge, { badgeContent: lineItem.quantity, color: "primary" },
            react_1.default.createElement(components_1.Image, { height: 100, src: (_d = (_c = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.url })))),
        react_1.default.createElement(material_1.ListItemText, { primary: lineItem.title, secondary: react_1.default.createElement("span", null,
                react_1.default.createElement(material_1.Typography, { variant: "body1", color: "textPrimary" }, (_e = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _e === void 0 ? void 0 : _e.title),
                react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textSecondary" },
                    lineItem.quantity,
                    " x",
                    ' ',
                    (0, webstudio_shopify_1.formatCurrency)((_g = (_f = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _f === void 0 ? void 0 : _f.price) === null || _g === void 0 ? void 0 : _g.amount))) })));
};
exports.default = OrderLineItem;
var sx = {
    root: {},
    thumbnail: {
        mr: 2,
    },
    avatar: {
        height: 100,
        width: 100,
    },
    lineItem: {},
    loader: {},
    removeIcon: {
        fontSize: 20,
        color: 'text.secondary',
    },
};
