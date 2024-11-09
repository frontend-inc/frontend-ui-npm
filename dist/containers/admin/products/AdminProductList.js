'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminProductItem_1 = __importDefault(require("./AdminProductItem"));
var AdminProductCreateForm_1 = __importDefault(require("./AdminProductCreateForm"));
var AdminProductEditForm_1 = __importDefault(require("./AdminProductEditForm"));
var AdminProductShow_1 = __importDefault(require("./AdminProductShow"));
var AdminProductToolbar_1 = __importDefault(require("./AdminProductToolbar"));
var AdminProductHeader_1 = __importDefault(require("./AdminProductHeader"));
var AdminProductsList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { sortable: true, selectable: true, url: "".concat(apiUrl, "/products"), name: 'product', enableSearch: true, enableShow: true, enableEdit: true, enableDelete: true, enableCreate: true, sortOptions: [
            { name: 'position', label: 'Default' },
            { name: 'price', label: 'Price' },
            { name: 'title', label: 'Title' },
            { name: 'created_at', label: 'Date' },
        ], query: {
            sort_by: 'position',
            sort_direction: 'asc',
        }, create: AdminProductCreateForm_1.default, edit: AdminProductEditForm_1.default, show: AdminProductShow_1.default, header: AdminProductHeader_1.default, toolbar: AdminProductToolbar_1.default, component: AdminProductItem_1.default, emptyIcon: "Shirt", emptyTitle: "No products", emptyDescription: "No products added yet." }));
};
exports.default = AdminProductsList;
