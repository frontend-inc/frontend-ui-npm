'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminSubscriptionItem = function (props) {
    var subscription = props.resource, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { icon: "CreditCard", primary: subscription === null || subscription === void 0 ? void 0 : subscription.name, secondary: subscription === null || subscription === void 0 ? void 0 : subscription.display_price, secondaryAction: (subscription === null || subscription === void 0 ? void 0 : subscription.label) && react_1.default.createElement(components_1.Label, { label: subscription === null || subscription === void 0 ? void 0 : subscription.label }), color: 'bg-amber-500', handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminSubscriptionItem;
