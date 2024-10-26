'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var EmailItem = function (props) {
    var email = props.resource, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { enableBorder: true, primary: email.name, secondary: email.subject, icon: "Mail", color: 'bg-purple-500', secondaryAction: (email === null || email === void 0 ? void 0 : email.internal) && react_1.default.createElement(components_1.Label, { label: "System" }), handleClick: function () { return handleEdit(email); }, handleEdit: function () { return handleEdit(email); }, handleDelete: (email === null || email === void 0 ? void 0 : email.internal) ? undefined : function () { return handleDelete(email); } }));
};
exports.default = EmailItem;
