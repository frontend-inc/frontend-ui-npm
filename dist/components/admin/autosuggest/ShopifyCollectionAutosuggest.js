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
var components_1 = require("../../../components");
var frontend_shopify_1 = require("frontend-shopify");
var ShopifyCollectionAutosuggest = function (props) {
    var value = props.value, label = props.label, placeholder = props.placeholder, handleChange = props.handleChange;
    var _a = (0, react_1.useState)([]), options = _a[0], setOptions = _a[1];
    var _b = (0, frontend_shopify_1.useCollections)(), collections = _b.collections, findCollections = _b.findCollections;
    (0, react_1.useEffect)(function () {
        if (collections) {
            setOptions(collections === null || collections === void 0 ? void 0 : collections.map(function (collection) {
                var _a;
                return ({
                    label: collection === null || collection === void 0 ? void 0 : collection.title,
                    value: collection === null || collection === void 0 ? void 0 : collection.handle,
                    image: (_a = collection === null || collection === void 0 ? void 0 : collection.image) === null || _a === void 0 ? void 0 : _a.url,
                });
            }));
        }
    }, [collections]);
    (0, react_1.useEffect)(function () {
        findCollections(100);
    }, []);
    return (react_1.default.createElement(components_1.Autosuggest, { label: label, name: 'shopify_collection', value: value, options: options, placeholder: placeholder, handleChange: handleChange, enableClear: true }));
};
exports.default = ShopifyCollectionAutosuggest;
