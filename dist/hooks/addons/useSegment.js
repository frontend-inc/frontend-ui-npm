"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var webstudio_shopify_1 = require("webstudio-shopify");
var context_1 = require("../../context");
// Implementation of the Segment v2 eCommerce analytics events
// https://segment?.com/docs/connections/spec/ecommerce/v2/
var useSegment = function () {
  var segment = (0, react_1.useContext)(context_1.ScriptContext).segment;
  var checkout = (0, webstudio_shopify_1.useCheckout)().checkout;
  var trackAddToCart = function (_a) {
    var _b, _c;
    var variant = _a.variant,
      quantity = _a.quantity,
      product = _a.product;
    segment === null || segment === void 0
      ? void 0
      : segment.track("Product Added", {
          checkout_id:
            checkout === null || checkout === void 0 ? void 0 : checkout.id,
          product_id:
            product === null || product === void 0 ? void 0 : product.id,
          sku: variant === null || variant === void 0 ? void 0 : variant.sku,
          category:
            product === null || product === void 0
              ? void 0
              : product.productType,
          name:
            (variant === null || variant === void 0 ? void 0 : variant.title) ||
            (product === null || product === void 0 ? void 0 : product.title),
          brand:
            product === null || product === void 0 ? void 0 : product.vendor,
          variant: variant === null || variant === void 0 ? void 0 : variant.id,
          price:
            (_b =
              variant === null || variant === void 0
                ? void 0
                : variant.price) === null || _b === void 0
              ? void 0
              : _b.amount,
          quantity: quantity,
          url: window.location.href,
          image_url:
            (_c =
              variant === null || variant === void 0
                ? void 0
                : variant.image) === null || _c === void 0
              ? void 0
              : _c.url,
        });
  };
  var trackRemoveFromCart = function (_a) {
    var _b, _c;
    var variant = _a.variant,
      quantity = _a.quantity,
      product = _a.product;
    segment === null || segment === void 0
      ? void 0
      : segment.track("Product Removed", {
          checkout_id:
            checkout === null || checkout === void 0 ? void 0 : checkout.id,
          product_id:
            product === null || product === void 0 ? void 0 : product.id,
          sku: variant === null || variant === void 0 ? void 0 : variant.sku,
          category:
            product === null || product === void 0
              ? void 0
              : product.productType,
          name: product === null || product === void 0 ? void 0 : product.title,
          brand:
            product === null || product === void 0 ? void 0 : product.vendor,
          variant: variant === null || variant === void 0 ? void 0 : variant.id,
          price:
            (_b =
              variant === null || variant === void 0
                ? void 0
                : variant.price) === null || _b === void 0
              ? void 0
              : _b.amount,
          quantity: quantity,
          url: window.location.href,
          image_url:
            (_c =
              variant === null || variant === void 0
                ? void 0
                : variant.image) === null || _c === void 0
              ? void 0
              : _c.url,
        });
  };
  var trackCartViewed = function (cart) {
    var _a, _b, _c, _d, _e;
    var products = cart.lines.edges.map(function (_a) {
      var _b, _c;
      var line = _a.node;
      var variant =
        line === null || line === void 0 ? void 0 : line.merchandise;
      var product =
        variant === null || variant === void 0 ? void 0 : variant.product;
      return {
        product_id:
          product === null || product === void 0 ? void 0 : product.id,
        sku: variant === null || variant === void 0 ? void 0 : variant.sku,
        name: product === null || product === void 0 ? void 0 : product.title,
        price:
          (_b =
            variant === null || variant === void 0 ? void 0 : variant.price) ===
            null || _b === void 0
            ? void 0
            : _b.amount,
        quantity: line === null || line === void 0 ? void 0 : line.quantity,
        brand: product === null || product === void 0 ? void 0 : product.vendor,
        variant: variant === null || variant === void 0 ? void 0 : variant.id,
        category:
          product === null || product === void 0 ? void 0 : product.productType,
        url: window.location.href,
        image_url:
          (_c =
            variant === null || variant === void 0 ? void 0 : variant.image) ===
            null || _c === void 0
            ? void 0
            : _c.url,
      };
    });
    segment === null || segment === void 0
      ? void 0
      : segment.track("Cart Viewed", {
          order_id: cart.id,
          value:
            (_a =
              cart === null || cart === void 0 ? void 0 : cart.totalAmount) ===
              null || _a === void 0
              ? void 0
              : _a.amount,
          revenue:
            (_b =
              cart === null || cart === void 0 ? void 0 : cart.totalAmount) ===
              null || _b === void 0
              ? void 0
              : _b.amount,
          coupon:
            (_c = cart.discountApplications.edges) === null || _c === void 0
              ? void 0
              : _c
                  .map(function (e) {
                    return e === null || e === void 0 ? void 0 : e.node;
                  })
                  .map(function (node) {
                    return node === null || node === void 0
                      ? void 0
                      : node.code;
                  })
                  .join(", "),
          currency:
            (_e =
              (_d = cart === null || cart === void 0 ? void 0 : cart.cost) ===
                null || _d === void 0
                ? void 0
                : _d.totalAmount) === null || _e === void 0
              ? void 0
              : _e.currencyCode,
          products: products,
        });
  };
  var trackCheckoutStarted = function (cart) {
    var _a, _b, _c, _d;
    var products = cart.lines.edges.map(function (_a) {
      var _b, _c;
      var line = _a.node;
      var variant =
        line === null || line === void 0 ? void 0 : line.merchandise;
      var product =
        variant === null || variant === void 0 ? void 0 : variant.product;
      return {
        product_id:
          product === null || product === void 0 ? void 0 : product.id,
        sku: variant === null || variant === void 0 ? void 0 : variant.sku,
        name: product === null || product === void 0 ? void 0 : product.title,
        price:
          (_b =
            variant === null || variant === void 0 ? void 0 : variant.price) ===
            null || _b === void 0
            ? void 0
            : _b.amount,
        quantity: line === null || line === void 0 ? void 0 : line.quantity,
        brand: product === null || product === void 0 ? void 0 : product.vendor,
        variant: variant === null || variant === void 0 ? void 0 : variant.id,
        category:
          product === null || product === void 0 ? void 0 : product.productType,
        url: window.location.href,
        image_url:
          (_c =
            variant === null || variant === void 0 ? void 0 : variant.image) ===
            null || _c === void 0
            ? void 0
            : _c.url,
      };
    });
    segment === null || segment === void 0
      ? void 0
      : segment.track("Checkout Started", {
          order_id: cart.id,
          value:
            (_a =
              cart === null || cart === void 0 ? void 0 : cart.totalAmount) ===
              null || _a === void 0
              ? void 0
              : _a.amount,
          revenue:
            (_b =
              cart === null || cart === void 0 ? void 0 : cart.totalAmount) ===
              null || _b === void 0
              ? void 0
              : _b.amount,
          coupon:
            (_c = cart.discountApplications.edges) === null || _c === void 0
              ? void 0
              : _c
                  .map(function (e) {
                    return e === null || e === void 0 ? void 0 : e.node;
                  })
                  .map(function (node) {
                    return node === null || node === void 0
                      ? void 0
                      : node.code;
                  })
                  .join(", "),
          currency:
            (_d =
              cart === null || cart === void 0 ? void 0 : cart.totalAmount) ===
              null || _d === void 0
              ? void 0
              : _d.currencyCode,
          products: products,
        });
  };
  var trackProductsSearched = function (query) {
    segment === null || segment === void 0
      ? void 0
      : segment.track("Products Searched", {
          query: query,
        });
  };
  var trackProductViewed = function (product) {
    var _a, _b, _c;
    var variant = product.variants.edges[0].node;
    segment === null || segment === void 0
      ? void 0
      : segment.track("Product Viewed", {
          product_id:
            product === null || product === void 0 ? void 0 : product.id,
          sku: variant === null || variant === void 0 ? void 0 : variant.sku,
          category:
            product === null || product === void 0
              ? void 0
              : product.productType,
          name: product === null || product === void 0 ? void 0 : product.title,
          brand:
            product === null || product === void 0 ? void 0 : product.vendor,
          price:
            (_a =
              variant === null || variant === void 0
                ? void 0
                : variant.price) === null || _a === void 0
              ? void 0
              : _a.amount,
          variant: variant === null || variant === void 0 ? void 0 : variant.id,
          currency:
            (_b =
              variant === null || variant === void 0
                ? void 0
                : variant.price) === null || _b === void 0
              ? void 0
              : _b.currencyCode,
          url: window.location.href,
          image_url:
            (_c =
              variant === null || variant === void 0
                ? void 0
                : variant.image) === null || _c === void 0
              ? void 0
              : _c.url,
        });
  };
  var trackProductClicked = function (product) {
    var _a, _b, _c, _d, _e;
    var variant = product.variants.edges[0].node;
    segment === null || segment === void 0
      ? void 0
      : segment.track("Product Clicked", {
          product_id:
            product === null || product === void 0 ? void 0 : product.id,
          sku:
            (_c =
              (_b =
                (_a =
                  product === null || product === void 0
                    ? void 0
                    : product.variants) === null || _a === void 0
                  ? void 0
                  : _a.edges[0]) === null || _b === void 0
                ? void 0
                : _b.node) === null || _c === void 0
              ? void 0
              : _c.sku,
          category:
            product === null || product === void 0
              ? void 0
              : product.productType,
          name: product === null || product === void 0 ? void 0 : product.title,
          brand:
            product === null || product === void 0 ? void 0 : product.vendor,
          price:
            (_d =
              variant === null || variant === void 0
                ? void 0
                : variant.price) === null || _d === void 0
              ? void 0
              : _d.amount,
          variant: variant === null || variant === void 0 ? void 0 : variant.id,
          quantity: 1,
          url: "/products/".concat(
            product === null || product === void 0 ? void 0 : product.handle
          ),
          image_url:
            (_e =
              variant === null || variant === void 0
                ? void 0
                : variant.image) === null || _e === void 0
              ? void 0
              : _e.url,
        });
  };
  var trackProductList = function (collection) {
    var products = collection.products.edges.map(function (line) {
      var _a, _b, _c;
      var product = line === null || line === void 0 ? void 0 : line.node;
      var variant =
        (_a =
          product === null || product === void 0
            ? void 0
            : product.variants) === null || _a === void 0
          ? void 0
          : _a.edges[0].node;
      return {
        product_id:
          product === null || product === void 0 ? void 0 : product.id,
        sku: variant === null || variant === void 0 ? void 0 : variant.sku,
        name: product === null || product === void 0 ? void 0 : product.title,
        price:
          (_b =
            variant === null || variant === void 0 ? void 0 : variant.price) ===
            null || _b === void 0
            ? void 0
            : _b.amount,
        category:
          product === null || product === void 0 ? void 0 : product.productType,
        url: window.location.href,
        image_url:
          (_c =
            variant === null || variant === void 0 ? void 0 : variant.image) ===
            null || _c === void 0
            ? void 0
            : _c.url,
      };
    });
    segment === null || segment === void 0
      ? void 0
      : segment.track("Product List Viewed", {
          list_id:
            collection === null || collection === void 0
              ? void 0
              : collection.id,
          products: products,
        });
  };
  return {
    segment: segment,
    trackCartViewed: trackCartViewed,
    trackCheckoutStarted: trackCheckoutStarted,
    trackAddToCart: trackAddToCart,
    trackRemoveFromCart: trackRemoveFromCart,
    trackProductClicked: trackProductClicked,
    trackProductViewed: trackProductViewed,
    trackProductsSearched: trackProductsSearched,
    trackProductList: trackProductList,
  };
};
exports.default = useSegment;
