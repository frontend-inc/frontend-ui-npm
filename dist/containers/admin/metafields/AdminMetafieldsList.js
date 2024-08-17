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
        ], fields: [
            { label: 'Label', name: 'label', variant: 'string' },
            { label: 'API name', name: 'name', variant: 'nospace' },
            {
                label: 'Type',
                name: 'variant',
                variant: 'select',
                options: [
                    { icon: 'List', value: 'array', label: 'Array' },
                    { icon: 'MenuSquare', value: 'select', label: 'Select' },
                    { icon: 'Type', value: 'string', label: 'String' },
                    { icon: 'FileText', value: 'text', label: 'Text' },
                    { icon: 'Hash', value: 'number', label: 'Number' },
                    { icon: 'Star', value: 'rating', label: 'Rating' },
                    { icon: 'Link', value: 'url', label: 'URL' },
                    { icon: 'DollarSign', value: 'price', label: 'Price' },
                ],
            },
            {
                label: 'Options',
                name: 'options',
                variant: 'array',
                conditions: [
                    { name: 'variant', operator: 'eq', value: 'select' },
                ],
            },
        ], component: __1.AdminMetafieldItem, emptyIcon: "MessageSquare", emptyTitle: "No metafields", emptyDescription: "No metafields yet." }));
};
exports.default = AdminMetafieldsList;
