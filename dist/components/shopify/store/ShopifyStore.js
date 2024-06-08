"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var shopify_1 = require("../../../components/shopify");
var ShopifyStore = function (props) {
    var children = props.children, enableShopify = props.enableShopify, logo = props.logo, domain = props.domain, customerPortalUrl = props.customerPortalUrl, shopUrl = props.shopUrl, storefrontAccessToken = props.storefrontAccessToken;
    if (enableShopify && (!domain || !storefrontAccessToken))
        return null;
    return enableShopify ? (react_1.default.createElement(frontend_shopify_1.ShopifyProvider, { logo: logo, domain: domain, shopUrl: shopUrl, customerPortalUrl: customerPortalUrl, storefrontAccessToken: storefrontAccessToken },
        react_1.default.createElement(shopify_1.Cart, null),
        react_1.default.createElement(frontend_shopify_1.ProductProvider, null,
            react_1.default.createElement(frontend_shopify_1.CollectionProvider, null, children)))) : (children);
};
exports.default = ShopifyStore;
