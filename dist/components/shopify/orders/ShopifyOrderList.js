"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ShopifyOrderItem_1 = __importDefault(require("./ShopifyOrderItem"));
var ShopifyOrderList = function (props) {
    var _a = props || {}, orders = _a.orders, handleClick = _a.handleClick;
    return (react_1.default.createElement(material_1.List, { disablePadding: true }, orders === null || orders === void 0 ? void 0 : orders.map(function (order) { return (react_1.default.createElement(ShopifyOrderItem_1.default, { key: order === null || order === void 0 ? void 0 : order.id, order: order, handleClick: handleClick })); })));
};
exports.default = ShopifyOrderList;
