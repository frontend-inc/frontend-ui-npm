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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../..");
var frontend_shopify_1 = require("frontend-shopify");
var __2 = require("..");
var navigation_1 = require("next/navigation");
var moment_1 = __importDefault(require("moment"));
var ShopifyCustomerOrder = function (props) {
    var orderId = (0, navigation_1.useParams)().order_id;
    if (orderId == 'new') {
        orderId = null;
    }
    var _a = (0, frontend_shopify_1.useOrders)(), loading = _a.loading, order = _a.order, findCustomerOrder = _a.findCustomerOrder;
    (0, react_1.useEffect)(function () {
        if (orderId) {
            findCustomerOrder(orderId);
        }
    }, [orderId]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.Loader, { loading: loading }),
        react_1.default.createElement(__1.AuthScreen, { title: "Order ".concat(order.name), subtitle: (0, moment_1.default)(order === null || order === void 0 ? void 0 : order.processedAt).format('MMMM Do, YYYY') },
            react_1.default.createElement(__2.ShopifyOrderDetails, { order: order }))));
};
exports.default = ShopifyCustomerOrder;
