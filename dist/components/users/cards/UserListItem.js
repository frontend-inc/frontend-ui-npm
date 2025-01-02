'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var UserListItem = function (props) {
    var _a = props || {}, user = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, handleClick = _a.handleClick;
    return (react_1.default.createElement(__1.ResourceListItem, { handleClick: handleClick, primary: react_1.default.createElement(components_1.Typography, { variant: "subtitle2" }, user === null || user === void 0 ? void 0 : user.name), avatar: react_1.default.createElement(__1.UserAvatar, { user: user }), secondary: react_1.default.createElement(__1.ListFields, { resource: user, fields: displayFields }) }));
};
exports.default = UserListItem;
