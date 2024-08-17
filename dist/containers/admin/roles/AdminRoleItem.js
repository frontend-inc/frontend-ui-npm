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
var AdminRoleItem = function (props) {
    var _a = props || {}, role = _a.resource, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete;
    return (react_1.default.createElement(components_1.ResourceListItem, { enableBorder: true, sortable: true, icon: "User", color: "primary.main", resource: __assign({ title: role === null || role === void 0 ? void 0 : role.label }, role), displayFields: [{ name: 'name', label: 'Name', variant: 'string' }], secondaryActions: (role === null || role === void 0 ? void 0 : role.internal) ? react_1.default.createElement(components_1.Label, { label: "System" }) : null, handleEdit: !(role === null || role === void 0 ? void 0 : role.internal) ? handleEdit : undefined, handleDelete: !(role === null || role === void 0 ? void 0 : role.internal) ? handleDelete : undefined }));
};
exports.default = AdminRoleItem;
