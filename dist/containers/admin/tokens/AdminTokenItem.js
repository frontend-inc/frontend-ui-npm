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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var COLORS = __importStar(require("@mui/material/colors"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var TokenItem = function (props) {
    var token = props.resource, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    var showAlertSuccess = (0, hooks_1.useAlerts)().showAlertSuccess;
    var handleCopyToken = function () {
        (0, copy_to_clipboard_1.default)(token.api_key);
        showAlertSuccess("".concat(token.name, " API Key copied to clipboard"));
    };
    return (react_1.default.createElement(components_1.ResourceListItem, { enableBorder: true, resource: __assign({ title: token === null || token === void 0 ? void 0 : token.name }, token), displayFields: [
            {
                label: 'Api Key',
                variant: 'string',
                name: 'api_key',
            },
        ], icon: "Key", color: (token === null || token === void 0 ? void 0 : token.internal) ? COLORS.deepPurple[500] : COLORS.teal[500], handleClick: handleCopyToken, handleEdit: !(token === null || token === void 0 ? void 0 : token.internal) ? function () { return handleEdit(token); } : undefined, handleDelete: !(token === null || token === void 0 ? void 0 : token.internal) ? function () { return handleDelete(token); } : undefined, secondaryActions: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(components_1.Label, { label: (token === null || token === void 0 ? void 0 : token.admin) ? 'Admin' : 'Public' }),
            token.internal && react_1.default.createElement(components_1.Label, { label: 'system' })) }));
};
exports.default = TokenItem;
