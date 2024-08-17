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
var AdminWebhookItem = function (props) {
    var resource = props.resource, sortable = props.sortable, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { enableBorder: true, sortable: sortable, icon: "Webhook", color: "primary.main", resource: __assign({ title: resource === null || resource === void 0 ? void 0 : resource.event_type }, resource), displayFields: [
            {
                label: 'Collection',
                variant: 'string',
                name: 'collection.name',
            },
        ], secondaryActions: react_1.default.createElement(components_1.Label, { label: resource === null || resource === void 0 ? void 0 : resource.event_type }), handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminWebhookItem;
