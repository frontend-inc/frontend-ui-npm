'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var helpers_1 = require("../../../helpers");
var frontend_shadcn_1 = require("frontend-shadcn");
var AdminTokenListItem = function (props) {
    var token = props.resource, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    var showAlertSuccess = (0, hooks_1.useAlerts)().showAlertSuccess;
    var handleCopyToken = function () {
        (0, copy_to_clipboard_1.default)(token.api_key);
        showAlertSuccess("".concat(token.name, " API Key copied to clipboard"));
    };
    return (react_1.default.createElement(components_1.ResourceListItem, { enableBorder: true, disableImage: true, primary: token === null || token === void 0 ? void 0 : token.name, secondary: (0, helpers_1.truncate)(token === null || token === void 0 ? void 0 : token.api_key, 20), icon: "Key", color: (token === null || token === void 0 ? void 0 : token.internal) ? 'bg-purple-500' : 'bg-teal-500', handleClick: handleCopyToken, handleEdit: !(token === null || token === void 0 ? void 0 : token.internal) ? function () { return handleEdit(token); } : undefined, handleDelete: !(token === null || token === void 0 ? void 0 : token.internal) ? function () { return handleDelete(token); } : undefined, secondaryAction: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(frontend_shadcn_1.Badge, null, (token === null || token === void 0 ? void 0 : token.admin) ? 'Admin' : 'Public'),
            token.internal && react_1.default.createElement(frontend_shadcn_1.Badge, null, "system")) }));
};
exports.default = AdminTokenListItem;
