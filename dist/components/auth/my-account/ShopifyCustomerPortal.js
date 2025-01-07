'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var hooks_1 = require("../../../hooks");
var sonner_1 = require("sonner");
var ShopifyCustomerPortal = function () {
    var app = (0, hooks_1.useApp)().app;
    var handleClick = function () {
        if (app === null || app === void 0 ? void 0 : app.shopify_customer_portal_url) {
            window.open(app.shopify_customer_portal_url, '_blank');
        }
        else {
            sonner_1.toast.error('Shopify Customer Portal not enabled.');
        }
    };
    return (react_1.default.createElement(components_1.Empty, { icon: "ri-shopping-cart-2-fill", title: "Shopify Customer Portal", description: "Manage your order history and returns.", buttons: react_1.default.createElement(react_2.Button, { onPress: handleClick, endContent: react_1.default.createElement(components_1.RemixIcon, { name: "ri-external-link-line" }) }, "Open Customer Portal") }));
};
exports.default = ShopifyCustomerPortal;
