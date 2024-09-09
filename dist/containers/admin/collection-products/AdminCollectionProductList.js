"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminCollectionProductItem_1 = __importDefault(require("./AdminCollectionProductItem"));
var AdminCollectionProductToolbar_1 = __importDefault(require("./AdminCollectionProductToolbar"));
var AdminCollectionProductsAdd_1 = __importDefault(require("./AdminCollectionProductsAdd"));
var AdminCollectionProductsList = function (props) {
    var productCollectionId = props.productCollectionId;
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var url = "".concat(apiUrl, "/product_collections/").concat(productCollectionId, "/collection_products");
    return (react_1.default.createElement(components_1.ResourceList, { selectable: true, sortable: true, url: url, name: 'collection_products', enableSearch: true, enableDelete: true, enableCreate: true, toolbar: AdminCollectionProductToolbar_1.default, component: AdminCollectionProductItem_1.default, create: AdminCollectionProductsAdd_1.default, emptyIcon: "Shirt", emptyTitle: "No products", emptyDescription: "No products added yet.", slots: {
            toolbar: {
                url: url,
                productCollectionId: productCollectionId,
            },
            create: {
                url: "".concat(apiUrl, "/product_collections"),
                productCollectionId: productCollectionId,
            },
        } }));
};
exports.default = AdminCollectionProductsList;
