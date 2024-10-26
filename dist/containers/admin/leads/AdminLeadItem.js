'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminLeadItem = function (props) {
    var lead = props.resource, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { primary: lead === null || lead === void 0 ? void 0 : lead.name, secondary: lead === null || lead === void 0 ? void 0 : lead.email, avatar: react_1.default.createElement(components_1.UserAvatar, { user: lead }), handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminLeadItem;
