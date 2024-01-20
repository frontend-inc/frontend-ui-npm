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
var webstudio_shopify_1 = require("webstudio-shopify");
var webstudio_shopify_2 = require("webstudio-shopify");
var head_1 = __importDefault(require("next/head"));
var OkendoReviews = function (props) {
    var _a = props || {}, handle = _a.handle, subscriberId = _a.subscriberId;
    var _b = (0, webstudio_shopify_2.useProducts)(), loading = _b.loading, product = _b.product, fetchProduct = _b.fetchProduct;
    var widgetContainer = (0, react_1.useRef)(null);
    var initializeReviewsWidget = function () {
        // @ts-ignore
        window.okeWidgetApi.initWidget(widgetContainer.current);
    };
    (0, react_1.useEffect)(function () {
        if (product === null || product === void 0 ? void 0 : product.id) {
            // @ts-ignore
            if (window.okeWidgetApi) {
                initializeReviewsWidget();
            }
            else {
                document.addEventListener('oke-script-loaded', initializeReviewsWidget);
            }
        }
        return function () {
            document.removeEventListener('oke-script-loaded', initializeReviewsWidget);
        };
    }, [product === null || product === void 0 ? void 0 : product.id, widgetContainer === null || widgetContainer === void 0 ? void 0 : widgetContainer.current]);
    (0, react_1.useEffect)(function () {
        if (handle) {
            fetchProduct(handle);
        }
    }, [handle]);
    if (!(product === null || product === void 0 ? void 0 : product.id) || !subscriberId)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(head_1.default, null,
            react_1.default.createElement("meta", { name: "oke:subscriber_id", content: subscriberId }),
            react_1.default.createElement("script", { src: "https://cdn-static.okendo.io/reviews-widget-plus/js/okendo-reviews.js" })),
        react_1.default.createElement("div", { ref: widgetContainer, "data-oke-widget": true, "data-oke-reviews-product-id": "shopify-".concat((0, webstudio_shopify_1.getShopifyIdFromGid)(product === null || product === void 0 ? void 0 : product.id)) })));
};
exports.default = OkendoReviews;
