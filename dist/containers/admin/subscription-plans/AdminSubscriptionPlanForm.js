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
var AdminSubscriptionPlanForm = function (props) {
    return (react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { fields: [
            { name: 'label', label: 'Label', variant: 'string' },
            { name: 'name', label: 'Name', variant: 'string' },
            {
                name: 'description',
                label: 'Description',
                variant: 'text',
            },
            {
                name: 'stripe_plan_id',
                label: 'Stripe plan ID',
                variant: 'string',
            },
            { name: 'price', label: 'Price', variant: 'number' },
            {
                name: 'recurring_interval',
                label: 'Subscription Interval',
                variant: 'select',
                options: [
                    { label: 'Daily', value: 'day' },
                    { label: 'Weekly', value: 'week' },
                    { label: 'Monthly', value: 'month' },
                    { label: 'Quarter', value: 'quarter' },
                    { label: 'Yearly', value: 'year' },
                ],
            },
            {
                name: 'recurring',
                label: 'This is a recurring plan',
                variant: 'boolean',
            },
            {
                name: 'free_trial_period',
                label: 'Free trial period',
                variant: 'select',
                options: [
                    { label: '1 day', value: '1' },
                    { label: '3 days', value: '3' },
                    { label: '7 days', value: '7' },
                    { label: '14 days', value: '14' },
                    { label: '30 days', value: '30' },
                ],
            },
            {
                name: 'free_trial',
                label: 'This plan includes a free trial',
                variant: 'boolean',
            },
            {
                name: 'features',
                label: 'Plan features',
                variant: 'array',
            },
        ] })));
};
exports.default = AdminSubscriptionPlanForm;
