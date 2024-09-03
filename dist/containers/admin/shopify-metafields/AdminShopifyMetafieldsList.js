"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var AdminShopifyMetafieldsList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    if (!apiUrl)
        return null;
    return (react_1.default.createElement(components_1.ResourceList, { sortable: true, url: "".concat(apiUrl, "/shopify_metafields"), name: "shopify_metafield", enableCreate: true, enableEdit: true, enableSearch: true, enableDelete: true, query: {
            sort_by: 'position',
            sort_direction: 'asc',
        }, filterOptions: [
            {
                label: 'Type',
                field: 'variant',
                variant: 'multiple_choice',
                options: [
                    { label: 'String', value: 'string' },
                    { label: 'Text', value: 'text' },
                    { label: 'Number', value: 'number' },
                    { label: 'Shopify Products', value: 'products' },
                    { label: 'Shopify Collection', value: 'collection' },
                ],
            },
        ], edit: __1.AdminShopifyMetafieldForm, create: __1.AdminShopifyMetafieldForm, component: __1.AdminShopifyMetafieldItem, emptyIcon: "Shirt", emptyTitle: "No shopify metafields", emptyDescription: "No shopify metafields yet." }));
};
exports.default = AdminShopifyMetafieldsList;
