'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var shopify_1 = require("../../../components/shopify");
var ShopifyCartTotals = function () {
    var _a, _b, _c, _d, _e, _f;
    var cart = (0, frontend_shopify_1.useCart)().cart;
    var subtotal = Number((_b = (_a = cart === null || cart === void 0 ? void 0 : cart.cost) === null || _a === void 0 ? void 0 : _a.subtotalAmount) === null || _b === void 0 ? void 0 : _b.amount) || 0;
    var tax = Number((_c = cart === null || cart === void 0 ? void 0 : cart.totalTaxAmount) === null || _c === void 0 ? void 0 : _c.amount) || 0;
    var total = Number((_d = cart === null || cart === void 0 ? void 0 : cart.totalAmount) === null || _d === void 0 ? void 0 : _d.amount) || 0;
    var discounts = Number((_e = cart === null || cart === void 0 ? void 0 : cart.discountAllocation) === null || _e === void 0 ? void 0 : _e.amount) || 0;
    if (!cart)
        return null;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
        react_1.default.createElement(shopify_1.ShopifyCartText, { label: 'Subtotal', value: (0, frontend_shopify_2.formatCurrency)(subtotal) }), (_f = cart === null || cart === void 0 ? void 0 : cart.discountCodes) === null || _f === void 0 ? void 0 :
        _f.map(function (discountCode) { return (react_1.default.createElement(shopify_1.ShopifyCartDiscountCode, { key: discountCode === null || discountCode === void 0 ? void 0 : discountCode.id, discountCode: discountCode })); }),
        discounts > 0 && (react_1.default.createElement(shopify_1.ShopifyCartText, { label: 'Discounts', value: (0, frontend_shopify_2.formatCurrency)(-discounts) })),
        react_1.default.createElement(shopify_1.ShopifyCartText, { label: 'Tax', value: (0, frontend_shopify_2.formatCurrency)(tax) }),
        react_1.default.createElement(shopify_1.ShopifyCartText, { label: 'Total', value: (0, frontend_shopify_2.formatCurrency)(total) })));
};
exports.default = ShopifyCartTotals;
