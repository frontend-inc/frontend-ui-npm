'use client';
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
var components_2 = require("../../../components");
var AdminProductEditForm = function (props) {
    var fields = [
        { label: 'Image', name: 'image', variant: 'media' },
        { label: 'Title', name: 'title', variant: 'string' },
        { label: 'Description', name: 'description', variant: 'text' },
        { label: 'Label', name: 'label', variant: 'string' },
        { label: 'Price', name: 'price', variant: 'number' },
        { label: 'Compare at price', name: 'compare_at_price', variant: 'number' },
        { label: 'SKU', name: 'sku', variant: 'string' },
        {
            label: 'Interval',
            name: 'interval',
            variant: 'select',
            options: [
                { label: 'Day', value: 'day' },
                { label: 'Week', value: 'week' },
                { label: 'Month', value: 'month' },
                { label: 'Year', value: 'year' }
            ],
            conditions: [
                { name: 'recurring', operator: 'eq', value: true },
            ]
        },
        {
            label: 'Free trial days',
            name: 'free_trial_days',
            variant: 'number',
            conditions: [
                { name: 'recurring', operator: 'eq', value: true },
            ]
        }
    ];
    var inputOptions = {
        media: components_2.MediaInput,
    };
    return react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { fields: fields, inputOptions: inputOptions }));
};
exports.default = AdminProductEditForm;
