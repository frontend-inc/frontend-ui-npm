"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminProductCollectionItem_1 = __importDefault(require("./AdminProductCollectionItem"));
var AdminProductCollectionCreate_1 = __importDefault(require("./AdminProductCollectionCreate"));
var AdminProductCollectionEdit_1 = __importDefault(require("./AdminProductCollectionEdit"));
var AdminProductCollectionShow_1 = __importDefault(require("./AdminProductCollectionShow"));
var AdminProductCollectionToolbar_1 = __importDefault(require("./AdminProductCollectionToolbar"));
var AdminProductCollectionHeader_1 = __importDefault(require("./AdminProductCollectionHeader"));
var router_1 = require("next/router");
var AdminProductCollectionsList = function () {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, hooks_1.useAdmin)().clientUrl;
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var handleClick = function (productCollection) {
        router.push("".concat(clientUrl, "/shop/product-collections/").concat(productCollection.handle, "/products"));
    };
    return (react_1.default.createElement(components_1.ResourceList, { selectable: true, sortable: true, url: "".concat(apiUrl, "/product_collections"), name: 'product_collection', enableSearch: true, enableEdit: true, enableDelete: true, enableCreate: true, handleClick: handleClick, sortOptions: [
            { name: 'title', label: 'Title' },
            { name: 'created_at', label: 'Date' },
        ], create: AdminProductCollectionCreate_1.default, edit: AdminProductCollectionEdit_1.default, show: AdminProductCollectionShow_1.default, header: AdminProductCollectionHeader_1.default, toolbar: AdminProductCollectionToolbar_1.default, component: AdminProductCollectionItem_1.default, emptyIcon: "ShoppingCard", emptyTitle: "No product collections", emptyDescription: "No products collections added yet." }));
};
exports.default = AdminProductCollectionsList;
