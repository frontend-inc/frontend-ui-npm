"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var UserListItem = function (props) {
    var _a = props || {}, user = _a.resource, _b = _a.size, size = _b === void 0 ? 44 : _b, _c = _a.displayFields, displayFields = _c === void 0 ? [] : _c, handleClick = _a.handleClick;
    return (react_1.default.createElement(__1.ResourceListItem, { handleClick: handleClick, primary: react_1.default.createElement(material_1.Typography, { variant: "subtitle2", color: "text.primary" }, user === null || user === void 0 ? void 0 : user.name), avatar: react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, alignItems: "center" },
            react_1.default.createElement(__1.UserAvatar, { size: size, user: user })), secondary: react_1.default.createElement(__1.DisplayFields, { resource: user, fields: displayFields }) }));
};
exports.default = UserListItem;
