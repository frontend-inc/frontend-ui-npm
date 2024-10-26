'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var frontend_shopify_1 = require("frontend-shopify");
var shopify_1 = require("../../../components/shopify");
var hooks_1 = require("../../../hooks");
var navigation_1 = require("next/navigation");
var frontend_shopify_2 = require("frontend-shopify");
var ShopifyCustomerOrders = function (props) {
    var router = (0, navigation_1.useRouter)();
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var _a = props || {}, _b = _a.title, title = _b === void 0 ? 'Customer Orders' : _b, _c = _a.subtitle, subtitle = _c === void 0 ? 'Manage your orders' : _c;
    var _d = (0, frontend_shopify_1.useOrders)(), loading = _d.loading, orders = _d.orders, findCustomerOrders = _d.findCustomerOrders;
    var handleClick = function (order) {
        var orderId = (0, frontend_shopify_2.getShopifyIdFromGid)(order === null || order === void 0 ? void 0 : order.id);
        router.push("".concat(clientUrl, "/shopify/orders/").concat(orderId));
    };
    (0, react_1.useEffect)(function () {
        if (!orders) {
            findCustomerOrders({
                first: 20,
            });
        }
    }, [orders]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.Loader, { loading: loading }),
        react_1.default.createElement(components_1.AuthScreen, { title: title, subtitle: subtitle },
            react_1.default.createElement(shopify_1.ShopifyOrderList, { orders: orders, handleClick: handleClick }))));
};
exports.default = ShopifyCustomerOrders;
