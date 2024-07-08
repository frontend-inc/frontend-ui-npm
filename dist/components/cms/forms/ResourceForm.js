"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var frontend_js_2 = require("frontend-js");
var ResourceForm = function (props) {
    var _a = props || {}, fields = _a.fields, _resource = _a.resource;
    var _b = (0, react_1.useContext)(frontend_js_2.ResourceContext), openDeleteModal = _b.openDeleteModal, setOpenDeleteModal = _b.setOpenDeleteModal, openFormModal = _b.openFormModal, setOpenFormModal = _b.setOpenFormModal;
    var _c = (0, hooks_1.useForms)({
        resource: _resource
    }), loading = _c.loading, errors = _c.errors, resource = _c.resource, handleSubmit = _c.handleSubmit, handleDataChange = _c.handleDataChange, handleRemove = _c.handleRemove, handleDelete = _c.handleDelete;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.Drawer, { open: openFormModal, handleClose: function () { return setOpenFormModal(false); }, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', actions: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
            react_1.default.createElement(components_1.Form, { loading: loading, errors: errors, fields: fields, resource: (0, frontend_js_1.flattenDocument)(resource), handleChange: handleDataChange, handleRemove: handleRemove })),
        react_1.default.createElement(components_1.AlertModal, { open: openDeleteModal, handleClose: function () { return setOpenDeleteModal(false); }, title: "Are you sure you want to delete this item?", description: "This action cannot be reversed.", handleConfirm: handleDelete })));
};
exports.default = ResourceForm;
