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
var material_1 = require("@mui/material");
var AdminContactItem = function (props) {
    var contact = props.resource, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { primary: react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
            (contact === null || contact === void 0 ? void 0 : contact.name) && (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, contact === null || contact === void 0 ? void 0 : contact.name)),
            react_1.default.createElement(components_1.Label, { label: contact === null || contact === void 0 ? void 0 : contact.source })), secondary: contact === null || contact === void 0 ? void 0 : contact.email, avatar: react_1.default.createElement(components_1.UserAvatar, { user: __assign(__assign({}, contact), { name: (contact === null || contact === void 0 ? void 0 : contact.name) || (contact === null || contact === void 0 ? void 0 : contact.email) }) }), handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete }));
};
exports.default = AdminContactItem;
