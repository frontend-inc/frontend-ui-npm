'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var shopify_1 = require("../../shopify");
var lodash_1 = require("lodash");
var FieldShopifyProducts = function (props) {
    var _a = props || {}, resource = _a.resource, _b = _a.href, href = _b === void 0 ? '/products' : _b, rest = __rest(_a, ["resource", "href"]);
    var fieldName = 'shopify_products';
    var shopifyHandles = (0, lodash_1.get)(resource, fieldName) || [];
    if ((shopifyHandles === null || shopifyHandles === void 0 ? void 0 : shopifyHandles.length) == 0)
        return null;
    return react_1.default.createElement(shopify_1.ShopifyProductArray, __assign({ href: href, handles: shopifyHandles }, rest));
};
exports.default = FieldShopifyProducts;
