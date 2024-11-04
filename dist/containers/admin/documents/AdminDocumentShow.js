'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminDocumentShow = function (props) {
    var _a;
    var _b = props || {}, resource = _b.resource, loading = _b.loading, open = _b.open, handleClose = _b.handleClose, _c = _b.fields, fields = _c === void 0 ? [] : _c, enableEdit = _b.enableEdit, enableDelete = _b.enableDelete, handleDelete = _b.handleDelete, handleEdit = _b.handleEdit;
    var filteredFields = fields.filter(function (f) { return !["label", "title", "image", "description", "handle"].includes(f.name); });
    return (react_1.default.createElement(components_1.ResourceModal, { loading: loading, open: open, handleClose: handleClose, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: handleEdit, handleDelete: handleDelete },
        react_1.default.createElement(components_1.ResourceDetails, { label: resource === null || resource === void 0 ? void 0 : resource.label, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.title, secondary: resource === null || resource === void 0 ? void 0 : resource.description, resource: resource, fields: filteredFields, direction: "column" })));
};
exports.default = AdminDocumentShow;
