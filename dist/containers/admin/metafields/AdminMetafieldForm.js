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
var AdminMetafieldForm = function (props) {
    return (react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { fields: [
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
        ] })));
};
exports.default = AdminMetafieldForm;
