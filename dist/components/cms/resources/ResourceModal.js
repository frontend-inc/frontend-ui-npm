"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var material_1 = require("@mui/material");
var ResourceModal = function (props) {
    var _a = props || {}, loading = _a.loading, title = _a.title, open = _a.open, handleClose = _a.handleClose, children = _a.children, enableEdit = _a.enableEdit, enableDelete = _a.enableDelete, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, disablePadding = _a.disablePadding;
    return (react_1.default.createElement(__1.Drawer, { open: open, handleClose: handleClose, title: title, disablePadding: disablePadding, buttons: (enableEdit || enableDelete) && (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: { width: '100%' } },
            enableEdit && (react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleEdit }, "Edit")),
            enableDelete && (react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "secondary", onClick: handleDelete }, "Delete")))) }, loading == true ? (react_1.default.createElement(__1.CircularLoader, { size: 44 })) : (children)));
};
exports.default = ResourceModal;
