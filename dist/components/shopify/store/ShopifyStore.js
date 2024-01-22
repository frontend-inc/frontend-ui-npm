"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var webstudio_shopify_1 = require("webstudio-shopify");
var shopify_1 = require("../../../components/shopify");
var ShopifyStore = function (props) {
  var children = props.children,
    logo = props.logo,
    domain = props.domain,
    shopUrl = props.shopUrl,
    authCookie = props.authCookie,
    storefrontAccessToken = props.storefrontAccessToken,
    segmentWriteKey = props.segmentWriteKey;
  return react_1.default.createElement(
    webstudio_shopify_1.ShopProvider,
    {
      logo: logo,
      domain: domain,
      authCookie: authCookie,
      shopUrl: shopUrl,
      storefrontAccessToken: storefrontAccessToken,
    },
    react_1.default.createElement(shopify_1.Cart, null),
    react_1.default.createElement(shopify_1.SearchModal, null),
    react_1.default.createElement(
      webstudio_shopify_1.ProductProvider,
      null,
      react_1.default.createElement(
        webstudio_shopify_1.CollectionProvider,
        null,
        children
      )
    )
  );
};
exports.default = ShopifyStore;
