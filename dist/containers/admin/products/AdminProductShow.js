'use client';
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
var AdminProductShow = function (props) {
    var _a;
    var _b = props || {}, resource = _b.resource, loading = _b.loading, open = _b.open, handleClose = _b.handleClose, _c = _b.metafields, metafields = _c === void 0 ? [] : _c, enableEdit = _b.enableEdit, enableDelete = _b.enableDelete, handleDelete = _b.handleDelete, handleEdit = _b.handleEdit;
    var fields = __spreadArray([
        { label: 'Price', name: 'price', variant: 'number' },
        { label: 'Compare at price', name: 'compare_at_price', variant: 'number' },
        { label: 'SKU', name: 'sku', variant: 'string' }
    ], metafields, true);
    return (react_1.default.createElement(components_1.ResourceModal, { loading: loading, open: open, handleClose: handleClose, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: handleEdit, handleDelete: handleDelete },
        react_1.default.createElement(components_1.ResourceDetails, { label: resource === null || resource === void 0 ? void 0 : resource.label, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.title, secondary: resource === null || resource === void 0 ? void 0 : resource.description, resource: resource, fields: fields, direction: "column" })));
};
exports.default = AdminProductShow;
