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
var frontend_shadcn_1 = require("frontend-shadcn");
var shopify_1 = require("../../../components/shopify");
var frontend_shopify_1 = require("frontend-shopify");
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var frontend_shadcn_2 = require("frontend-shadcn");
var ShopifyOrderDetails = function (props) {
    var _a, _b;
    var router = (0, navigation_1.useRouter)();
    var order = props.order, supportUrl = props.supportUrl, className = props.className;
    var _c = (0, react_1.useState)(), lineItems = _c[0], setListItems = _c[1];
    var handleOrderStatusClick = function () {
        window.open(order === null || order === void 0 ? void 0 : order.statusUrl, '_blank');
    };
    var handleSupportClick = function () {
        if (supportUrl) {
            router.push(supportUrl);
        }
    };
    (0, react_1.useEffect)(function () {
        var _a;
        if (order) {
            // @ts-ignore
            setListItems((_a = order === null || order === void 0 ? void 0 : order.lineItems) === null || _a === void 0 ? void 0 : _a.edges.map(function (e) { return e.node; }));
        }
    }, [order]);
    var shippingAddress = (order || {}).shippingAddress;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_2.cn)('flex flex-col space-y-4', className) },
        react_1.default.createElement("h3", { className: "text-lg font-semibold" }, "Order details"),
        react_1.default.createElement(frontend_shadcn_1.ScrollArea, { className: "h-[200px] w-full rounded-md border p-4" }, lineItems === null || lineItems === void 0 ? void 0 : lineItems.map(function (lineItem, i) { return (react_1.default.createElement(shopify_1.ShopifyOrderLineItem, { key: i, lineItem: lineItem })); })),
        react_1.default.createElement("div", { className: "flex justify-between items-center" },
            react_1.default.createElement("span", { className: "text-sm" }, "Shipping"),
            react_1.default.createElement("span", { className: "text-sm font-medium" }, (0, frontend_shopify_1.formatCurrency)((_a = order === null || order === void 0 ? void 0 : order.totalShippingPrice) === null || _a === void 0 ? void 0 : _a.amount, 2))),
        react_1.default.createElement("div", { className: "flex justify-between items-center" },
            react_1.default.createElement("span", { className: "text-sm font-semibold" }, "Total"),
            react_1.default.createElement("span", { className: "text-sm font-semibold" }, (0, frontend_shopify_1.formatCurrency)((_b = order === null || order === void 0 ? void 0 : order.totalPrice) === null || _b === void 0 ? void 0 : _b.amount, 2))),
        shippingAddress && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("h3", { className: "text-lg font-semibold" }, "Shipping Details"),
            react_1.default.createElement(shopify_1.ShopifyAddressItem, { disableActions: true, 
                // @ts-ignore
                address: shippingAddress }))),
        react_1.default.createElement(components_1.Button, { className: "w-full", variant: "default", onClick: handleOrderStatusClick },
            "Order status",
            react_1.default.createElement(lucide_react_1.ExternalLink, { className: "ml-2 h-4 w-4" })),
        supportUrl && (react_1.default.createElement(components_1.Button, { className: "w-full", variant: "outline", onClick: handleSupportClick }, "Customer support"))));
};
exports.default = ShopifyOrderDetails;
