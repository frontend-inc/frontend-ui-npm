"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var AdminShopifyMetafieldItem = function (props) {
    var resource = props.resource, sortable = props.sortable, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { enableBorder: true, sortable: sortable, avatar: react_1.default.createElement(__1.FieldIcon, { variant: resource === null || resource === void 0 ? void 0 : resource.variant }), primary: resource === null || resource === void 0 ? void 0 : resource.label, secondary: "".concat(resource === null || resource === void 0 ? void 0 : resource.name), secondaryActions: react_1.default.createElement(components_1.Label, { label: resource === null || resource === void 0 ? void 0 : resource.variant }), handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminShopifyMetafieldItem;
