"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var CollectionFormModal = function (props) {
    var _a = props || {}, fields = _a.fields, _resource = _a.resource;
    var _b = (0, frontend_js_1.useCollection)(), openDelete = _b.openDelete, setOpenDelete = _b.setOpenDelete, openEdit = _b.openEdit, setOpenEdit = _b.setOpenEdit;
    var _c = (0, hooks_1.useForms)({
        resource: _resource
    }), loading = _c.loading, errors = _c.errors, resource = _c.resource, handleSubmit = _c.handleSubmit, handleChange = _c.handleChange, handleRemove = _c.handleRemove, handleDelete = _c.handleDelete;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.Drawer, { open: openEdit, handleClose: function () { return setOpenEdit(false); }, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', actions: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(__1.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
            react_1.default.createElement(__1.Form, { loading: loading, errors: errors, fields: fields, resource: (0, frontend_js_1.flattenDocument)(resource), handleChange: handleChange, handleRemove: handleRemove })),
        react_1.default.createElement(__1.AlertModal, { open: openDelete, handleClose: function () { return setOpenDelete(false); }, title: "Are you sure you want to delete this item?", description: "This action cannot be reversed.", handleConfirm: handleDelete })));
};
exports.default = CollectionFormModal;
