'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminPolicyListItem = function (props) {
    var _a = props || {}, policy = _a.resource, enableBorder = _a.enableBorder, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { sortable: true, disableImage: true, enableBorder: enableBorder, icon: "StickyNote", primary: policy === null || policy === void 0 ? void 0 : policy.title, secondary: "/policies/".concat(policy === null || policy === void 0 ? void 0 : policy.handle), handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminPolicyListItem;
