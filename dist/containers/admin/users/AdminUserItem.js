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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var AdminUserItem = function (props) {
    var user = props.resource, selectable = props.selectable, selected = props.selected, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handleSelect = props.handleSelect, rest = __rest(props, ["resource", "selectable", "selected", "handleClick", "handleEdit", "handleDelete", "handleSelect"]);
    return (react_1.default.createElement(components_1.ResourceListItem, __assign({ selectable: selectable, selected: selected, primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, user === null || user === void 0 ? void 0 :
            user.name,
            " ",
            react_1.default.createElement(components_1.Label, { label: user.role })), secondary: "@".concat(user === null || user === void 0 ? void 0 : user.username), secondaryActions: user.paid && react_1.default.createElement(components_1.Label, { label: 'Paid' }), avatar: react_1.default.createElement(components_1.UserAvatar, { user: user }), handleEdit: handleEdit, handleDelete: handleDelete, handleClick: handleClick, handleSelect: handleSelect }, rest)));
};
exports.default = AdminUserItem;
