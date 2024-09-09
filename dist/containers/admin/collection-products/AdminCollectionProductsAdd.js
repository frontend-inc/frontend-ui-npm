"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AdminProductListItems_1 = __importDefault(require("./products/AdminProductListItems"));
var components_1 = require("../../../components");
var AdminCollectionProductsAdd = function (props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose, handleReload = _a.handleReload, url = _a.url, productCollectionId = _a.productCollectionId;
    return (react_1.default.createElement(components_1.Drawer, { open: open, handleClose: handleClose, title: "Add Products" },
        react_1.default.createElement(AdminProductListItems_1.default, { name: 'collection_product', url: url, productCollectionId: productCollectionId, handleSuccess: handleReload })));
};
exports.default = AdminCollectionProductsAdd;
