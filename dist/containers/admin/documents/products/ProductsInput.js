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
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var ProductListItem_1 = __importDefault(require("./ProductListItem"));
var ProductToolbar_1 = __importDefault(require("./ProductToolbar"));
var hooks_1 = require("../../../../hooks");
var lodash_1 = require("lodash");
var ProductsInput = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = props || {}, document = _b.document, handleUpdateProductPositions = _b.handleUpdateProductPositions, handleAddProducts = _b.handleAddProducts, handleRemoveProducts = _b.handleRemoveProducts;
    var handleAddClick = function () {
        setOpen(true);
    };
    var handleDelete = function (reference) {
        var _a;
        handleRemoveProducts([(_a = reference === null || reference === void 0 ? void 0 : reference.product) === null || _a === void 0 ? void 0 : _a.id]);
    };
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root },
        react_1.default.createElement(components_1.SortableList, { handleDrop: handleUpdateProductPositions, items: (0, lodash_1.sortBy)(document === null || document === void 0 ? void 0 : document.product_references, 'position'), renderItem: function (reference) { return (react_1.default.createElement(ProductListItem_1.default, { sortable: true, enableDelete: true, key: reference === null || reference === void 0 ? void 0 : reference.id, resource: reference === null || reference === void 0 ? void 0 : reference.product, handleClick: function () { return null; }, handleDelete: function () { return handleDelete(reference); } })); } }),
        react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(components_1.SecondaryButton, { onClick: handleAddClick }, "Add Products")),
        react_1.default.createElement(components_1.Drawer, { open: open, handleClose: function () { return setOpen(false); } },
            react_1.default.createElement(components_1.ResourceList, { selectable: true, enableSearch: true, url: "".concat(apiUrl, "/products"), name: "product", component: ProductListItem_1.default, toolbar: ProductToolbar_1.default, slots: {
                    toolbar: {
                        handleAddProducts: handleAddProducts,
                    },
                } }))));
};
exports.default = ProductsInput;
var sx = {
    root: {
        width: '100%',
    },
};
