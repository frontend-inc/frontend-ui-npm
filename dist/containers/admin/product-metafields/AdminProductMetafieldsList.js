"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var AdminMetafieldsList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { sortable: true, url: "".concat(apiUrl, "/metafields"), name: "metafield", enableCreate: true, enableEdit: true, enableSearch: true, enableDelete: true, query: {
            filters: {
                AND: [
                    { metafield_type: { eq: 'Product' } },
                ]
            },
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
                    { label: 'Price', value: 'price' },
                ],
            },
        ], defaultValue: {
            metafield_type: 'Product',
        }, edit: __1.AdminProductMetafieldForm, create: __1.AdminProductMetafieldForm, component: __1.AdminProductMetafieldItem, emptyIcon: "Shirt", emptyTitle: "No product metafields", emptyDescription: "No product metafields yet." }));
};
exports.default = AdminMetafieldsList;
