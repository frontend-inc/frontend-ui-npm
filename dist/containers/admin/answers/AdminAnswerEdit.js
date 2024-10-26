'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../../components/core");
var components_1 = require("../../../components");
var AdminAnswerEdit = function (props) {
    var _a = props || {}, loading = _a.loading, errors = _a.errors, title = _a.title, open = _a.open, handleClose = _a.handleClose, resource = _a.resource, handleChange = _a.handleChange, handleRemove = _a.handleRemove, handleSubmit = _a.handleSubmit, handleAddAttachment = _a.handleAddAttachment, handleRemoveAttachment = _a.handleRemoveAttachment, inputOptions = _a.inputOptions, inputParams = _a.inputParams;
    var fields = [
        { label: 'Answer', name: 'title', variant: 'string' },
        { label: 'Value', name: 'value', variant: 'string' },
        { label: 'Image', name: 'image', variant: 'media' },
        {
            label: 'If selected, assign product and points',
            name: 'results',
            variant: 'divider',
        },
        { label: 'Points', name: 'points', variant: 'number' },
        {
            label: 'Shopify product',
            name: 'shopify_product',
            variant: 'shopify_product',
        },
    ];
    return (react_1.default.createElement(components_1.Sheet, { open: open, handleClose: handleClose, title: title ? title : (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', buttons: react_1.default.createElement(core_1.Button, { fullWidth: true, onClick: handleSubmit, startIcon: loading && react_1.default.createElement(components_1.IconLoading, null) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
        react_1.default.createElement(components_1.FormFields, { errors: errors, loading: loading, fields: fields, resource: resource, handleChange: handleChange, handleRemove: handleRemove, handleAddAttachment: handleAddAttachment, handleRemoveAttachment: handleRemoveAttachment, inputOptions: inputOptions, inputParams: inputParams })));
};
exports.default = AdminAnswerEdit;
