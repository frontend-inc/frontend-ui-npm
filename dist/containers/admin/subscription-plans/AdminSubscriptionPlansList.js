"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var containers_1 = require("../../../containers");
var AdminSubscriptionPlansList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.ResourceList, { url: "".concat(apiUrl, "/subscription_plans"), name: "subscription_plan", enableSearch: true, enableCreate: true, enableEdit: true, enableDelete: true, sortOptions: [
            { name: 'name', label: 'Name' },
            { name: 'price', label: 'price' },
        ], fields: [
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
        ], component: containers_1.AdminSubscriptionPlanItem }));
};
exports.default = AdminSubscriptionPlansList;
