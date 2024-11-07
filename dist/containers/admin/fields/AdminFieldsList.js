'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var AdminFieldsList = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    var collectionId = (props || {}).collectionId;
    var url = "".concat(apiUrl, "/collections/").concat(collectionId, "/fields");
    var slots = {
        item: {
            url: url,
        },
    };
    return (react_1.default.createElement(components_1.ResourceList, { sortable: true, url: url, name: "field", enableCreate: true, enableEdit: true, enableSearch: true, enableDelete: true, query: {
            sort_by: 'position',
            sort_direction: 'asc',
        }, filterOptions: [
            {
                label: 'Type',
                name: 'variant',
                options: [
                    { label: 'String', value: 'string' },
                    { label: 'Text', value: 'text' },
                    { label: 'Number', value: 'number' },
                    { label: 'Price', value: 'price' },
                ],
            },
        ], edit: __1.AdminFieldForm, create: __1.AdminFieldForm, component: __1.AdminFieldItem, emptyIcon: "Type", emptyTitle: "No fields", emptyDescription: "No fields yet.", slots: slots }));
};
exports.default = AdminFieldsList;
