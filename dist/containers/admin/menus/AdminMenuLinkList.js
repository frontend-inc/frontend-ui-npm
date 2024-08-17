"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var AdminMenuLinkList = function (props) {
    var _a = props || {}, menuId = _a.menuId, handleClick = _a.handleClick;
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { direction: 'column', sortable: true, enableBorder: true, url: "".concat(apiUrl, "/menus/").concat(menuId, "/links"), name: "link", enableCreate: true, enableEdit: true, enableSearch: true, enableDelete: true, handleClick: handleClick, query: {
            sort_by: 'position',
            sort_direction: 'asc',
        }, fields: [
            {
                label: 'Name',
                name: 'name',
                variant: 'string',
                placeholder: 'Link name',
            },
            {
                label: 'Link type',
                name: 'variant',
                variant: 'select',
                options: [
                    { value: 'page', label: 'Page', icon: 'StickyNote' },
                    { value: 'url', label: 'URL', icon: 'ExternalLink' },
                ]
            },
            {
                label: 'URL',
                name: 'url',
                variant: 'string',
                placeholder: 'URL',
                conditions: [
                    { name: 'variant', operator: 'eq', value: 'url' }
                ]
            },
            {
                label: 'Page',
                name: 'page_id',
                variant: 'autosuggest',
                placeholder: 'Select page',
                displayField: 'title',
                url: "".concat(apiUrl, "/pages"),
                query: {},
                conditions: [
                    { name: 'variant', operator: 'eq', value: 'page' }
                ]
            },
        ], component: __1.AdminMenuLinkItem, emptyIcon: "Link", emptyTitle: "No links", emptyDescription: "No links yet." }));
};
exports.default = AdminMenuLinkList;
