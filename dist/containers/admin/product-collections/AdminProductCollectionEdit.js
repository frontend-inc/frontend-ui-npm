"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var __1 = require("../..");
var AdminProductForm = function (props) {
    var _a = (props || {}).metafields, metafields = _a === void 0 ? [] : _a;
    var _b = props || {}, loading = _b.loading, errors = _b.errors, open = _b.open, handleClose = _b.handleClose, resource = _b.resource, handleChange = _b.handleChange, handleAddAttachment = _b.handleAddAttachment, handleRemoveAttachment = _b.handleRemoveAttachment, handleRemove = _b.handleRemove, handleSubmit = _b.handleSubmit;
    var fields = __spreadArray([
        { label: 'Handle', name: 'handle', variant: 'string' },
        { label: 'Title', name: 'title', variant: 'string' },
        { label: 'Description', name: 'description', variant: 'text' },
        { label: 'Label', name: 'label', variant: 'string' }
    ], metafields, true);
    return (react_1.default.createElement(components_1.Drawer, { open: open, handleClose: handleClose, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', buttons: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
        react_1.default.createElement(material_1.Stack, { spacing: 1 },
            react_1.default.createElement(__1.MediaInput, { name: "image", value: resource === null || resource === void 0 ? void 0 : resource.image, handleAddAttachment: handleAddAttachment, handleRemoveAttachment: handleRemoveAttachment }),
            react_1.default.createElement(components_1.FormFields, { errors: errors, loading: loading, fields: fields, resource: resource, handleChange: handleChange, handleRemove: handleRemove }))));
};
exports.default = AdminProductForm;
