'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var ShopifyOrderItem_1 = __importDefault(require("./ShopifyOrderItem"));
var react_2 = require("@nextui-org/react");
var ShopifyOrderList = function (_a) {
    var orders = _a.orders, handleClick = _a.handleClick, className = _a.className;
    return (react_1.default.createElement(frontend_shadcn_1.ScrollArea, { className: (0, react_2.cn)('h-[400px] rounded-md border', className) },
        react_1.default.createElement("div", { className: "space-y-2 p-4" }, orders === null || orders === void 0 ? void 0 : orders.map(function (order) { return (react_1.default.createElement(ShopifyOrderItem_1.default, { key: order === null || order === void 0 ? void 0 : order.id, order: order, handleClick: function () { return handleClick(order.id); } })); }))));
};
exports.default = ShopifyOrderList;
