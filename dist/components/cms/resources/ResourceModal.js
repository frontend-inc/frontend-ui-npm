'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var components_1 = require("../../../components");
var ResourceModal = function (props) {
    var _a = props || {}, loading = _a.loading, title = _a.title, open = _a.open, handleClose = _a.handleClose, children = _a.children, enableEdit = _a.enableEdit, enableDelete = _a.enableDelete, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, _b = _a.maxWidth, maxWidth = _b === void 0 ? 'xs' : _b;
    return (react_1.default.createElement(__1.Sheet, { open: open, handleClose: handleClose, title: title, maxWidth: maxWidth, buttons: (enableEdit || enableDelete) && (react_1.default.createElement("div", { className: "w-full flex flex-row space-x-2" },
            enableEdit && (react_1.default.createElement(components_1.Button, { fullWidth: true, onClick: handleEdit }, "Edit")),
            enableDelete && (react_1.default.createElement(components_1.Button, { fullWidth: true, color: "secondary", onClick: handleDelete }, "Delete")))) }, loading == true ? (react_1.default.createElement("div", { className: "min-h-[400px] flex flex-col items-center justify-center" },
        react_1.default.createElement(__1.CircularLoader, { size: "lg" }))) : (children)));
};
exports.default = ResourceModal;
