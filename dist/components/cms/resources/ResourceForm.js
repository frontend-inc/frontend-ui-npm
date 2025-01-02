'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var ResourceForm = function (props) {
    var _a = props || {}, loading = _a.loading, isPublishLoading = _a.isPublishLoading, enablePublish = _a.enablePublish, errors = _a.errors, title = _a.title, open = _a.open, handleClose = _a.handleClose, resource = _a.resource, handleChange = _a.handleChange, handleRemove = _a.handleRemove, handleSubmit = _a.handleSubmit, handlePublish = _a.handlePublish, handleAddAttachment = _a.handleAddAttachment, handleRemoveAttachment = _a.handleRemoveAttachment, _b = _a.fields, fields = _b === void 0 ? [] : _b, inputOptions = _a.inputOptions, inputParams = _a.inputParams;
    return (react_1.default.createElement(components_1.Sheet, { open: open, handleClose: handleClose, title: title ? title : (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', buttons: react_1.default.createElement("div", { className: "flex flex-row space-x-4 justify-between" },
            react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "solid", color: "primary", onPress: handleSubmit, isLoading: loading }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save'),
            enablePublish && (react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "solid", color: "success", onPress: handlePublish, isLoading: isPublishLoading }, "Publish"))) },
        react_1.default.createElement(components_1.FormFields, { errors: errors, loading: loading, fields: fields, resource: resource, handleChange: handleChange, handleRemove: handleRemove, handleAddAttachment: handleAddAttachment, handleRemoveAttachment: handleRemoveAttachment, inputOptions: inputOptions, inputParams: inputParams })));
};
exports.default = ResourceForm;
