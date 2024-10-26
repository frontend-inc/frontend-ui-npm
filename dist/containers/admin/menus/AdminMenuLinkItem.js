'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminMenuLinkItem = function (props) {
    var _a = props || {}, link = _a.resource, sortable = _a.sortable, enableBorder = _a.enableBorder, handleClick = _a.handleClick, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { sortable: sortable, enableBorder: enableBorder, icon: "Link", primary: link === null || link === void 0 ? void 0 : link.label, handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminMenuLinkItem;
