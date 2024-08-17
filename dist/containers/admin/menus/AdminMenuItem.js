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
var AdminMenuItem = function (props) {
    var _a = props || {}, menu = _a.resource, sortable = _a.sortable, enableBorder = _a.enableBorder, handleClick = _a.handleClick, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { sortable: sortable, enableBorder: enableBorder, icon: "FolderTree", color: "primary.main", resource: __assign({ title: menu === null || menu === void 0 ? void 0 : menu.label }, menu), secondaryActions: react_1.default.createElement(react_1.default.Fragment, null, (menu === null || menu === void 0 ? void 0 : menu.internal) && react_1.default.createElement(components_1.Label, { label: "System" })), handleClick: handleClick, handleEdit: !(menu === null || menu === void 0 ? void 0 : menu.internal) ? handleEdit : undefined, handleDelete: !(menu === null || menu === void 0 ? void 0 : menu.internal) ? handleDelete : undefined }));
};
exports.default = AdminMenuItem;
