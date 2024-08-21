"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var containers_1 = require("../../../containers");
var WEBHOOK_EVENT_TYPES = [
    { label: 'User registered', value: 'users.create' },
    { label: 'User updated', value: 'users.update' },
    { label: 'Resource created', value: 'resources.create' },
    { label: 'Resource updated', value: 'resources.save' },
    { label: 'Resource deleted', value: 'resources.delete' },
];
var AdminWebhooksList = function () {
    var apiUrl = (0, hooks_1.useAdmin)().apiUrl;
    return (react_1.default.createElement(components_1.Resources, { url: "".concat(apiUrl, "/webhooks"), name: "webhook", enableCreate: true, enableEdit: true, enableSearch: true, enableDelete: true, query: {
            sort_by: 'event_type',
            sort_direction: 'asc',
        }, filterOptions: [
            {
                label: 'Type',
                field: 'event_type',
                variant: 'multiple_choice',
                options: WEBHOOK_EVENT_TYPES,
            },
        ], fields: [
            {
                label: 'Event type',
                name: 'event_type',
                variant: 'select',
                options: WEBHOOK_EVENT_TYPES,
            },
            {
                label: 'Collection',
                name: 'collection_id',
                variant: 'autosuggest',
                displayField: 'name',
                url: "".concat(apiUrl, "/collections"),
                query: {},
                conditions: [
                    {
                        name: 'event_type',
                        operator: 'in',
                        value: [
                            'resources.create',
                            'resources.save',
                            'resources.delete',
                        ],
                    },
                ],
            },
        ], component: containers_1.AdminWebhookItem, emptyIcon: "Hook", emptyTitle: "No webhooks", emptyDescription: "No webhooks yet." }));
};
exports.default = AdminWebhooksList;
