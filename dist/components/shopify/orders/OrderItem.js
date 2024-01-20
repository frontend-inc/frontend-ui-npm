"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var webstudio_shopify_1 = require("webstudio-shopify");
var moment_1 = __importDefault(require("moment"));
var OrderItem = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var order = props.order, handleClick = props.handleClick;
    return (react_1.default.createElement(material_1.ListItem, null,
        react_1.default.createElement(material_1.ListItemButton, { onClick: function () { return handleClick(order); } },
            react_1.default.createElement(material_1.ListItemIcon, { sx: sx.image },
                react_1.default.createElement(components_1.Image, { alt: order === null || order === void 0 ? void 0 : order.name, src: 
                    //@ts-ignore
                    (_e = (_d = (_c = (_b = (_a = order === null || order === void 0 ? void 0 : order.lineItems) === null || _a === void 0 ? void 0 : _a.edges[0]) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.variant) === null || _d === void 0 ? void 0 : _d.image) === null || _e === void 0 ? void 0 : _e.url, 
                    //@ts-ignore
                    width: 64, height: 64 })),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { gutterBottom: true, variant: "subtitle1", component: "h2" },
                    "Order ", order === null || order === void 0 ? void 0 :
                    order.name), secondary: react_1.default.createElement(material_1.Stack, { spacing: 0 },
                    react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textSecondary" }, (0, moment_1.default)(order === null || order === void 0 ? void 0 : order.processedAt).format('MM/DD/YYYY')),
                    react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textSecondary" }, (0, webstudio_shopify_1.formatCurrency)((_f = order === null || order === void 0 ? void 0 : order.totalPrice) === null || _f === void 0 ? void 0 : _f.amount))) }))));
};
exports.default = OrderItem;
var sx = {
    image: {
        mr: 2,
    },
};
