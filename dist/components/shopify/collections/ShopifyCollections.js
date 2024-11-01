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
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var ShopifyCollections = function (props) {
    var _a = props.enableGradient, enableGradient = _a === void 0 ? false : _a, _b = props.enableOverlay, enableOverlay = _b === void 0 ? false : _b;
    var _c = (0, frontend_shopify_1.useCollections)(), loading = _c.loading, collections = _c.collections, findCollections = _c.findCollections;
    (0, react_1.useEffect)(function () {
        findCollections();
    }, []);
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-4 pb-1', loading && 'opacity-50') }, collections === null || collections === void 0 ? void 0 : collections.map(function (collection, index) { return (react_1.default.createElement(components_1.ShopifyCollectionCard, { key: index, collection: collection, enableGradient: enableGradient, enableOverlay: enableOverlay })); })));
};
exports.default = ShopifyCollections;
