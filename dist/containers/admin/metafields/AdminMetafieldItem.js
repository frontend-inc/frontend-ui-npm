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
var containers_1 = require("../../../containers");
var AdminMetafieldItem = function (props) {
    var resource = props.resource, sortable = props.sortable, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { enableBorder: true, sortable: sortable, avatar: react_1.default.createElement(containers_1.FieldIcon, { variant: resource === null || resource === void 0 ? void 0 : resource.variant }), resource: __assign({ title: resource === null || resource === void 0 ? void 0 : resource.label }, resource), displayFields: [
            {
                label: 'Name',
                variant: 'string',
                name: 'name',
            },
        ], secondaryActions: react_1.default.createElement(components_1.Label, { label: resource === null || resource === void 0 ? void 0 : resource.variant }), handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminMetafieldItem;
