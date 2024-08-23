"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var AdminUserItem = function (props) {
    var user = props.resource, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    return (react_1.default.createElement(components_1.ResourceListItem, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: 'text.primary' }, user === null || user === void 0 ? void 0 :
            user.name,
            " ",
            react_1.default.createElement(components_1.Label, { label: user.role })), secondary: "@".concat(user === null || user === void 0 ? void 0 : user.username), secondaryActions: user.paid && react_1.default.createElement(components_1.Label, { label: 'Paid' }), avatar: react_1.default.createElement(components_1.UserAvatar, { user: user }), handleEdit: handleEdit, handleDelete: handleDelete, handleClick: handleClick }));
};
exports.default = AdminUserItem;
