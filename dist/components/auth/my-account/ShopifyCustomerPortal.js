"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var ShopifyCustomerPortal = function () {
    var app = (0, hooks_1.useApp)().app;
    var showAlertError = (0, hooks_1.useAlerts)().showAlertError;
    var handleClick = function () {
        if (app === null || app === void 0 ? void 0 : app.shopify_customer_portal_url) {
            window.open(app.shopify_customer_portal_url, '_blank');
        }
        else {
            showAlertError('Shopify Customer Portal not enabled.');
        }
    };
    return (react_1.default.createElement(components_1.Placeholder, { icon: "ShoppingCart", title: "Shopify Customer Portal", description: "Manage your order history and returns.", buttons: react_1.default.createElement(components_1.PrimaryButton, { onClick: handleClick, endIcon: "ExternalLink" }, "Open Customer Portal") }));
};
exports.default = ShopifyCustomerPortal;
