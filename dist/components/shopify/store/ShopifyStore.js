"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var shopify_1 = require("../../../components/shopify");
var ShopifyStore = function (props) {
    var children = props.children, logo = props.logo, domain = props.domain, shopUrl = props.shopUrl, storefrontAccessToken = props.storefrontAccessToken;
    return (react_1.default.createElement(frontend_shopify_1.ShopProvider, { logo: logo, domain: domain, shopUrl: shopUrl, storefrontAccessToken: storefrontAccessToken },
        react_1.default.createElement(shopify_1.Cart, null),
        react_1.default.createElement(shopify_1.SearchModal, null),
        react_1.default.createElement(frontend_shopify_1.ProductProvider, null,
            react_1.default.createElement(frontend_shopify_1.CollectionProvider, null, children))));
};
exports.default = ShopifyStore;
