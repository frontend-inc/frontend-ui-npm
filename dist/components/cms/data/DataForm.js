'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var DataForm = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), loading = _a.loading, errors = _a.errors, handleChange = _a.handleChange, handleRemove = _a.handleRemove, handleSubmit = _a.handleSubmit, resource = _a.resource, openEdit = _a.openEdit, setOpenEdit = _a.setOpenEdit;
    var _b = (props || {}).fields, fields = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(__1.Sheet, { open: openEdit, handleClose: function () { return setOpenEdit(false); }, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', buttons: react_1.default.createElement(components_1.Button, { fullWidth: true, onClick: handleSubmit, loading: loading }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
        react_1.default.createElement(__1.FormFields, { errors: errors, loading: loading, fields: fields, resource: resource, handleChange: handleChange, handleRemove: handleRemove })));
};
exports.default = DataForm;
