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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("../../../context");
var shopify_1 = require("../../shopify");
var router_1 = require("next/router");
var lodash_1 = require("lodash");
var FieldShopifyProducts = function (props) {
    var _a = props || {}, resource = _a.resource, _b = _a.href, href = _b === void 0 ? '/products' : _b, rest = __rest(_a, ["resource", "href"]);
    var fieldName = 'shopify_products';
    var shopifyHandles = (0, lodash_1.get)(resource, fieldName) || [];
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var handleClick = function (product) {
        if (href) {
            var url = "".concat(clientUrl).concat(href, "/").concat(product === null || product === void 0 ? void 0 : product.handle);
            router.push(url);
        }
    };
    if ((shopifyHandles === null || shopifyHandles === void 0 ? void 0 : shopifyHandles.length) == 0)
        return null;
    return (react_1.default.createElement(shopify_1.ProductArray, __assign({ handles: shopifyHandles, handleClick: handleClick }, rest)));
};
exports.default = FieldShopifyProducts;
