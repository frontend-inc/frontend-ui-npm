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
var AdminSubscriptionForm = function (props) {
    var _a = props || {}, handleAddAttachment = _a.handleAddAttachment, handleRemoveAttachment = _a.handleRemoveAttachment;
    var inputOptions = {
        media: components_2.MediaInput,
    };
    var inputParams = {
        media: {
            handleAddAttachment: handleAddAttachment,
            handleRemoveAttachment: handleRemoveAttachment,
        },
    };
    return (react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { inputOptions: inputOptions, inputParams: inputParams, fields: [
            { name: 'label', label: 'Label', variant: 'string' },
            { name: 'name', label: 'Name', variant: 'string' },
            {
                name: 'description',
                label: 'Description',
                variant: 'text',
            },
            { name: 'price', label: 'Price', variant: 'number' },
            {
                name: 'interval',
                label: 'Subscription Interval',
                variant: 'select',
                options: [
                    { label: 'Daily', value: 'day' },
                    { label: 'Weekly', value: 'week' },
                    { label: 'Monthly', value: 'month' },
                    { label: 'Yearly', value: 'year' },
                ],
            },
            {
                name: 'features',
                label: 'Plan features',
                variant: 'array',
            },
        ] })));
};
exports.default = AdminSubscriptionForm;
