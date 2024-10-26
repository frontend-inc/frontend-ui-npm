'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../../components");
var hooks_1 = require("../../../../hooks");
var AdminProductListItem_1 = __importDefault(require("./AdminProductListItem"));
var AdminProductListToolbar_1 = __importDefault(require("./AdminProductListToolbar"));
var AdminProductListItems = function (props) {
    var _a = props || {}, url = _a.url, handleSuccess = _a.handleSuccess, productCollectionId = _a.productCollectionId;
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { direction: "column", selectable: true, enableSearch: true, url: "".concat(apiUrl, "/products"), name: 'product', toolbar: AdminProductListToolbar_1.default, component: AdminProductListItem_1.default, emptyIcon: "Search", emptyTitle: "No products", emptyDescription: "No products yet.", slots: {
            toolbar: {
                url: url,
                productCollectionId: productCollectionId,
                handleSuccess: handleSuccess,
            },
        } }));
};
exports.default = AdminProductListItems;
