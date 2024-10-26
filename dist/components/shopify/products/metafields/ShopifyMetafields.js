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
var frontend_shopify_1 = require("frontend-shopify");
var shopify_1 = require("../../../shopify");
var components_1 = require("../../../../components");
var core_1 = require("../../../core");
var frontend_shopify_2 = require("frontend-shopify");
var PLAIN_TEXT_TYPES = ['single_line_text_field', 'multi_line_text_field'];
var RICH_TEXT_TYPES = ['rich_text_field'];
var ShopifyProductMetafields = function (props) {
    var shopifyProduct = props.shopifyProduct, metafields = props.metafields;
    var _a = (0, frontend_shopify_2.useProducts)(), product = _a.product, findProduct = _a.findProduct;
    (0, react_1.useEffect)(function () {
        if (shopifyProduct && metafields) {
            var metafieldIdentifiers = metafields === null || metafields === void 0 ? void 0 : metafields.map(function (metafield) { return ({
                namespace: metafield.name.split('.')[0],
                key: metafield.name.split('.')[1],
            }); });
            findProduct(shopifyProduct === null || shopifyProduct === void 0 ? void 0 : shopifyProduct.handle, metafieldIdentifiers);
        }
    }, [shopifyProduct, metafields]);
    if (!product || !metafields)
        return null;
    return (react_1.default.createElement("div", { className: "w-full" }, product &&
        (metafields === null || metafields === void 0 ? void 0 : metafields.map(function (metafield, index) {
            var label = metafield.label, name = metafield.name;
            var key = name.split('.')[1];
            var type = (0, frontend_shopify_1.getMetafieldType)(product, key);
            var value = (0, frontend_shopify_1.getMetafieldValue)(product, key);
            return (react_1.default.createElement(components_1.AccordionItem, { primary: label ? label : '', secondary: react_1.default.createElement("div", null,
                    PLAIN_TEXT_TYPES.includes(type) && (react_1.default.createElement(core_1.Typography, { variant: "body1" }, value)),
                    RICH_TEXT_TYPES.includes(type) && (react_1.default.createElement(shopify_1.ShopifyMetafieldRichText, { value: value }))) }));
        }))));
};
exports.default = ShopifyProductMetafields;
