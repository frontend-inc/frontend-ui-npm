"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var ResourceForm = function (props) {
    var _a = props || {}, loading = _a.loading, errors = _a.errors, open = _a.open, handleClose = _a.handleClose, resource = _a.resource, handleChange = _a.handleChange, handleRemove = _a.handleRemove, handleSubmit = _a.handleSubmit, _b = _a.fields, fields = _b === void 0 ? [] : _b;
    return (react_1.default.createElement(components_1.Drawer, { open: open, handleClose: handleClose, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', buttons: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
        react_1.default.createElement(components_1.FormFields, { errors: errors, loading: loading, fields: fields, resource: resource, handleChange: handleChange, handleRemove: handleRemove })));
};
exports.default = ResourceForm;
