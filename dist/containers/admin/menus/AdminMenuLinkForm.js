"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminMenuLinkForm = function (props) {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { fields: [
            {
                label: 'Label',
                name: 'label',
                variant: 'string',
                placeholder: 'Label',
            },
            {
                label: 'Goto',
                name: 'variant',
                variant: 'select',
                options: [
                    { value: 'page', label: 'Page', icon: 'StickyNote' },
                    { value: 'url', label: 'URL', icon: 'ExternalLink' },
                ],
            },
            {
                label: 'URL',
                name: 'url',
                variant: 'string',
                placeholder: 'URL',
                conditions: [{ name: 'variant', operator: 'eq', value: 'url' }],
            },
            {
                label: 'Page',
                name: 'page_id',
                variant: 'autosuggest',
                placeholder: 'Select page',
                displayField: 'title',
                url: "".concat(apiUrl, "/pages"),
                query: {},
                conditions: [{ name: 'variant', operator: 'eq', value: 'page' }],
            },
        ] })));
};
exports.default = AdminMenuLinkForm;
