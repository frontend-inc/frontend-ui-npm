"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminProductShow = function (props) {
    var _a, _b;
    var _c = props || {}, resource = _c.resource, loading = _c.loading, open = _c.open, handleClose = _c.handleClose, enableEdit = _c.enableEdit, enableDelete = _c.enableDelete, handleDelete = _c.handleDelete, handleEdit = _c.handleEdit;
    var fields = [
        { label: 'Number', name: 'display_number', variant: 'string' },
        { label: 'Subtotal', name: 'display_subtotal', variant: 'string' },
        { label: 'Total', name: 'display_total', variant: 'string' },
    ];
    return (react_1.default.createElement(components_1.ResourceDetails, { loading: loading, open: open, handleClose: handleClose, image: (_b = (_a = resource === null || resource === void 0 ? void 0 : resource.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.url, primary: resource === null || resource === void 0 ? void 0 : resource.display_number, secondary: resource === null || resource === void 0 ? void 0 : resource.display_total, label: resource === null || resource === void 0 ? void 0 : resource.status, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: handleEdit, handleDelete: handleDelete, resource: resource, fields: fields, direction: "column" }));
};
exports.default = AdminProductShow;
